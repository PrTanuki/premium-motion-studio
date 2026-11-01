#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/validate-cnarm.mjs
mkdir -p out/cnarm
extra=()
if [[ -n "${REMOTION_BROWSER_EXECUTABLE:-}" ]]; then
  extra+=("--browser-executable=$REMOTION_BROWSER_EXECUTABLE")
fi
(cd apps/remotion && npx remotion render src/index.tsx CNARMRecruitment01 ../../out/cnarm/cnarm-recrutement-01.mp4 --codec=h264 --crf=17 --pixel-format=yuv420p --concurrency=2 "${extra[@]}")
python3 scripts/capture-cnarm.py
