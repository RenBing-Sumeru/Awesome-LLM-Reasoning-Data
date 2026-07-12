# Paper Card: ReST-MCTS*

> **One-sentence review:** Process-reward-guided tree search recipe for collecting reasoning traces and inferred per-step value targets.
> **Reading priority:** worth reading
> **Paper type:** process supervision / construction recipe / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · NeurIPS
> **Authors:** Dan Zhang, Sining Zhoubian, Ziniu Hu, Yisong Yue, Yuxiao Dong, Jie Tang
> **Institutions:** The Knowledge Engineering Group (KEG), Tsinghua University · California Institute of Technology
> **Links:** [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th) · [Project](https://rest-mcts.github.io/)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

math and science reasoning problems used for MCTS search, value-model training, and evaluation.

The reusable object is searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward. ReST-MCTS connects self-training, process rewards, and tree search, making it a useful bridge between PRM data and test-time compute.

## 2. Core Idea: What is the paper's main contribution?

Process-reward-guided tree search recipe for collecting reasoning traces and inferred per-step value targets.

policy models generate intermediate reasoning steps while MCTS expands candidate paths. The feedback contract is: process reward model guided by final-answer oracle feedback and MCTS-derived value targets. The terminal condition is: final-answer correctness under search.

## 3. Method: How does it work?

policy rollouts expanded by MCTS. tree search over intermediate reasoning states; exact rollout budget should be pinned per experiment. select higher-quality traces from process-reward-guided search and infer per-step value targets from paths that can lead to correct answers.

The resulting record contains searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward. The reported use is process supervision, reward modeling, test time compute.

## 4. Evidence: Why should we believe it?

Recorded training/evaluation use: process_supervision, reward_modeling, test_time_compute.

The searched traces can enter policy SFT or self-training as accepted reasoning trajectories. The inferred per-step values can enter PRM training. For evaluation, the same method is a test-time search baseline against best-of-N, self-consistency, and Tree-of-Thought style methods.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Process-reward-guided tree search recipe for collecting reasoning traces and inferred per-step value targets.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

search policy may overfit process reward artifacts. accepted traces can hide rejected rollout distribution. inference budget may be conflated with data quality.

Reproduction also depends on split policy (released PRM data exposes train/validation/test splits on Hugging Face, but per-experiment task splits need checking.), decontamination (unknown), and license provenance (Hugging Face PRM data card reports apache-2.0; project website is CC BY-SA 4.0; code license should be checked before reuse.).

## 7. Usefulness: How can I use this paper?

It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.

For reuse, preserve problem, partial solution state, candidate next step, search node, process reward or value score, final answer, correctness label, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: tree search over intermediate reasoning states; exact rollout budget should be pinned per experiment.
- Inference budget: search budget varies by experiment; project reports comparisons against Best-of-N, Tree-of-Thought, and self-consistency under stated budgets.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: process reward model guided by final-answer oracle feedback and MCTS-derived value targets.
- Remaining checks: needs_metadata: curator should verify atlas fields

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{rest_mcts_2024,
  title = {ReST-MCTS*},
  author = {Dan Zhang and Sining Zhoubian and Ziniu Hu and Yisong Yue and Yuxiao Dong and Jie Tang},
  year = {2024},
  howpublished = {NeurIPS}
}
```
