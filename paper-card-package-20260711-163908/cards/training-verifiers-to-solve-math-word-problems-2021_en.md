# Paper Card: Training Verifiers to Solve Math Word Problems

> **One-sentence review:** Generates 100 GSM8K solutions per problem and uses a learned verifier to select the highest-scoring candidate.
> **Reading priority:** must read
> **Paper type:** construction recipe / scaling study / verifier reward paper
> **Best for:** Readers interested in math / test time compute.
> **Confidence:** high
> **Year/source:** 2021 · arXiv preprint arXiv:2110.14168
> **Authors:** Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, Christopher Hesse, John Schulman
> **Institutions:** OpenAI
> **Links:** [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-verifiers-to-solve-math-word-problems-2021&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-verifiers-to-solve-math-word-problems-2021&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-verifiers-to-solve-math-word-problems-2021&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

GSM8K, with 7,500 training and 1,000 test grade-school math word problems.

The reusable object is per-problem candidate sets containing a natural-language derivation, calculator annotations, and a final numeric answer. Foundational best-of-N reasoning paper that makes the candidate pool, outcome labels, verifier, sampling temperature, and selection budget explicit.

## 2. Core Idea: What is the paper's main contribution?

Generates 100 GSM8K solutions per problem and uses a learned verifier to select the highest-scoring candidate.

GPT-3-family generators fine-tuned for two epochs sample complete natural-language solutions. The feedback contract is: a learned verifier predicts correctness from the problem and candidate solution; labels come only from final-answer correctness. The terminal condition is: the selected candidate reaches the reference final answer; oracle test@N asks whether any candidate does.

## 3. Method: How does it work?

a two-epoch fine-tuned generator sampled at positive temperature for candidate-set construction. sample 100 completions per training problem for verifier data and 100 per test problem for the main best-of-N result; sweep 25 to 3,200 at test time. label every completion by final-answer match, train a verifier, then return the candidate with maximum verifier score.

The resulting record contains per-problem candidate sets containing a natural-language derivation, calculator annotations, and a final numeric answer. The reported use is reward modeling, evaluation, test time compute.

## 4. Evidence: Why should we believe it?

Verifier selection improves over fine-tuning and scales with data; experiments separate test@N from selected solve rate and sweep up to 3,200 candidates.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Generates 100 GSM8K solutions per problem and uses a learned verifier to select the highest-scoring candidate.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Final-answer labels can mark flawed reasoning as correct when it reaches the right number accidentally. Oracle test@N measures coverage, not whether the learned verifier can identify a correct candidate. More generator training improves greedy accuracy while collapsing high-temperature candidate diversity. The proprietary GPT-3-family checkpoints and generated verifier-training rollouts are not released.

Reproduction also depends on split policy (7,500 training problems and 1,000 held-out test problems.), decontamination (GSM8K was newly collected, but model-pretraining overlap is not fully auditable from the paper.), and license provenance (MIT for the official grade-school-math repository.).

## 7. Usefulness: How can I use this paper?

It is an early auditable template for separating candidate coverage from selector quality in reasoning systems.

For reuse, preserve problem, candidate_solution, final_answer, outcome_label, token_level_verifier_score, solution_level_verifier_score, sample_rank, sample_count, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: sample 100 completions per training problem for verifier data and 100 per test problem for the main best-of-N result; sweep 25 to 3,200 at test time.
- Inference budget: candidate count per problem; the paper reports test@N, verifier-ranked solve rate, and top-sample voting ablations.
- Rollout count: 100
- Temperature: 0.7
- Feedback contract: a learned verifier predicts correctness from the problem and candidate solution; labels come only from final-answer correctness.
- Remaining checks: needs_review: distinguish released GSM8K data from unreleased generated rollouts and verifier scores

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{training_verifiers_to_solve_math_word_problems_2021,
  title = {Training Verifiers to Solve Math Word Problems},
  author = {Karl Cobbe and Vineet Kosaraju and Mohammad Bavarian and Mark Chen and Heewoo Jun and Lukasz Kaiser and Matthias Plappert and Jerry Tworek and Jacob Hilton and Reiichiro Nakano and Christopher Hesse and John Schulman},
  year = {2021},
  howpublished = {arXiv preprint arXiv:2110.14168}
}
```
