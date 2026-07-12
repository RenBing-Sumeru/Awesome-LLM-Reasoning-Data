# Paper Card: AlphaMath Almost Zero: Process Supervision without Process

> **One-sentence review:** MCTS turns answer-only mathematics problems into searched reasoning traces and automatically inferred step-level value supervision.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / process supervision / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · NeurIPS
> **Authors:** Guoxin Chen, Minpeng Liao, Chengxi Li, Kai Fan
> **Institutions:** Tongyi Lab, Alibaba Group
> **Links:** [Paper](https://arxiv.org/abs/2405.03553) · [DOI](https://doi.org/10.48550/arXiv.2405.03553) · [Code](https://github.com/MARIO-Math-Reasoning/Super_MARIO) · [Data](https://huggingface.co/datasets/MARIO-Math-Reasoning/AlphaMath-Trainset) · [Project](https://openreview.net/forum?id=VaXnxQ3UKo)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alphamath-almost-zero-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alphamath-almost-zero-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alphamath-almost-zero-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Dense process annotations are costly, yet answer-only math data does not directly say which partial reasoning states are promising. AlphaMath asks whether a pretrained model, final-answer supervision, and search can manufacture useful process targets without human or GPT-4 step labels.

The reusable object is math problem; partial solution state; candidate next step; MCTS node and branch; rollout terminal answer; correctness result; backed-up node value; selected reasoning path. MCTS turns answer-only mathematics problems into searched reasoning traces and automatically inferred step-level value supervision.

## 2. Core Idea: What is the paper's main contribution?

MCTS turns answer-only mathematics problems into searched reasoning traces and automatically inferred step-level value supervision.

A policy model expands step-level solutions in MCTS. Terminal answer checks are backed up through the tree to form process supervision and value-model targets; the learned value model then guides step-level beam search or further MCTS. The feedback contract is: Final-answer matching or the task answer checker supplies the terminal outcome; an MCTS-derived value model acts as the selector for partial states. The terminal condition is: Task answer acceptance or formal proof closure under the reported verifier.

## 3. Method: How does it work?

A policy model expands step-level solutions in MCTS. Terminal answer checks are backed up through the tree to form process supervision and value-model targets; the learned value model then guides step-level beam search or further MCTS. Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

The resulting record contains math problem; partial solution state; candidate next step; MCTS node and branch; rollout terminal answer; correctness result; backed-up node value; selected reasoning path. The reported use is process supervision, preference learning, test time compute.

## 4. Evidence: Why should we believe it?

The paper reports in-domain and out-of-domain mathematical reasoning experiments and a NeurIPS 2024 acceptance. The released AlphaMath trainset and Super_MARIO code make the construction recipe inspectable, although the public rows are processed outputs rather than a lossless dump of every tree.

Interpret evidence under matched search and verifier-call budgets. Separate oracle coverage, post-selection accuracy, post-training policy improvement, and actual per-problem compute; they answer different questions.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: MCTS turns answer-only mathematics problems into searched reasoning traces and automatically inferred step-level value supervision.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Answer equivalence and extraction can be brittle; successful terminal answers do not prove every intermediate step is sound; incomplete release of rejected branches, visit counts, and policy versions weakens causal audit; MCTS compute can be mistaken for model improvement. Search budget or selector quality can be mistaken for base-model capability.

Reproduction also depends on split policy (Use official experiment splits; verify construction/evaluation overlap before reuse.), decontamination (unknown), and license provenance (Mixed artifact licenses; verify paper, code, generated data, and upstream problem licenses independently.).

## 7. Usefulness: How can I use this paper?

Use this Card when designing answer-only-to-process-data pipelines, value-guided search, or comparisons between MCTS, beam search, and dense process annotation.

For reuse, preserve math problem, partial solution state, candidate next step, MCTS node and branch, rollout terminal answer, correctness result, backed-up node value, selected reasoning path, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment.
- Inference budget: Varies by experiment and must be reported with results.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Final-answer matching or the task answer checker supplies the terminal outcome; an MCTS-derived value model acts as the selector for partial states.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{alphamath_almost_zero_2024,
  title = {AlphaMath Almost Zero: Process Supervision without Process},
  author = {Guoxin Chen and Minpeng Liao and Chengxi Li and Kai Fan},
  year = {2024},
  howpublished = {NeurIPS}
}
```
