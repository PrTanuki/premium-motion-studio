# Hermes integration
Hermes VPS has 2 GB RAM. Hermes creates or selects an approved brief, validates it and triggers `render-on-demand.yml` through the GitHub REST `workflow_dispatch` endpoint. Never run headless Chromium or the video render locally.
Use a fine-grained GitHub token with the minimum Actions:write scope to invoke the workflow, and Contents:read if needed. Keep credentials in Hermes secret storage.
Monitor the workflow, download the produced artifact, inspect the QA report and return the result. Limit retries and concurrent jobs. The initial workflow accepts only an allowlisted composition, not arbitrary commands or file paths.
