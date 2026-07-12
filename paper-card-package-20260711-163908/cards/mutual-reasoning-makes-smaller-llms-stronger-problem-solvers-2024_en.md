# Paper Card: Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers

> **One-sentence review:** A generator SLM explores human-like reasoning actions with MCTS while a peer SLM discriminates complete trajectories by mutual consistency.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / process supervision / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · ICLR
> **Authors:** Zhenting Qi, Mingyuan Ma, Jiahang Xu, Li Lyna Zhang, Fan Yang, Mao Yang
> **Institutions:** Microsoft Research Asia
> **Links:** [Paper](https://arxiv.org/abs/2408.06195) · [DOI](https://doi.org/10.48550/arXiv.2408.06195) · [Code](https://github.com/zhentingqi/rStar) · [Data](https://github.com/zhentingqi/rStar/tree/main/data)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Small models often explore shallow or repetitive chains, and self-evaluation by the same model is poorly calibrated. rStar asks whether separating generation from peer discrimination can improve MCTS reasoning without fine-tuning or a superior teacher.

The reusable object is task prompt; MCTS state; human-like reasoning action; generated intermediate state; complete trajectory; generator answer; discriminator reconstruction or verdict; mutual-consistency label; selected path; compute budget. A generator SLM explores human-like reasoning actions with MCTS while a peer SLM discriminates complete trajectories by mutual consistency.

## 2. Core Idea: What is the paper's main contribution?

A generator SLM explores human-like reasoning actions with MCTS while a peer SLM discriminates complete trajectories by mutual consistency.

A target SLM uses a richer action set inside MCTS to construct diverse trajectories. A second SLM of similar capability independently discriminates candidates; mutually consistent trajectories are favored for the final solution. The feedback contract is: The peer SLM is a model-based discriminator rather than a programmatic verifier. Mutual agreement and search statistics select trajectories; benchmark answer matching evaluates the final output. The terminal condition is: Task answer acceptance or formal proof closure under the reported verifier.

## 3. Method: How does it work?

A target SLM uses a richer action set inside MCTS to construct diverse trajectories. A second SLM of similar capability independently discriminates candidates; mutually consistent trajectories are favored for the final solution. Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

The resulting record contains task prompt; MCTS state; human-like reasoning action; generated intermediate state; complete trajectory; generator answer; discriminator reconstruction or verdict; mutual-consistency label; selected path; compute budget. The reported use is process supervision, preference learning, test time compute.

## 4. Evidence: Why should we believe it?

Across five small models and five benchmarks, rStar substantially improves accuracy; rollout ablations compare it with self-consistency and RAP, including a 128-sample SC generator baseline.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: A generator SLM explores human-like reasoning actions with MCTS while a peer SLM discriminates complete trajectories by mutual consistency.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Agreement is not correctness and two related SLMs can share the same shortcut; no standalone full trajectory corpus is released; model calls and action branching make costs high; benchmark prompts and public solutions raise contamination risk. Search budget or selector quality can be mistaken for base-model capability.

Reproduction also depends on split policy (Use official experiment splits; verify construction/evaluation overlap before reuse.), decontamination (unknown), and license provenance (Mixed artifact licenses; verify paper, code, generated data, and upstream problem licenses independently.).

## 7. Usefulness: How can I use this paper?

Use it to study generator–selector separation, model-based verification, heterogeneous search actions, and the difference between mutual consistency and executable correctness.

For reuse, preserve task prompt, MCTS state, human-like reasoning action, generated intermediate state, complete trajectory, generator answer, discriminator reconstruction or verdict, mutual-consistency label, selected path, compute budget, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment.
- Inference budget: Varies by experiment and must be reported with results.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: The peer SLM is a model-based discriminator rather than a programmatic verifier. Mutual agreement and search statistics select trajectories; benchmark answer matching evaluates the final output.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{mutual_reasoning_makes_smaller_llms_stronger_problem_solvers_2024,
  title = {Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers},
  author = {Zhenting Qi and Mingyuan Ma and Jiahang Xu and Li Lyna Zhang and Fan Yang and Mao Yang},
  year = {2024},
  howpublished = {ICLR}
}
```
