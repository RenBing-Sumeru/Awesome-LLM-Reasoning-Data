# Paper Card: DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning

> **One-sentence review:** Combines rule-rewarded on-policy reasoning rollouts, rejection-sampled SFT data, multi-stage RL, and long-CoT distillation.
> **Reading priority:** worth reading
> **Paper type:** model report / construction recipe / scaling study paper
> **Best for:** Readers interested in math / code / reasoning.
> **Confidence:** high
> **Year/source:** 2025 · Nature
> **Authors:** DeepSeek-AI, Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiao Bi, Xiaokang Zhang, Xingkai Yu, Yu Wu, Zhihong Shao
> **Institutions:** DeepSeek-AI
> **Links:** [Paper](https://arxiv.org/abs/2501.12948) · [DOI](https://doi.org/10.48550/arXiv.2501.12948) · [Code](https://github.com/deepseek-ai/DeepSeek-R1) · [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-R1)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is prompt, policy checkpoint, sampled long reasoning response, final answer, accuracy and format rewards, rejection-sampling decision, SFT mixture membership, and distilled student target. Combines rule-rewarded on-policy reasoning rollouts, rejection-sampled SFT data, multi-stage RL, and long-CoT distillation.

## 2. Core Idea: What is the paper's main contribution?

Combines rule-rewarded on-policy reasoning rollouts, rejection-sampled SFT data, multi-stage RL, and long-CoT distillation.

Train R1-Zero with large-scale RL, add cold-start traces for R1, run reasoning RL, rejection-sample successful readable responses into SFT data, mix non-reasoning data, run further RL, and distill R1 outputs. The feedback contract is: rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Train R1-Zero with large-scale RL, add cold-start traces for R1, run reasoning RL, rejection-sample successful readable responses into SFT data, mix non-reasoning data, run further RL, and distill R1 outputs.

The resulting record contains prompt, policy checkpoint, sampled long reasoning response, final answer, accuracy and format rewards, rejection-sampling decision, SFT mixture membership, and distilled student target. The reported use is rlvr, sft, distillation, test time compute.

## 4. Evidence: Why should we believe it?

The report evaluates R1-Zero, R1, and six distilled dense models across AIME, MATH-500, GPQA, code, and general benchmarks; official weights and sample data are released.

The evidence should be read as a joint measurement of generator quality, feedback quality, data selection, and compute. Comparisons are only interpretable when sample counts, verifier calls, token limits, and policy checkpoints are aligned. The paper's reported results support the stated mechanism, but they do not automatically establish that every retained rationale is faithful.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Combines rule-rewarded on-policy reasoning rollouts, rejection-sampled SFT data, multi-stage RL, and long-CoT distillation.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

the complete training rollout corpus and rejected distribution are not released. multi-stage gains conflate RL, cold-start data, rejection sampling, and distillation. rule correctness does not verify the faithfulness or efficiency of a long rationale.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

The report links emergent long reasoning under outcome RL to a practical multi-stage recipe that repairs readability and transfers behavior by rejection sampling and distillation.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{deepseek_r1_2025,
  title = {DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning},
  author = {DeepSeek-AI and Daya Guo and Dejian Yang and Haowei Zhang and Junxiao Song and Ruoyu Zhang and Runxin Xu and Qihao Zhu and Shirong Ma and Peiyi Wang and Xiao Bi and Xiaokang Zhang and Xingkai Yu and Yu Wu and Zhihong Shao},
  year = {2025},
  howpublished = {Nature}
}
```
