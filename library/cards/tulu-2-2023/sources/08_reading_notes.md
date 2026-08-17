1. **Keep:** Tulu 2 is a linked post-training package, not just a model or dataset release.
2. **Data decision:** preserve each of the 326,154 SFT records' source and license instead of flattening the mixture.
3. **Training decision:** evaluate SFT-only and SFT+DPO checkpoints separately so preference gains remain visible.
4. **Do not infer:** the `72.1` aggregate does not show parity on every task or isolate the cause of performance.
5. **Audit first:** pin mixture, base, UltraFeedback revision, prompts, decoding, language, and output length.
