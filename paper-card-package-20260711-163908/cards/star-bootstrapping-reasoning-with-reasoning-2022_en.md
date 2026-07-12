# Paper Card: STaR: Bootstrapping Reasoning With Reasoning

> **One-sentence review:** Iteratively generates rationales, filters them by answer correctness, and fine-tunes on the retained self-generated reasoning traces.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / model report paper
> **Best for:** Readers interested in math / commonsense / reasoning.
> **Confidence:** high
> **Year/source:** 2022 · NeurIPS
> **Authors:** Eric Zelikman, Yuhuai Wu, Jesse Mu, Noah D. Goodman
> **Institutions:** Stanford University
> **Links:** [Paper](https://arxiv.org/abs/2203.14465) · [DOI](https://doi.org/10.48550/arXiv.2203.14465) · [Code](https://github.com/ezelikman/STaR)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is question, generated rationale, predicted answer, correctness decision, rationalization flag, model iteration, and retention decision. Iteratively generates rationales, filters them by answer correctness, and fine-tunes on the retained self-generated reasoning traces.

## 2. Core Idea: What is the paper's main contribution?

Iteratively generates rationales, filters them by answer correctness, and fine-tunes on the retained self-generated reasoning traces.

Generate rationales from a few demonstrations, check the resulting answers, rationalize failures with the known answer, retain successful traces, fine-tune, and repeat. The feedback contract is: dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Generate rationales from a few demonstrations, check the resulting answers, rationalize failures with the known answer, retain successful traces, fine-tune, and repeat.

The resulting record contains question, generated rationale, predicted answer, correctness decision, rationalization flag, model iteration, and retention decision. The reported use is sft, distillation.

## 4. Evidence: Why should we believe it?

Reports iterative improvements on arithmetic and commonsense tasks and ablates rationalization; the official code exposes the bootstrap procedure.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Iteratively generates rationales, filters them by answer correctness, and fine-tunes on the retained self-generated reasoning traces.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

answer-conditioned rationalization can leak the target into the trace. retaining only correct answers hides rejected rollout diversity. acceptance rates depend on prompt, sampler, and model iteration.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

STaR turns a small rationale seed into an iterative generate-filter-train loop and explicitly recovers some failures through answer-conditioned rationalization.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{star_bootstrapping_reasoning_with_reasoning_2022,
  title = {STaR: Bootstrapping Reasoning With Reasoning},
  author = {Eric Zelikman and Yuhuai Wu and Jesse Mu and Noah D. Goodman},
  year = {2022},
  howpublished = {NeurIPS}
}
```
