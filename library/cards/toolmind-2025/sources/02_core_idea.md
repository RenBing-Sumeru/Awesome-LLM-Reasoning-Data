ToolMind constructs a function graph, simulates realistic interactions, and filters each turn before retaining complete self-corrective trajectories. Relative to tool datasets checked only at the final trajectory level, it changes the reusable target to multi-turn conversations and tool definitions and makes fine-grained turn-level checks plus trajectory-level quality filtering the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 2（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=ToolMind+Technical+Report%3A+A+Large-Scale%2C+Reasoning-Enhanced+Tool-Use+Dataset&author=Chen+Yang&hl=en）

Open dataset: yes
Dataset name: ToolMind
Official URL: https://huggingface.co/datasets/Nanbeige/ToolMind
Scale: 160,000 synthetic and 200,000 augmented open-source tool-use instances
Record form: multi-turn conversations and tool definitions
File / storage format: Parquet records
Domains / languages: English function calling and multi-turn tool use
Construction and filtering: a multi-agent simulator writes user, assistant, and tool turns over a function graph; fine-grained turn-level checks plus trajectory-level quality filtering
License / access constraints: Apache-2.0
Intended use: tool-use SFT
