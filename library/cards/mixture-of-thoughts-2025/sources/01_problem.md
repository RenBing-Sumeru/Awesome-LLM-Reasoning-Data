Reasoning distillation often maximizes trace volume without selecting prompts at a level where a student can learn, causing expensive demonstrations to add little usable supervision.

Mixture-of-Thoughts selects teachable prompts and packages teacher reasoning from several domains into a source-labeled conversation mixture. The decision boundary is whether a serialized record survives prompt teachability, complexity and diversity selection, source-level checks, and downstream training evaluation; the direct output is Mixture-of-Thoughts, consumed by Phi-4-reasoning SFT rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2504.21318; venue/date arXiv preprint (2025); open data Mixture-of-Thoughts at https://huggingface.co/datasets/open-r1/Mixture-of-Thoughts; scale 349,317 reasoning traces across mathematics, code, and science; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
