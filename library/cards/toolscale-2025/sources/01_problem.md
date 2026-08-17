Small orchestrators need explicit tasks and evaluation criteria to learn when to invoke expensive models or tools rather than always selecting the strongest option.

ToolScale serializes difficult tool-routing scenarios with initial state and evaluation actions, supplying the task substrate for ToolOrchestra training. The decision boundary is whether a serialized record survives environment evaluation criteria plus outcome, efficiency, and user-preference rewards; the direct output is ToolScale, consumed by reinforcement learning and task-conditioned orchestration training rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2511.21689; venue/date arXiv preprint (2025); open data ToolScale at https://huggingface.co/datasets/nvidia/ToolScale; scale 4,063 synthetic tool-orchestration tasks; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
