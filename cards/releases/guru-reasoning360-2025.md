<!-- entry_id: guru-reasoning360-2025 -->
<!-- card_type: releases -->
# Paper Card: Revisiting Reinforcement Learning for LLM Reasoning from A Cross-Domain Perspective

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guru-reasoning360-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guru-reasoning360-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guru-reasoning360-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** GURU is a reusable 91.9K six-domain RLVR release with unusually explicit verifier and filtering contracts, but its license mixture, residual duplication, and missing rejected data and rollouts require careful auditing.
> **Reading priority:** Essential
> **Paper type:** Multi-domain RLVR dataset release and construction study
> **Knowledge categories:** Programmatically Verifiable Outcome Data · Data Construction & Open Release Recipes · Training Usage & Optimization Objectives
> **Best for:** Researchers building, mixing, reproducing, or auditing cross-domain reasoning data for reinforcement learning
> **Confidence:** High
> **Year / Venue:** 2025 · NeurIPS 2025 Datasets and Benchmarks Track
> **Authors:** Jorge (Zhoujun) Cheng, Shibo Hao, Tianyang Liu, Fan Zhou, Yutao Xie, Feng Yao, Yuexin Bian, Nilabjo Dey, Yonghao Zhuang, Yuheng Zha, Yi Gu, Kun Zhou, Yuqi Wang, Yuan Li, Richard Fan, Jianshu She, Chengqian Gao, Abulhair Saparov, Taylor W. Killian, Haonan Li, Mikhail Yurochkin, Eric P. Xing, Zhengzhong Liu, Zhiting Hu
> **Institutions:** UC San Diego; Mohamed bin Zayed University of Artificial Intelligence; Carnegie Mellon University; Purdue University
> **Links:** [Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/c2f71567cd53464161cab3336e8fc865-Abstract-Datasets_and_Benchmarks_Track.html) · [arXiv](https://arxiv.org/abs/2506.14965) · [Code](https://github.com/LLM360/Reasoning360) · [Data](https://huggingface.co/datasets/LLM360/guru-RL-92k) · [Project](https://guru-reasoning.github.io/)

---

## 1. Problem: What question does this work address?

Open RL-for-reasoning research has concentrated on mathematics and code because their answers can often be checked with exact rules or tests. This leaves a data bottleneck for studying whether reinforcement learning transfers reasoning skills across domains and whether a single policy can improve without sacrificing breadth.

GURU addresses the missing data contract. It asks how to construct a public RL-ready mixture that spans mathematics, code, science, logic, simulation, and tabular reasoning while still assigning an automatic reward to every training response. This requires more than collecting prompts: each row must carry a usable target or verifier payload, and the mixture must remove duplicates, weak rewards, trivial tasks, and likely annotation failures.

## 2. Core idea: What is the main contribution?

The main contribution is GURU, a released corpus of approximately 91.9K prompts filtered from roughly 684.9K candidates across six domains. Every item is paired with a domain-specific binary correctness contract:

- mathematics, logic, simulation, and tables use structured extraction plus rule or symbolic matching;
- code uses execution against tests;
- open-ended science uses a 1.5B model verifier to judge whether the response entails the reference answer.

The release combines the ready-to-train Parquet data with preprocessing and filtering code, veRL-based GRPO training infrastructure, a 17-task evaluation suite, GURU-7B and GURU-32B models, and public training logs. The data is a prompt-and-verifier corpus, not an archive of generated reasoning trajectories.

## 3. Method: How does it work?

### Source mixture

GURU draws mathematics prompts from OR1, DAPO, and DeepScaler; code from LeetCode, TACO-Verified, PrimeIntellect, and historical LiveCodeBench data; science from WebInstruct-Verified; logic from ARC-AGI, BARC, Zebra puzzles, ordering puzzles, and graph-search tasks; simulation from Code I/O/PyEdu; and tabular reasoning from HiTab and MultiHierTT.

The final domain counts are approximately 54.4K math, 18.1K code, 3.6K science, 6.3K logic, 3.7K simulation, and 6.1K tabular records. Released rows expose a message-list prompt, source and ability labels, reward-model payloads, auxiliary metadata, uniqueness status, and pass rates for the weak and strong screening models. Task-specific fields may additionally include code tests, entry points, completions, queries, responses, or table inputs.

### Deduplication and heuristic filtering

The paper rejects similarity methods as too prone to false positives for its setting and applies a conservative substring rule: if one question is a strict substring of another, the shorter question is removed. Domain heuristics then remove overlong prompts and brittle or trivial tasks. Examples include discarding code whose reference solution fails its tests, limiting large inputs and retaining at most eight tests, keeping harder graph and ordering problems, and restricting science to university- or PhD-level non-boolean, non-multiple-choice questions.

### Difficulty filtering

Each candidate is sampled 16 times with Qwen2.5-7B-Instruct and 16 times with Qwen3-30B-A8B. The pipeline removes tasks solved by the weak model at least 15 of 16 times, tasks the strong model never solves, and anomalous tasks where the weak pass rate exceeds the strong pass rate. Mathematics and science receive additional thresholds based on the gap between strong- and weak-model pass rates.

### Reward and training contract

Rewards are binary. A rollout terminates successfully when normalized answer matching, code execution, or the science verifier declares it correct. GURU-7B and GURU-32B start from Qwen2.5 base models and are trained with GRPO in veRL for two epochs. A training step uses 512 prompts and 16 responses per prompt at temperature 1.0, with up to 4K prompt tokens and 8K generated tokens.

## 4. Evidence: Why should we believe it?

The paper evaluates cross-domain transfer through controlled single-domain and mixed-domain RL experiments, then trains 7B and 32B models on the full mixture. The released evaluation suite covers 17 tasks, including AIME24, MATH500, HumanEval, MBPP, LiveCodeBench, GPQA, SuperGPQA, ARC-AGI, Zebra puzzles, Code I/O, CRUXEval, HiTab, MultiHierTT, FinQA, IFEval, and LiveBench.

The reported GURU-7B and GURU-32B results exceed selected open RL reasoning baselines on the paper's aggregate evaluation. Ablations compare raw and difficulty-filtered mathematics and analyze cross-domain transfer. These experiments demonstrate that the released mixture can train capable models and that filtering choices affect transfer; benchmark gains alone do not prove that every record or verifier is correct.

Reproducibility evidence is stronger than a paper-only release: the official Hugging Face dataset is accessible, its schema is inspectable, the repository contains preprocessing, filtering, reward, training, and evaluation code, model artifacts are public, and training logs are linked. Important intermediate artifacts remain absent.

## 5. Novelty: What is new relative to prior work?

GURU treats multi-domain RL data as a joined collection of prompts and executable feedback contracts rather than as a uniform question-answer file. Its contribution is the explicit assembly of heterogeneous verification modes into one ready-to-train corpus and the use of weak-versus-strong empirical pass rates as a shared difficulty and noise filter.

Compared with math- or code-only RLVR releases, it adds open-ended science, symbolic logic, code simulation, and table reasoning. Compared with a model report, it exposes the mixture, preprocessing paths, verifier routing, training implementation, evaluation tooling, and checkpoints needed to study cross-domain transfer.

## 6. Limitations: What are the weaknesses or hidden assumptions?

First, strict-substring deduplication is intentionally conservative. It will not remove paraphrases, translations, templated variants, or semantically identical tasks, and the paper does not report systematic overlap checks against all 17 evaluation sets.

Second, the verifiers are not equally reliable. Exact extraction can mishandle equivalent expressions; at most eight code tests can admit incorrect programs; and the 1.5B science verifier can produce both false positives and false negatives. Binary outcome rewards do not validate the intermediate reasoning process.

Third, difficulty selection embeds the screening models' biases. Removing every item that Qwen3-30B-A8B fails may discard genuinely difficult or novel questions rather than only malformed ones. Conversely, pass-rate gaps can reflect verifier artifacts or memorization rather than learnable reasoning difficulty.

Fourth, release licensing needs record-level review. The Hugging Face dataset is labeled MIT and the code is Apache-2.0, while the paper describes upstream assets under MIT, Apache-2.0, CC BY 4.0, and CC BY-SA. A single aggregate label does not demonstrate compatibility with every upstream item or platform-derived source.

Finally, the release omits rejected candidates, stage-specific rejection reasons, on-policy training responses, failed verifier traces, and reward distributions. These omissions prevent direct audits of selection bias, reward hacking, and the dynamics that produced the released checkpoints.

## 7. Uses: How can this work be used?

GURU can serve directly as a six-domain GRPO training mixture, as a source of domain-specific verifier implementations, or as a baseline for data-mixture and transfer experiments. Its pass-rate fields support curriculum design, difficulty reweighting, and studies of weak-versus-strong model disagreement.

For Track 8, the release is especially useful as a construction reference: it connects upstream source selection, conservative deduplication, domain heuristics, empirical difficulty screening, verifier routing, and downstream training in one inspectable pipeline. Auditors can also use it as a test case for license lineage, semantic deduplication, verifier calibration, and missing-data disclosure.

Reuse should preserve `data_source`, `extra_info`, reward payloads, pass-rate annotations, and the exact dataset revision. Users should independently check evaluation overlap and upstream licenses rather than treating the aggregate release label as sufficient.

## 8. Reading notes: What should readers remember?

- GURU is 91.9K RL-ready prompts across six domains, not 91.9K stored reasoning rollouts.
- Its central data object is a prompt joined to a domain-specific binary verifier contract.
- Difficulty filtering uses 16 trials each from Qwen2.5-7B-Instruct and Qwen3-30B-A8B.
- Substring deduplication is transparent but does not address semantic or evaluation-set overlap.
- The public data, code, models, and logs support reuse; rejected samples and training rollouts are still missing.
- MIT-labeled aggregate data built from mixed upstream licenses needs record-level compatibility review.

## 9. Citation

```bibtex
@inproceedings{cheng2025revisiting,
  title     = {Revisiting Reinforcement Learning for LLM Reasoning from A Cross-Domain Perspective},
  author    = {Cheng, Jorge (Zhoujun) and Hao, Shibo and Liu, Tianyang and Zhou, Fan and Xie, Yutao and Yao, Feng and Bian, Yuexin and Dey, Nilabjo and Zhuang, Yonghao and Zha, Yuheng and Gu, Yi and Zhou, Kun and Wang, Yuqi and Li, Yuan and Fan, Richard and She, Jianshu and Gao, Chengqian and Saparov, Abulhair and Killian, Taylor W. and Li, Haonan and Yurochkin, Mikhail and Liu, Zhengzhong and Xing, Eric P. and Hu, Zhiting},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {38},
  year      = {2025},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2025/hash/c2f71567cd53464161cab3336e8fc865-Abstract-Datasets_and_Benchmarks_Track.html}
}
```
