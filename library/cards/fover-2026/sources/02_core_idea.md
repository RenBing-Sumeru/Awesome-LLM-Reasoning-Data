FoVer moves the feedback contract from human or sampled outcome judgments to formal-tool acceptance at the step level. It first constrains an LLM to emit a verifier-compatible formal solution, then adapts a solution-level tool so each target inference can be checked independently.

| Contract element | Formal-logic branch | Formal-proof branch |
|---|---|---|
| Prompt source | Symbolic FLDx2 entailment cases, excluding `assump` proofs | GSM8K, GSM8K-derived MetaMathQA cases, and Big-Math word problems |
| Trace author | Llama 3.1 8B and Qwen 2.5 7B | Qwen 2.5 7B for statement conversion and proof generation |
| Environment | Z3 through the FLDx2 checker and FoVer wrapper | Isabelle/HOL through a per-step wrapper |
| Acceptance unit | One logical inference using permitted premises and prior results | One Isabelle proof command in the generated theorem environment |
| Supervision | Boolean label per ordered step | Boolean label per ordered step |

For Isabelle, all generated proof steps are first replaced with `sorry` to test statement and proof syntax. During label generation, the target step is restored while the remaining steps stay replaced with `sorry`; Isabelle therefore checks local validity under assumed surrounding steps. For Z3, each inference is normalized to an independent satisfiability or validity query.

The resulting PRM emits `correct` or `incorrect` for each step. At inference, normalized logits over those two tokens are step rewards; Best-of-K assigns each candidate the minimum of its step scores and selects the highest-scoring candidate. Formal-tool output is therefore the training feedback, while the learned PRM is the reusable approximate judge.
