#!/usr/bin/env python3
"""Extract the requested encoded frames, label a contact sheet and verify metadata."""
import json, subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
brief=json.loads((root/'briefs/cnarm-recruitment-01.json').read_text())
video=Path(sys.argv[1]) if len(sys.argv)>1 else root/'out/cnarm/cnarm-recrutement-01.mp4'
out=video.parent
stills=out/'stills'; stills.mkdir(parents=True,exist_ok=True)
frames=brief['captureFrames']
select='+'.join(f'eq(n\\,{f})' for f in frames)
subprocess.run(['ffmpeg','-v','error','-y','-i',str(video),'-vf',f'select={select}','-fps_mode','vfr',str(stills/'capture-%03d.png')],check=True)
for n,f in enumerate(frames,1): (stills/f'capture-{n:03}.png').rename(stills/f'frame-{f:03}.png')
meta=json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','v:0','-show_entries','stream=codec_name,width,height,r_frame_rate,avg_frame_rate,nb_frames,duration,pix_fmt','-of','json',str(video)]))
s=meta['streams'][0]
expected={'codec_name':'h264','width':1080,'height':1920,'r_frame_rate':'30/1','nb_frames':'450','pix_fmt':'yuv420p'}
for k,v in expected.items(): assert s[k]==v, (k,s[k],v)
assert abs(float(s['duration'])-15)<.001
(out/'metadata.json').write_text(json.dumps(meta,indent=2)+'\n')
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',17)
cols=7; w,h,pad,label=216,384,12,35
sheet=Image.new('RGB',(cols*(w+pad)+pad,3*(h+label+pad)+pad),(22,29,39))
d=ImageDraw.Draw(sheet)
for i,f in enumerate(frames):
    x=pad+(i%cols)*(w+pad); y=pad+(i//cols)*(h+label+pad)
    im=Image.open(stills/f'frame-{f:03}.png').convert('RGB'); im.thumbnail((w,h))
    sheet.paste(im,(x,y)); d.text((x,y+h+8),f'{f:03}  /  {f/30:.2f} s',font=font,fill='white')
sheet.save(out/'contact-sheet.png')
# Five representative full-resolution images and a 360-pixel smartphone strip.
for f,name in [(60,'01-accroche'),(150,'02-metropole'),(240,'03-trajectoire'),(330,'04-accompagnement'),(449,'05-signature')]:
    Image.open(stills/f'frame-{f:03}.png').save(out/f'{name}.png')
phone=Image.new('RGB',(360*5,640))
for i,f in enumerate([60,150,240,330,449]):
    phone.paste(Image.open(stills/f'frame-{f:03}.png').resize((360,640),Image.Resampling.LANCZOS),(i*360,0))
phone.save(out/'smartphone-scenes.png')
print(json.dumps({'verified':expected,'frames':len(frames),'contact_sheet':str(out/'contact-sheet.png')}))
