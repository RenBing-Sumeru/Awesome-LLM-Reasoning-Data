Nex Agent-SFT reselects tasks from the Nex ecosystem, regenerates responses with a tool-capable teacher, and publishes six splits under one message-and-tools contract. Relative to separate single-domain agent instruction sets, it changes the reusable target to messages, tool definitions, uuid, and generator and makes environment-grounded trajectory generation, split-specific validity checks, and downstream agent evaluation the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Open dataset: yes
Dataset name: Nex Agent-SFT
Official URL: https://huggingface.co/datasets/nex-agi/agent-sft
Scale: 69,008 records across agentic code, agent, chat, deep research, HTML, and tool-calling splits
Record form: messages, tool definitions, uuid, and generator
File / storage format: Parquet records
Domains / languages: English coding, research, chat, HTML generation, and tool-using agents
Construction and filtering: DeepSeek-V3.1-Nex-N1 regenerates tool-aware multi-turn responses; environment-grounded trajectory generation, split-specific validity checks, and downstream agent evaluation
License / access constraints: ODC-BY
Intended use: agent SFT
