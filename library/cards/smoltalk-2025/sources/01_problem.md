Small language models need broad instruction coverage, but existing open chat mixtures were too small or uneven for the paper's compact-model training budget.

SmolTalk combines inherited and newly generated conversations under one message schema, then tunes source weights through ablations and manual mixture review. The decision boundary is whether a serialized record survives subset-specific filtering, source balancing, benchmark decontamination, and manual mixture refinement; the direct output is SmolTalk, consumed by SmolLM2 instruction SFT rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2502.02737; venue/date arXiv preprint (2025); open data SmolTalk at https://huggingface.co/datasets/HuggingFaceTB/smoltalk; scale about 1.1 million instruction-response conversations; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
