1. Define counterfactual rewards. Start with DeepScaleR math prompts and replace answer-equivalence feedback by a 64-rollout majority pseudo-label, non-empty boxed-answer format, Bernoulli random reward, or a selected wrong majority label; each rollout receives binary feedback.

2. Train matched policies. Use GRPO to generate 16 online rollouts per prompt, normalize group-relative advantages, and update the same base model. Main runs use Qwen2.5-Math-7B; the intended output is a checkpoint under each reward condition, not a new reasoning dataset.

3. Test transfer. Keep the setup and reward menu while training Qwen2.5, Llama3, and OLMo2 variants, then evaluate MATH-500 pass@1 and AMC/AIME avg@8. This makes base-model family the decisive comparison rather than a changed data recipe.

4. Isolate the mechanism. Remove or neutralize GRPO clipping through three no-clipping variants, then track token probability and Python-string frequency. The check is whether random-reward gains persist; they do so consistently only with clipping enabled.

Reproduction needs the released code and data directory, exact model/chat template, GRPO clipping implementation, 300-step budget, and decoding settings. Main training uses 8 A100s, learning rate 5e-7, rollout batch 64, minibatch 128, no KL/entropy loss; seed coverage is limited.
