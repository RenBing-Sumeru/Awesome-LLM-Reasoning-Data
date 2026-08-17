- **Position.** RISE is an open generative judge trained to separate critique-format learning from hard-case verdict optimization.
- **Mechanism.** GPT-4o prompt rewriting, swap-consistency filtering, SFT, then self-sampled DPO are the key chain; the two-order check decides SFT admission.
- **Artifact.** RISE-Judge-SFT-20K and RISE-Judge-DPO-20K provide public instruction, answer-pair, critique, and verdict targets; 32B and 7B weights are released.
- **Evidence.** With a 32B Qwen base and 40K total records, RewardBench reaches 92.7 versus 87.0 for Qwen2.5-32B-Instruct; this is a benchmark-specific result.
- **Reuse decision.** Best for pairwise, label-backed judge training; first audit retained critiques and bias on the target domain because open-ended and point-wise precision remains limited.

These decisions do not replace human sampling: admission verifies agreement with existing preference labels, not the factual correctness of every critique step. Establish an independent failure set before connecting the judge to policy optimization.
