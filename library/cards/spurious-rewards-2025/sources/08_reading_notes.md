1. Position: random or wrong RLVR rewards can raise Qwen2.5-Math scores, so a reward-driven capability claim needs counterfactual controls.

2. Lever: hold GRPO and DeepScaleR fixed, vary only binary reward, then compare Qwen2.5 with Llama3/OLMo2; clipping is the quality-critical optimizer detail.

3. Artifact: the official repository releases code and filtered/majority-labeled DeepScaleR files under code/data, but no separate dataset card or data license.

4. Evidence anchor: on Qwen2.5-Math-7B, random reward gains +21.4 MATH-500 points versus +29.1 for ground truth; no-clipping variants lose the stable effect, and this is only an audit clue, not a cross-family capability gain.

5. Reuse decision: use it to audit an RLVR result, not to select a reward. Before reuse, run matched random/format controls on a non-Qwen family, verify upstream data terms, and keep the chat template and decoding temperature fixed because the Qwen2.5-Math-7B baseline is prompt-sensitive.
