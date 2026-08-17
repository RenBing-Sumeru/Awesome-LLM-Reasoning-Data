Open native GUI agents can ground single actions but still fail on long-horizon tasks because public trajectories contain little action-aligned reasoning. Generic long-CoT SFT can also reduce coordinate grounding, while step-wise RL marks valid alternative actions wrong when only one demonstration is available.

GUI-Libra addresses both failures by curating existing web/mobile trajectories into 81K reasoning-action steps, training with action-weighted mixed supervision, and constraining RL under partially verifiable rewards. The output is a dataset plus a two-stage post-training recipe for native GUI agents.

L4 facts: arXiv:2602.22190v2, 25 May 2026; arXiv preprint, no confirmed venue; decision boundary is action agreement, coordinate alignment, and partially verifiable step reward; Track-01 object is a screenshot/context/reasoning/executable-action record; collected as an existing promoted Card.
