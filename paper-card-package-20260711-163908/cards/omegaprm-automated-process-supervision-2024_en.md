# Paper Card: Improve Mathematical Reasoning in Language Models by Automated Process Supervision

> **One-sentence review:** OmegaPRM uses divide-and-conquer MCTS to locate reasoning errors efficiently and generate large-scale balanced process supervision for PRMs.
> **Reading priority:** worth reading
> **Paper type:** process supervision / verifier reward / construction recipe paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · arXiv
> **Authors:** Liangchen Luo, Yinxiao Liu, Rosanne Liu, Samrat Phatale, Meiqi Guo, Harsh Lara, Yunxuan Li, Lei Shu, Yun Zhu, Lei Meng, Jiao Sun, Abhinav Rastogi
> **Institutions:** Google
> **Links:** [Paper](https://arxiv.org/abs/2406.06592) · [DOI](https://doi.org/10.48550/arXiv.2406.06592)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omegaprm-automated-process-supervision-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omegaprm-automated-process-supervision-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omegaprm-automated-process-supervision-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is math problem, reasoning prefix, MCTS node, sampled continuation, terminal outcome, estimated value, first-error boundary, and positive or negative process annotation. OmegaPRM uses divide-and-conquer MCTS to locate reasoning errors efficiently and generate large-scale balanced process supervision for PRMs.

## 2. Core Idea: What is the paper's main contribution?

OmegaPRM uses divide-and-conquer MCTS to locate reasoning errors efficiently and generate large-scale balanced process supervision for PRMs.

Build a search tree over a proposed solution, use divide-and-conquer exploration to find the earliest error, balance positive and negative nodes, train a PRM, and select outputs with weighted self-consistency. The feedback contract is: an outcome reward model or answer checker scores completed continuations; search converts outcome evidence into step labels. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Build a search tree over a proposed solution, use divide-and-conquer exploration to find the earliest error, balance positive and negative nodes, train a PRM, and select outputs with weighted self-consistency.

The resulting record contains math problem, reasoning prefix, MCTS node, sampled continuation, terminal outcome, estimated value, first-error boundary, and positive or negative process annotation. The reported use is process supervision, reward modeling, test time compute.

## 4. Evidence: Why should we believe it?

The paper evaluates Gemini Pro and Gemma 2 27B on MATH500 and GSM8K, comparing outcome-only selection with automated process supervision and weighted self-consistency.

The evidence should be read as a joint measurement of generator quality, feedback quality, data selection, and compute. Comparisons are only interpretable when sample counts, verifier calls, token limits, and policy checkpoints are aligned. The paper's reported results support the stated mechanism, but they do not automatically establish that every retained rationale is faithful.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: OmegaPRM uses divide-and-conquer MCTS to locate reasoning errors efficiently and generate large-scale balanced process supervision for PRMs.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

first-error localization assumes later continuations diagnose earlier steps reliably. search-tree labels depend on the ORM and prover policy. reported annotation scale does not by itself disclose per-problem compute or rejected branches.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

OmegaPRM improves over independent per-step Monte Carlo estimation by allocating search adaptively and using binary-search-like error localization.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: an outcome reward model or answer checker scores completed continuations; search converts outcome evidence into step labels
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{omegaprm_automated_process_supervision_2024,
  title = {Improve Mathematical Reasoning in Language Models by Automated Process Supervision},
  author = {Liangchen Luo and Yinxiao Liu and Rosanne Liu and Samrat Phatale and Meiqi Guo and Harsh Lara and Yunxuan Li and Lei Shu and Yun Zhu and Lei Meng and Jiao Sun and Abhinav Rastogi},
  year = {2024},
  howpublished = {arXiv}
}
```
