ToolScale serializes difficult tool-routing scenarios with initial state and evaluation actions, supplying the task substrate for ToolOrchestra training. Relative to agent training on generic tool-use prompts without cost-aware evaluation, it changes the reusable target to id, task description, user scenario, initial state, and evaluation criteria and makes environment evaluation criteria plus outcome, efficiency, and user-preference rewards the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 29（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=ToolOrchestra%3A+Elevating+Intelligence+via+Efficient+Model+and+Tool+Orchestration&author=Hongjin+Su&hl=en）

Open dataset: yes
Dataset name: ToolScale
Official URL: https://huggingface.co/datasets/nvidia/ToolScale
Scale: 4,063 synthetic tool-orchestration tasks
Record form: id, task description, user scenario, initial state, and evaluation criteria
File / storage format: Parquet records
Domains / languages: English model routing, web search, code execution, and multi-tool orchestration
Construction and filtering: a task-generation pipeline writes scenarios, initial states, and executable evaluation criteria; environment evaluation criteria plus outcome, efficiency, and user-preference rewards
License / access constraints: NVIDIA dataset license
Intended use: reinforcement learning and task-conditioned orchestration training
