# Agent instructions — Premium Motion Studio
Read this file and the relevant local SKILL.md before changes.
Goal: premium editorial motion graphics, reproducible frame-based animation, no generic effects.
Use Remotion as the primary delivery engine; Motion Canvas as a separate experimental app. Never mix both runtimes.
Check the actual documentation and installed package versions before coding. GSAP may only be used with a verified frame-synchronised integration; otherwise use Remotion primitives.
Storyboard first, implement, render a contact sheet, inspect scene boundaries, fix clipping and timing, and export MP4.
The first deliverable is `briefs/demo-01.json`: 1080x1920, 30fps, 450 frames, 5 connected scenes.
Do not claim success without real test or render logs. No credentials in commits.
Hermes operates on 2 GB RAM and must NOT render locally. Expose GitHub Actions workflow_dispatch with validated inputs and upload artifacts.
Avoid heavyweight generated files and node_modules in Git. Deliver reproducible npm scripts, clear README, license checks and QA report.
