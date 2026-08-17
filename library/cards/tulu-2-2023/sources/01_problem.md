Open instruction-tuned models were often released without enough detail to separate gains from the instruction mixture, base model, preference optimization, or evaluation setup. This made assistant-adaptation results difficult to reproduce and compare.

Tulu 2 builds an open adaptation suite around a new 326,154-example instruction mixture: supervised fine-tune Llama 2 and Code Llama, optionally apply DPO with preference pairs, and release the data, code, checkpoints, and evaluation recipe. The result is an inspectable path from instruction records and preference judgments to general and code assistants up to 70B parameters.

L4 facts: primary source https://arxiv.org/abs/2311.10702; arXiv technical report, 2023; boundary: post-training data and feedback, not pretraining; atlas value: mixture lineage plus SFT/DPO contracts; evaluation surface: MMLU, GSM8K, BBH, TydiQA, Codex-Eval, TruthfulQA, ToxiGen, AlpacaEval, and MT-Bench.
