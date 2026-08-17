The disclosed pipeline is:

1. **Pretraining data:** filtered/reweighted/decontaminated web, code, math, multilingual text, and images. Train 1B/4B/12B/27B on 2T/4T/12T/14T tokens. Larger models extend 32K sequences to 128K late in training.
2. **Sparse teacher supervision:** for each token, sample 256 teacher logits by probability, zero the rest, renormalize, and use cross-entropy. Teacher identity, checkpoint, temperature, cache/online mode, and query count are unknown.
3. **Instruction tuning:** distill from an undisclosed large IT teacher, then apply improved BOND/WARM/WARP-style RL. Weight-averaged human-feedback RMs, code execution, and math ground truth provide rewards; safety uses SFT and RLHF. Modifications, stage order, rollout policy/count, optimizer, KL, coefficients, batch, LR, and selection/merge rules are unknown.
4. **QAT:** adapt data to PT/IT distributions and typically fine-tune 5,000 steps using non-quantized checkpoint probabilities as teacher targets; release per-channel/per-block int4 and switched-fp8 formats.
5. **Audit/release:** evaluate capability/safety and memorization, then release PT/IT/raw/quantized weights plus inference/fine-tuning libraries.

Code execution and math checking are named but no sandbox, languages, dependencies, tests, timeout, equivalence parser, partial credit, or reward aggregation is disclosed. Public PyTorch/JAX libraries are not the internal training stack.
