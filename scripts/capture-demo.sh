#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out/stills
for f in 0 30 84 90 99 120 173 180 189 220 289 300 309 340 379 390 399 420 449; do
  ffmpeg -loglevel error -y -i out/premium-demo-01.mp4 -vf "select=eq(n\,$f)" -vsync 0 -frames:v 1 "out/stills/frame-$(printf '%03d' "$f").png"
done
ffmpeg -loglevel error -y -pattern_type glob -i 'out/stills/*.png' -vf 'scale=216:384,tile=5x4:padding=8:margin=8:color=0x333333' -frames:v 1 -update 1 out/contact-sheet.png
ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,width,height,r_frame_rate,nb_frames,duration -of json out/premium-demo-01.mp4 > out/metadata.json
