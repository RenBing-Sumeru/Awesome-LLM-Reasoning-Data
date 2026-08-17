1. **Source prompts.** The 15K construction draws problems from GSM8K, MATH, and pre-2024 AIME; the 100K setting adds DeepMath. Exact source revisions, per-source retained counts, split manifests, licenses for the constructed mixture, and source-to-evaluation overlap controls are not disclosed.

2. **Candidate generation.** For every query, generate 16 independent completions with temperature 0.7 and top-p 0.95 through vLLM. The main pipeline uses Qwen2.5-Math-7B-Instruct with a 4,096-token limit. The long-form study uses DeepSeek-R1-Distill-Qwen-7B with a 16K teacher context. The fixed instruction asks for step-by-step reasoning and a final answer inside `\boxed{}`.

3. **Malformed-output filtering.** Remove completions with excessive repetition, mid-response language switching, no meaningful reasoning, or no extractable boxed final answer. The paper does not report how many candidates each rule removes or publish the rejected pool.

4. **Terminal verification.** Extract the boxed or inline final answer using pattern heuristics, then run the OpenCompass automatic math verifier against the ground truth. Label each completion correct or incorrect under symbolic-evaluation/exact-match criteria. Exclude a problem if none of its 16 completions is accepted.

5. **Problem-level statistics.** Let `r(x)` be the fraction of wrong candidates and `u(x)` the number of distinct wrong final answers. The paper's exploratory analysis also uses Shannon entropy to characterize failure distributions, but the construction rule uses the distinct-answer count. These are outcome statistics, not semantic clustering of reasoning mistakes.

6. **Adaptive error selection.** Compute `k(x) = min(k_max, floor(alpha * r(x) * u(x)))`. Group rejected candidates by extracted wrong answer, prioritize groups with higher frequency, and choose the shortest trajectory from each selected group. The tested cap `k_max = 4` performs best among the reported caps; `alpha`, tie breaking, the correct-trajectory choice, and random seeds remain unknown.

7. **Sequence fusion.** Interleave each selected whole wrong trajectory with a randomly selected fixed reflection phrase, append one correct trajectory and a success phrase, wrap the reasoning sequence in a think-style block, and emit a boxed answer outside it. If no eligible error is selected, use only the correct trajectory. Optional certainty phrases are part of the published template repository.

8. **Training.** Optimize the fused assistant target with ordinary causal-LM negative log likelihood. The main experiments fine-tune LLaMA3-8B-base and DeepSeekMath-7B-base; the long-context experiment fine-tunes Qwen2.5-Math-7B-base after extending its context to 32,768 with YaRN. The paper reports ms-swift, DeepSpeed ZeRO-1, bf16, sequence packing, 8 A100 80GB GPUs, batch size 64, five epochs for 15K and three for 100K, learning rate 5e-5 for LLaMA3/DeepSeekMath and 2e-5 for Qwen2.5-Math.
