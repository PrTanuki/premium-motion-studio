# Premium Motion Studio

AI-assisted premium kinetic typography and motion design.

## Architecture
- `apps/remotion`: Remotion + React + SVG, with optional frame-synchronised GSAP.
- `apps/motion-canvas`: independent experimentation engine.
- `.agents/skills`: creative direction, storyboard, production and QA skills.
- `briefs/demo-01.json`: 15-second 9:16 demo spec (450 frames).
- `.github/workflows`: CI checks and on-demand cloud video rendering.

## Quick start
1. Open this repository in Codex Cloud.
2. Read `AGENTS.md` and the relevant `.agents/skills/**/SKILL.md` documents.
3. Run `npm run setup:remotion` and develop the first demo.
4. Run the CI and render workflows.

The initial repository is an **agent-ready starter**. Video engines, dependencies, and produced MP4 are completed and verified by Codex during implementation. Hermes (2 GB VPS) orchestrates render jobs; GitHub-hosted runners perform rendering.
