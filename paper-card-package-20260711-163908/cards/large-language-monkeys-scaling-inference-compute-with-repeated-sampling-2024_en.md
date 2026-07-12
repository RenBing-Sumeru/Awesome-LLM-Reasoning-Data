# Paper Card: Large Language Monkeys: Scaling Inference Compute with Repeated Sampling

> **One-sentence review:** Studies repeated sampling as an inference-compute scaling axis across math, code, formal proof, and SWE-bench-style tasks.
> **Reading priority:** worth reading
> **Paper type:** scaling study / construction recipe paper
> **Best for:** Readers interested in math / code / formal proofs / software engineering / test time compute.
> **Confidence:** high
> **Year/source:** 2024 · arXiv preprint arXiv:2407.21787
> **Authors:** Bradley Brown, Jordan Juravsky, Ryan Ehrlich, Ronald Clark, Quoc V. Le, Christopher Ré, Azalia Mirhoseini
> **Institutions:** Department of Computer Science, Stanford University · University of Oxford · Google DeepMind
> **Links:** [Paper](https://arxiv.org/abs/2407.21787)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

GSM8K, MATH, MiniF2F-MATH, CodeContests, and SWE-bench Lite evaluation tasks.

The reusable object is candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task. Core repeated-sampling scaling study for separating coverage, selection precision, automatic verification, and inference-budget effects.

## 2. Core Idea: What is the paper's main contribution?

Studies repeated sampling as an inference-compute scaling axis across math, code, formal proof, and SWE-bench-style tasks.

language models sampled repeatedly at positive temperature; SWE-bench samples are full agent attempts. The feedback contract is: automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection. The terminal condition is: at least one sampled candidate passes the task verifier, or a selected candidate matches the benchmark answer.

## 3. Method: How does it work?

models repeatedly sample independent candidate solutions for each task. repeated independent sampling across sample budgets, including up to 10,000 samples for several benchmark tasks and 250 attempts for SWE-bench Lite. select candidates using automatic verifiers when available; compare majority voting and reward-model scoring when no automatic verifier is available.

The resulting record contains candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task. The reported use is evaluation, test time compute.

## 4. Evidence: Why should we believe it?

Recorded training/evaluation use: evaluation, test_time_compute.

Use it as an audit baseline before attributing a reasoning gain to a new dataset, RL objective, or model family. If more samples plus a verifier explains the gain, the contribution may be inference-budget scaling rather than better training data.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Studies repeated sampling as an inference-compute scaling axis across math, code, formal proof, and SWE-bench-style tasks.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Coverage can grow with sample budget even when practical selection precision remains poor. Automatic-verifier domains can overstate transfer to open-ended math or judgment-required tasks. Comparing repeated sampling against single attempts can conflate model quality with inference budget. Reward models and majority voting plateau in some no-verifier settings, leaving a gap between oracle coverage and usable performance.

Reproduction also depends on split policy (benchmark test or evaluation subsets as reported by each task.), decontamination (unknown), and license provenance (unknown).

## 7. Usefulness: How can I use this paper?

It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe.

For reuse, preserve task, model, sample_count, pass_at_k, coverage, verifier_type, selected_answer_method, inference_cost_or_flops, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: repeated independent sampling across sample budgets, including up to 10,000 samples for several benchmark tasks and 250 attempts for SWE-bench Lite.
- Inference budget: sample budget, pass@k/coverage curves, FLOP estimates, and SWE-bench Lite per-attempt costs.
- Rollout count: 10000
- Temperature: needs review
- Feedback contract: automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{large_language_monkeys_scaling_inference_compute_with_repeated_sampling_2024,
  title = {Large Language Monkeys: Scaling Inference Compute with Repeated Sampling},
  author = {Bradley Brown and Jordan Juravsky and Ryan Ehrlich and Ronald Clark and Quoc V. Le and Christopher Ré and Azalia Mirhoseini},
  year = {2024},
  howpublished = {arXiv preprint arXiv:2407.21787}
}
```
