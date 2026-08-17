Text-only CoT cannot demonstrate sketching, visual search, or intermediate spatial transformations, and off-the-shelf VLMs are too weak to bootstrap such traces reliably.

Zebra-CoT serializes both textual thoughts and intermediate images so a model can learn to generate visual aids during multi-step reasoning. The decision boundary is whether a serialized record survives task answer checks, renderer consistency, domain-specific validity rules, and held-out evaluation; the direct output is Zebra-CoT, consumed by visual chain-of-thought SFT rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2507.16746; venue/date arXiv preprint (2025); open data Zebra-CoT at https://huggingface.co/datasets/multimodal-reasoning-lab/Zebra-CoT; scale 182,384 interleaved vision-language reasoning traces across 18 domains and more than 50 tasks; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
