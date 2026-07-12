# Paper Card: Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations

> **One-sentence review:** Uses Monte Carlo continuations and final-answer checks to create automatic step labels for PRM training, reranking, and stepwise PPO.
> **Reading priority:** worth reading
> **Paper type:** process supervision / verifier reward / construction recipe paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2023 · ACL
> **Authors:** Peiyi Wang, Lei Li, Zhihong Shao, Runxin Xu, Damai Dai, Yifei Li, Deli Chen, Yu Wu, Zhifang Sui
> **Institutions:** Peking University · DeepSeek-AI
> **Links:** [Paper](https://arxiv.org/abs/2312.08935) · [DOI](https://doi.org/10.48550/arXiv.2312.08935) · [Data](https://huggingface.co/datasets/peiyi9979/Math-Shepherd)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=math-shepherd-2023&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=math-shepherd-2023&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=math-shepherd-2023&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is math problem, complete solution, step prefix, continuation rollouts, final-answer outcomes, automatic step label, PRM score, and selected response. Uses Monte Carlo continuations and final-answer checks to create automatic step labels for PRM training, reranking, and stepwise PPO.

## 2. Core Idea: What is the paper's main contribution?

Uses Monte Carlo continuations and final-answer checks to create automatic step labels for PRM training, reranking, and stepwise PPO.

Generate candidate solutions, split them into steps, sample continuations from prefixes, check terminal answers, derive process labels, train Math-Shepherd, then use it for reranking or PPO. The feedback contract is: final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Generate candidate solutions, split them into steps, sample continuations from prefixes, check terminal answers, derive process labels, train Math-Shepherd, then use it for reranking or PPO.

The resulting record contains math problem, complete solution, step prefix, continuation rollouts, final-answer outcomes, automatic step label, PRM score, and selected response. The reported use is process supervision, reward modeling, rlvr, test time compute.

## 4. Evidence: Why should we believe it?

Reported evaluations on GSM8K and MATH include base-model, verification, and step-by-step PPO comparisons, with a released Math-Shepherd dataset.

The evidence should be read as a joint measurement of generator quality, feedback quality, data selection, and compute. Comparisons are only interpretable when sample counts, verifier calls, token limits, and policy checkpoints are aligned. The paper's reported results support the stated mechanism, but they do not automatically establish that every retained rationale is faithful.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Uses Monte Carlo continuations and final-answer checks to create automatic step labels for PRM training, reranking, and stepwise PPO.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Monte Carlo labels depend strongly on continuation count and policy strength. a recoverable prefix may be labeled positive despite a locally invalid step. answer matching cannot establish faithfulness of the intermediate derivation.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

It replaces expensive human process labels with rollout-derived labels and demonstrates the same verifier in both best-of-N selection and policy optimization.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{math_shepherd_2023,
  title = {Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations},
  author = {Peiyi Wang and Lei Li and Zhihong Shao and Runxin Xu and Damai Dai and Yifei Li and Deli Chen and Yu Wu and Zhifang Sui},
  year = {2023},
  howpublished = {ACL}
}
```
