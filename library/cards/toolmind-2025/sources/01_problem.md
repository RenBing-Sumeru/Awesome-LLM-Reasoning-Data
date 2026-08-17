Trajectory-level acceptance can hide a wrong intermediate tool call whose error propagates through every later turn.

ToolMind constructs a function graph, simulates realistic interactions, and filters each turn before retaining complete self-corrective trajectories. The decision boundary is whether a serialized record survives fine-grained turn-level checks plus trajectory-level quality filtering; the direct output is ToolMind, consumed by tool-use SFT rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2511.15718; venue/date arXiv preprint (2025); open data ToolMind at https://huggingface.co/datasets/Nanbeige/ToolMind; scale 160,000 synthetic and 200,000 augmented open-source tool-use instances; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
