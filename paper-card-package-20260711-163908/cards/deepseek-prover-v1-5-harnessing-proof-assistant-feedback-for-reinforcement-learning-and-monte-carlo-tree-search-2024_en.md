# Paper Card: DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search

> **One-sentence review:** Lean feedback and intrinsic-reward RMaxTS produce diverse, kernel-checkable formal proof paths at training and inference time.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / process supervision / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · arXiv
> **Authors:** Huajian Xin, Z. Z. Ren, Junxiao Song, Zhihong Shao, Wanjia Zhao, Haocheng Wang, Bo Liu, Liyue Zhang, Xuan Lu, Qiushi Du, Wenjun Gao, Qihao Zhu, Dejian Yang, Zhibin Gou, Z. F. Wu, Fuli Luo, Chong Ruan
> **Institutions:** DeepSeek-AI
> **Links:** [Paper](https://arxiv.org/abs/2408.08152) · [DOI](https://doi.org/10.48550/arXiv.2408.08152) · [Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [Data](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5/tree/main/datasets) · [Project](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Whole-proof generation wastes useful partial progress and struggles to explore diverse formal proof paths. The paper asks how proof-assistant feedback can train a Lean prover and how Monte Carlo search can expand beyond independent whole-proof samples.

The reusable object is Lean theorem and imports; generated proof candidate; proof-assistant response; valid or failed proof path; RMaxTS node; intrinsic reward; selected path; terminal kernel verdict; search budget. Lean feedback and intrinsic-reward RMaxTS produce diverse, kernel-checkable formal proof paths at training and inference time.

## 2. Core Idea: What is the paper's main contribution?

Lean feedback and intrinsic-reward RMaxTS produce diverse, kernel-checkable formal proof paths at training and inference time.

The model is specialized and supervised on formal proofs, refined with reinforcement learning from proof-assistant feedback, then used by RMaxTS. RMaxTS explores whole-proof paths with an intrinsic reward intended to favor diverse promising attempts. The feedback contract is: Lean 4 and mathlib provide executable proof validity and terminal closure; RMaxTS combines policy likelihood, search statistics, and intrinsic reward to select expansions. The terminal condition is: Task answer acceptance or formal proof closure under the reported verifier.

## 3. Method: How does it work?

The model is specialized and supervised on formal proofs, refined with reinforcement learning from proof-assistant feedback, then used by RMaxTS. RMaxTS explores whole-proof paths with an intrinsic reward intended to favor diverse promising attempts. Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

The resulting record contains Lean theorem and imports; generated proof candidate; proof-assistant response; valid or failed proof path; RMaxTS node; intrinsic reward; selected path; terminal kernel verdict; search budget. The reported use is process supervision, preference learning, test time compute.

## 4. Evidence: Why should we believe it?

The official repository releases Base, SFT, and RL checkpoints, Lean/mathlib setup, RMaxTS launch configuration, and miniF2F/ProofNet evaluation assets. Reported results reach 63.5% on miniF2F-test and 25.3% on ProofNet with RL plus RMaxTS.

Interpret evidence under matched search and verifier-call budgets. Separate oracle coverage, post-selection accuracy, post-training policy improvement, and actual per-problem compute; they answer different questions.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Lean feedback and intrinsic-reward RMaxTS produce diverse, kernel-checkable formal proof paths at training and inference time.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

The training-time search corpus is not released as a standalone dataset; Lean and mathlib version drift changes replay; intrinsic reward may improve diversity without semantic progress; search cost and whole-proof generation length complicate matched-budget comparisons. Search budget or selector quality can be mistaken for base-model capability.

Reproduction also depends on split policy (Use official experiment splits; verify construction/evaluation overlap before reuse.), decontamination (unknown), and license provenance (Mixed artifact licenses; verify paper, code, generated data, and upstream problem licenses independently.).

## 7. Usefulness: How can I use this paper?

Use this Card for formal-verifier-anchored search traces, RL from proof feedback, proof-path diversity, and the distinction between kernel validity and informal mathematical faithfulness.

For reuse, preserve Lean theorem and imports, generated proof candidate, proof-assistant response, valid or failed proof path, RMaxTS node, intrinsic reward, selected path, terminal kernel verdict, search budget, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment.
- Inference budget: Varies by experiment and must be reported with results.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Lean 4 and mathlib provide executable proof validity and terminal closure; RMaxTS combines policy likelihood, search statistics, and intrinsic reward to select expansions.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{deepseek_prover_v1_5_harnessing_proof_assistant_feedback_for_reinforcement_learning_and_monte_carlo_tree_search_2024,
  title = {DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search},
  author = {Huajian Xin and Z. Z. Ren and Junxiao Song and Zhihong Shao and Wanjia Zhao and Haocheng Wang and Bo Liu and Liyue Zhang and Xuan Lu and Qiushi Du and Wenjun Gao and Qihao Zhu and Dejian Yang and Zhibin Gou and Z. F. Wu and Fuli Luo and Chong Ruan},
  year = {2024},
  howpublished = {arXiv}
}
```
