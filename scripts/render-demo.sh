#!/usr/bin/env bash
set -euo pipefail
npm run validate:brief
if [[ ! -f apps/remotion/package.json ]]; then echo "Remotion implementation missing; ask Codex to finish the app first." >&2; exit 1; fi
mkdir -p out
cd apps/remotion
npx remotion render PremiumDemo01 ../../out/premium-demo-01.mp4 --codec=h264 --pixel-format=yuv420p
