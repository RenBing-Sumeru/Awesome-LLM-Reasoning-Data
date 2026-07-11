<!-- entry_id: limits-inference-scaling-resampling-2026 -->
<!-- card_type: failures -->
# Paper Card: The Limits of Inference Scaling Through Resampling

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=limits-inference-scaling-resampling-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=limits-inference-scaling-resampling-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=limits-inference-scaling-resampling-2026&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** An essential audit of verifier-gated resampling showing that false positives impose a hard accuracy ceiling and can make additional samples harmful when incorrect accepted outputs carry negative utility.
> **Reading priority:** Essential
> **Paper type:** Verifier failure and inference-scaling study
> **Knowledge categories:** Programmatically verifiable outcome data | Rollout and test-time traces | Data construction and filtering | Verifier attacks and audit failures
> **Best for:** Researchers designing rejection-sampled reasoning datasets, code verifiers, Best-of-N pipelines, and test-time scaling evaluations
> **Confidence:** High
> **Year / Venue:** 2026 | ICLR 2026
> **Authors:** Benedikt Stroebl, Sayash Kapoor, Arvind Narayanan
> **Institutions:** Princeton University
> **Links:** [Paper](https://openreview.net/forum?id=j8H84v6AZ1) | [arXiv](https://arxiv.org/abs/2411.17501) | [ICLR poster](https://iclr.cc/virtual/2026/poster/10007907)

---

## 1. Problem: What question does this work address?

Verifier-based resampling repeatedly generates candidates until one passes an acceptance test. This pattern supports both inference-time scaling and rejection-sampled training-data construction, but its apparent success assumes that a passing candidate is correct. In realistic coding and reasoning settings, limited unit tests and learned judges admit false positives: incorrect outputs that satisfy the verifier.

The paper asks whether additional sampling can overcome an imperfect verifier, whether a weaker generator can eventually match a stronger generator, and how the answer changes when deploying an accepted false positive is worse than returning no answer. For data construction, the corresponding question is whether increasing rollout volume improves the accepted corpus or merely supplies more opportunities to exploit the filter.

## 2. Core idea: What is the main contribution?

The central result is a false-positive ceiling. Repeated sampling can increase the probability of finding something that passes a verifier, but it cannot distinguish a true positive from a false positive once both pass. The limiting quality of accepted samples is therefore governed by the verifier's conditional precision for that generator and task mixture, not by compute alone.

The work further models false positives as having negative utility. Rejections reveal that the remaining task is likely harder, and later accepted samples can become increasingly risky. Under realistic cost-benefit assumptions, the expected value of further sampling can decline; the optimal budget is often below ten attempts and can be zero.

The affected data object is a verifier-filtered set of generated Python solutions. Its native signal is binary pass/fail under the original HumanEval or MBPP tests. The stronger HumanEval+ and MBPP+ suites are used retrospectively to identify which accepted solutions were false positives.

## 3. Method: How does it work?

The study samples Python solutions from model families with different capabilities. HumanEval+ experiments use at least 200 candidates per task and model for most models, with 1,000 for Command Light; MBPP+ uses 50. Generation uses temperature 0.8 and otherwise follows EvalPlus defaults. Some samples come from the EvalPlus release, while others are generated through model APIs.

Two verification surfaces are deliberately separated:

- The original HumanEval or MBPP unit tests are the operational acceptance gate. Passing this gate is the native signal used by the resampling policy.
- The extended HumanEval+ or MBPP+ tests are treated as a stronger audit oracle. A solution that passes the original tests but fails the extended suite is labeled a false positive.

The authors estimate single-sample correctness and conditional correctness after passing the limited verifier across Vicuna, Mistral, CodeT5p, CodeGen, CodeGen2, Code Llama, Llama 3.1, Phi-3, GPT-4o, and Cohere Command variants. They analyze both finite resampling curves and the infinite-budget limit. A probabilistic model adds a benefit for a correct accepted output and a cost for an accepted false positive, allowing the optimal stopping budget to vary with task difficulty and the cost-benefit ratio.

A separate experiment prompts models to follow code-quality constraints such as naming conventions, line limits, function length, and line-level comments. True positives and false positives are compared on those properties. The study does not train a verifier or reasoning model.

## 4. Evidence: Why should we believe it?

Across HumanEval+ and MBPP+, weaker generators show lower single-sample accuracy and higher false-positive rates conditional on passing the original tests. In the reported comparisons, some weaker models cannot reach GPT-4o's single-sample accuracy even under the mathematical infinite-resampling limit. This directly demonstrates that pass probability and real correctness can diverge.

Finite-budget experiments show that adding a cost for false positives bends scaling curves downward. The optimal attempt count is frequently under ten and may be zero when incorrect accepted code is sufficiently costly. This finding is supported by both empirical task distributions and a theoretical easy-task/hard-task model in which successive rejections update the task-difficulty posterior.

The code-quality experiment finds that false positives comply less often than true positives with all four tested instruction families. Qualitative examples expose logical errors, type conversion errors, missing edge cases, timeouts, and convention violations that survive the limited tests.

The comparison is unusually audit-friendly because the acceptance gate and evaluation oracle are not the same. The authors also exclude broken EvalPlus tasks and additional suspected-oracle cases. However, the extended suites are still assumed to be correct after those exclusions, and the evidence is empirical for code with human-authored tests rather than for all reasoning verifiers.

No dedicated official code repository, generated-sample corpus, model checkpoint, project artifact, or Hugging Face release was confirmed. The paper identifies pinned EvalPlus and RACE dependencies, but those upstream implementations are not a release of this study's complete sample and analysis pipeline.

## 5. Novelty: What is new relative to prior work?

Prior inference-scaling work often reports pass@k or assumes that verification is effectively oracle-like. This paper makes imperfect verification the object of study and separates the probability of passing from the probability of being correct after passing.

Its key conceptual contribution is to show that verifier precision creates a generator-dependent ceiling that sampling cannot remove. The negative-utility analysis also changes the scaling objective from maximizing the chance of any accepted answer to maximizing expected value under the cost of false acceptance. For reasoning-data construction, this reframes rollout budget as an audit-sensitive filtering decision rather than an unconditionally beneficial scaling knob.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- The empirical study is limited to Python generation on HumanEval+/MBPP+ with human-authored unit tests. Transfer to mathematics, learned reward models, LLM judges, proof checkers, agents, or LLM-generated tests is not established.
- Extended EvalPlus tests are treated as the correctness oracle. The authors remove known and suspected problematic tasks, but any remaining oracle errors would alter false-positive estimates.
- The study analyzes verifier-based resampling but does not construct or train on a reasoning dataset. Its training-data implications are well motivated but not directly measured through downstream post-training experiments.
- Conditional false-positive rates depend on the generator, task distribution, prompt, sampling temperature, parser, test version, and API snapshot. A verifier version cannot be calibrated independently of those surfaces.
- False negatives receive less emphasis. They may not create the same asymptotic correctness ceiling, but they affect compute, coverage, task selection, and which examples survive into a training corpus.
- Repeated rejection changes the conditional task mixture. A global verifier score or average precision can therefore hide risk concentrated in difficult tasks.
- Only selected readability constraints are measured beyond functional correctness. Simplicity, modularity, security, efficiency, and maintainability are not established.
- No complete immutable manifest of generated samples, API dates, seeds, attempts, verifier outputs, and excluded tasks was confirmed, limiting exact reproduction.
- There is no dedicated official artifact release for code, data, models, or checkpoints. The paper is CC BY 4.0, but generated-output and inherited benchmark licenses are not consolidated.

The failure is exploitable whenever a generator can systematically produce outputs that satisfy a weak gate without satisfying the intended property. The paper demonstrates accidental exploitation through test-coverage gaps; it does not evaluate an adversary deliberately optimizing against the verifier. Stronger tests, independent hidden checks, verifier ensembles with demonstrated error diversity, explicit abstention, and stopping rules based on calibrated expected utility are plausible mitigations, but none removes the need to measure residual false positives.

## 7. Uses: How can this work be used?

For Track 8, the paper supplies a concrete audit contract for rejection-sampled reasoning data. Every release that accepts rollouts using tests, parsers, judges, or reward models should report the generator-conditioned false-positive rate, verifier version, task-stratified precision, rejected-sample history, stopping rule, and a stronger independent audit surface.

Dataset builders can use the framework to compare filters before scaling generation. A larger accepted set should not be called higher quality merely because more candidates pass. Curators should retain accepted and rejected candidates, distinguish native verifier outcomes from independent audit labels, and examine whether repeated rejection concentrates hard or adversarial examples.

For test-time compute, the negative-utility formulation supports risk-aware stopping rather than a fixed large `N`. For verifier research, the work motivates calibration by generator family and task difficulty, with false positives weighted more heavily when deployment cost is asymmetric. For evaluation, it shows why the same verifier must not serve as both the selection gate and the final quality measure.

## 8. Reading notes: What should readers remember?

- More samples increase opportunities to find both true positives and false positives; compute cannot repair an acceptance gate that cannot distinguish them.
- Verifier quality is conditional on the generator and task mixture, not a single portable accuracy number.
- Successive rejections are information: they shift belief toward harder tasks and can make later acceptance less trustworthy.
- Negative utility turns resampling into an optimal-stopping problem; the best budget can be small or zero.
- The strongest design choice is using extended tests to audit the limited tests rather than evaluating with the same gate used for selection.
- Treat the paper as an audit framework, not an open data recipe: dedicated official code and generated-data artifacts were not confirmed.

## 9. Citation

```bibtex
@inproceedings{stroebl2026limits,
  title     = {The Limits of Inference Scaling Through Resampling},
  author    = {Benedikt Stroebl and Sayash Kapoor and Arvind Narayanan},
  booktitle = {The Fourteenth International Conference on Learning Representations},
  year      = {2026},
  url       = {https://openreview.net/forum?id=j8H84v6AZ1}
}
```
