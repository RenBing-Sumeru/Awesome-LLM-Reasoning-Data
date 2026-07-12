# Paper Card: V-STaR: Training Verifiers for Self-Taught Reasoners

> **One-sentence review:** Reuses both correct and incorrect self-generated solutions to co-evolve a reasoner and a DPO-trained verifier for best-of-N selection.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / verifier reward / scaling study paper
> **Best for:** Readers interested in math / code / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · COLM
> **Authors:** Arian Hosseini, Xingdi Yuan, Nikolay Malkin, Aaron Courville, Alessandro Sordoni, Rishabh Agarwal
> **Institutions:** Mila – Quebec AI Institute · Université de Montréal · Microsoft Research · Google DeepMind
> **Links:** [Paper](https://arxiv.org/abs/2402.06457) · [DOI](https://doi.org/10.48550/arXiv.2402.06457)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-for-self-taught-reasoners-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-for-self-taught-reasoners-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-for-self-taught-reasoners-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is problem, policy iteration, sampled solution, correctness label, positive-negative verifier pair, verifier score, candidate set, and selected answer. Reuses both correct and incorrect self-generated solutions to co-evolve a reasoner and a DPO-trained verifier for best-of-N selection.

## 2. Core Idea: What is the paper's main contribution?

Reuses both correct and incorrect self-generated solutions to co-evolve a reasoner and a DPO-trained verifier for best-of-N selection.

Sample many solutions, partition them by automatic correctness, fine-tune the reasoner on positives, train the verifier with correct/incorrect pairs, rerank candidates, and iterate. The feedback contract is: unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Sample many solutions, partition them by automatic correctness, fine-tune the reasoner on positives, train the verifier with correct/incorrect pairs, rerank candidates, and iterate.

The resulting record contains problem, policy iteration, sampled solution, correctness label, positive-negative verifier pair, verifier score, candidate set, and selected answer. The reported use is sft, reward modeling, test time compute.

## 4. Evidence: Why should we believe it?

Reports improvements across math and code reasoning and shows that a verifier trained from discarded negatives improves best-of-N selection and subsequent self-training.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Reuses both correct and incorrect self-generated solutions to co-evolve a reasoner and a DPO-trained verifier for best-of-N selection.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

incorrect labels inherit weaknesses of tests and answer normalization. verifier gains may be confounded with larger candidate budgets. pairs from the current policy may narrow verifier coverage across iterations.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

Unlike STaR, V-STaR does not discard incorrect generations: it converts them into preference data and closes the loop between generator and selector.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{v_star_training_verifiers_for_self_taught_reasoners_2024,
  title = {V-STaR: Training Verifiers for Self-Taught Reasoners},
  author = {Arian Hosseini and Xingdi Yuan and Nikolay Malkin and Aaron Courville and Alessandro Sordoni and Rishabh Agarwal},
  year = {2024},
  howpublished = {COLM}
}
```
