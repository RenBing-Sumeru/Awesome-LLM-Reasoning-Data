ORZ's contribution is an open, large-scale Reasoner-Zero implementation built around a simple critic-based PPO recipe. It shows how to launch RL directly from a pretrained base checkpoint, use only terminal rule rewards, and scale grouped online sampling and separate critic training across several model sizes.

The “zero” boundary distinguishes ORZ from pipelines that first teach a response style or reasoning distribution through SFT or distillation. It does not remove upstream pretraining, curated prompts, gold reference answers, human filter design, verifier engineering, or evaluation data. The paper's separate experiment on a distilled 14B checkpoint is a transfer study, not evidence that the main ORZ family uses distillation.

Several design choices are concrete rather than rhetorical:

1. **Full online grouping:** 64 responses per prompt expose within-prompt outcome variation for policy and hard-data selection.
2. **Learned token-value critic:** PPO estimates \(V(s_t)\) for every response prefix, instead of using only group-relative terminal returns.
3. **Minimal terminal reward:** no separate format reward, KL regularization, or entropy bonus contributes in the reported main recipe.
4. **Policy-dependent curriculum:** ORZ-32B mines prompts with fewer than four successes in 64 attempts and anneals on that hard subset.

The paper does not introduce PPO, GAE, rule-based math verification, Qwen2.5, vLLM, Ray, or DeepSpeed in isolation. Its novelty is the integrated scaling recipe and the disclosure of stability findings.

For reasoning-data curation, the key lesson is that the most important object is the online trajectory group, not only the seed prompt file. ORZ releases enough to regenerate new behavior, but not the exact response groups, outcomes, critic values, failures, and data/checkpoint bindings that produced the reported models. The method is therefore more open than many frontier recipes, while the paper-run data remains only partially auditable.
