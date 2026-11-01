#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out
(cd apps/remotion && npx remotion render src/index.tsx PremiumDemo01 ../../out/premium-demo-01.mp4 --concurrency=2)
bash scripts/capture-demo.sh
