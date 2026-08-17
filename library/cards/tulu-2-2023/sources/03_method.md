1. **Build the mixture.** Input: public instruction datasets and task collections. Operation: revise Tulu V1 by removing weak sources and adding dialogue, code, CoT, Orca, WizardLM, LIMA, and science records. Output: 326,154 SFT examples. Check: retain source identity, licenses, and exact dataset revision.

2. **Supervised fine-tune.** Input: Tulu V2 mixture and Llama 2 or Code Llama bases at 7B, 13B, and 70B. Operation: train on target responses with the paper's full-finetuning recipe. Output: Tulu 2 and Code Tulu 2 checkpoints. Check: pin base checkpoint, sequence length, mixture weights, and optimizer settings.

3. **Add preference optimization.** Input: Tulu 2 checkpoints and UltraFeedback preference pairs. Operation: run three DPO epochs with learning rate `5e-7`; the 70B run uses a 512-core TPUv3 for about seven days. Output: Tulu 2 + DPO checkpoints. Check: monitor stability, verbosity, multilingual regression, and train/evaluation overlap.

4. **Evaluate and release.** Input: SFT-only and DPO checkpoints. Operation: run the shared capability, safety, code, and open-ended-generation suite. Output: per-task scores, aggregate comparisons, code, data, and checkpoints. Check: compare models under the same prompts and decoding rules; do not attribute a joint recipe gain to data alone.
