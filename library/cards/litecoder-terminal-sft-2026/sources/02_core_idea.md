LiteCoder scales terminal environments and collects 11,255 verified conversations that preserve the entire instruction-reasoning-command-observation sequence. Relative to sub-1K terminal SFT collections, it makes trajectory id and ordered human/assistant/tool conversation turns the reusable target and uses environment success, replay validation, difficulty filtering, and trajectory quality checks as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: LiteCoder-SFT-Terminal
Official URL: https://huggingface.co/datasets/Lite-Coder/LiteCoder-Terminal-SFT
Scale: 11,255 complete terminal-agent trajectories
Record form: trajectory id and ordered human/assistant/tool conversation turns
File / storage format: Parquet conversation records
Domains / languages: terminal coding, shell operations, software engineering, and long-horizon tool use
Construction and filtering: strong agents execute tasks and serialize reasoning, commands, and tool observations; environment success, replay validation, difficulty filtering, and trajectory quality checks
License / access constraints: MIT
Intended use: terminal-agent SFT from 4B to 32B
