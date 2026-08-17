Agent data is fragmented by environment and schema, making it hard to train one model across coding, research, browsing, and tool calling.

Nex Agent-SFT reselects tasks from the Nex ecosystem, regenerates responses with a tool-capable teacher, and publishes six splits under one message-and-tools contract. The decision boundary is whether a serialized record survives environment-grounded trajectory generation, split-specific validity checks, and downstream agent evaluation; the direct output is Nex Agent-SFT, consumed by agent SFT rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2512.04987; venue/date arXiv preprint (2025); open data Nex Agent-SFT at https://huggingface.co/datasets/nex-agi/agent-sft; scale 69,008 records across agentic code, agent, chat, deep research, HTML, and tool-calling splits; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
