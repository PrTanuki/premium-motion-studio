import React, {useEffect, useState} from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {continueRender, delayRender, Img, staticFile, useVideoConfig} from 'remotion';
import {cnarmBrand as B} from './brand';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/600.css';

/** Masked, fitted live typography. GSAP owns only the ink translation. */
export const KineticLine: React.FC<{
  text: string; x?: number; y: number; size: number; width?: number;
  color?: string; at?: number; duration?: number; tracking?: number;
}> = ({text,x=90,y,size,width=810,color=B.cream,at=0,duration=15,tracking=-4}) => {
  const {fps} = useVideoConfig();
  const [fontSize,setFontSize] = useState(size);
  const [handle] = useState(()=>delayRender(`Fit CNARM: ${text}`));
  useEffect(()=>{
    let active=true;
    document.fonts.load(`700 100px "${B.font}"`).then(()=>{
      if (!active) return;
      const ctx=document.createElement('canvas').getContext('2d')!;
      ctx.font=`700 ${size}px "${B.font}"`;
      const natural=ctx.measureText(text).width;
      setFontSize(Math.min(size,size*(width-tracking*(text.length-1)-3)/natural));
      continueRender(handle);
    }).catch(()=>continueRender(handle));
    return ()=>{active=false;};
  },[text,size,width,tracking,handle]);
  const ref=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
    if(at<0) return;
    timeline.fromTo(selector('[data-ink]'),{yPercent:112},{yPercent:0,duration:duration/fps,ease:'power4.out'},at/fps);
  },{dependencies:[at,duration,fps]});
  return <div ref={ref} data-text-mask style={{position:'absolute',left:x,top:y,width,height:size*1.24,overflow:'hidden'}}>
    <div data-ink data-safe-text data-copy={text} style={{fontFamily:B.font,fontWeight:700,fontSize,lineHeight:1.18,letterSpacing:tracking,color,whiteSpace:'nowrap',width:'max-content'}}>{text}</div>
  </div>;
};

export const Eyebrow: React.FC<{text:string;y?:number;color?:string}> = ({text,y=350,color=B.pale}) =>
  <div data-safe-text data-copy={text} style={{position:'absolute',left:94,top:y,fontFamily:B.bodyFont,fontWeight:600,fontSize:25,letterSpacing:2.5,color}}>{text}</div>;

export const OfficialLogo: React.FC<{x?:number;y?:number;width?:number}> = ({x=90,y=240,width=250}) =>
  <Img data-safe-logo src={staticFile(B.logo)} style={{position:'absolute',left:x,top:y,width,height:width*2/7,objectFit:'contain',background:'#FFFFFF'}}/>;

/** Direction sign, never a substitute for the CNARM logo. */
export const Direction: React.FC<{x:number;y:number;size:number;color?:string;rotate?:number}> = ({x,y,size,color=B.orange,rotate=-45}) =>
  <svg aria-hidden style={{position:'absolute',left:x,top:y,transform:`rotate(${rotate}deg)`}} width={size} height={size} viewBox="0 0 200 200">
    <path d="M24 90H145L95 40L109 26L183 100L109 174L95 160L145 110H24Z" fill={color}/>
  </svg>;
