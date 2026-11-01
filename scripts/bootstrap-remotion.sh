#!/usr/bin/env bash
set -euo pipefail
if [[ -e apps/remotion/package.json ]]; then echo "Remotion app already exists"; exit 0; fi
mkdir -p apps
echo "Initialize the blank Remotion TypeScript project in apps/remotion using the currently documented create-video CLI."
echo "Codex: check npx create-video@latest --help, then run it with the appropriate flags, avoiding interactive prompts."
echo "Install official agent skills: npx -y skills@latest add remotion-dev/skills -g -y"
echo "Verify GSAP version and Remotion frame-sync compatibility before adding GSAP."
