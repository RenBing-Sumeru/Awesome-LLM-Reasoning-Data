Public code SFT sets are much smaller than pretraining corpora and often omit tests and judgments needed to distinguish executable solutions from plausible text.

OpenCodeInstruct scales multiple generation algorithms to five million pairs and stores unit tests, execution status, and model judgments beside each solution. The decision boundary is whether a serialized record survives unit-test execution, execution-status fields, LLM quality judgments, and seed curation; the direct output is OpenCodeInstruct, consumed by code SFT for Llama and Qwen families rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2504.04030; venue/date arXiv preprint (2025); open data OpenCodeInstruct at https://huggingface.co/datasets/nvidia/OpenCodeInstruct; scale 5 million code instruction-response pairs; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
