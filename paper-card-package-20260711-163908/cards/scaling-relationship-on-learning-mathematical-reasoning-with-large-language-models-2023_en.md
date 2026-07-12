# Paper Card: Scaling Relationship on Learning Mathematical Reasoning with Large Language Models

> **One-sentence review:** Studies rejection-sampling fine-tuning, where multiple generated math rationales are answer-checked and only correct paths become augmented SFT data.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / scaling study paper
> **Best for:** Readers interested in math / reasoning / synthetic data.
> **Confidence:** high
> **Year/source:** 2023 · arXiv
> **Authors:** Zheng Yuan, Hongyi Yuan, Chengpeng Li, Guanting Dong, Keming Lu, Chuanqi Tan, Chang Zhou, Jingren Zhou
> **Institutions:** Alibaba DAMO Academy
> **Links:** [Paper](https://arxiv.org/abs/2308.01825) · [DOI](https://doi.org/10.48550/arXiv.2308.01825) · [Code](https://github.com/OFA-Sys/gsm8k-ScRel)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

GSM8K mathematical word-problem training and evaluation records.

The reusable object is A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set. A central RFT study that explicitly turns multiple generated math paths and answer-based acceptance into an SFT data-scaling recipe.

## 2. Core Idea: What is the paper's main contribution?

Studies rejection-sampling fine-tuning, where multiple generated math rationales are answer-checked and only correct paths become augmented SFT data.

Supervised LMs generate multiple candidate rationales and final answers for each problem. The feedback contract is: Final-answer correctness check retains correct reasoning paths. The terminal condition is: The generated final answer matches the task's expected answer under the paper's normalization procedure.

## 3. Method: How does it work?

Supervised models sample augmented rationales for each math problem. Generate diverse candidate paths, answer-check them, then fine-tune on accepted augmented data. Rejection sampling retains correct paths and can combine accepted paths from multiple models.

The resulting record contains A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set. The reported use is sft, evaluation.

## 4. Evidence: Why should we believe it?

Official evidence note: Official arXiv source and project code repository pinned.

Review the reported results against the exact task surface and feedback strength. Separate candidate coverage, verifier or selector precision, accepted-trajectory quality, post-training policy gain, and total generation/search/environment cost. Citation status is verified with high confidence.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Studies rejection-sampling fine-tuning, where multiple generated math rationales are answer-checked and only correct paths become augmented SFT data.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Retaining only correct final answers hides plausible but invalid rationales and collapses failure diversity. Exact-answer matching may accept reasoning with unsupported steps or reject equivalent answer formats. Reusing benchmark prompts for augmentation can contaminate subsequent benchmark evaluation.

Reproduction also depends on split policy (Generated augmentation is based on the reported training setup; evaluation is on GSM8K.), decontamination (unknown), and license provenance (Check GSM8K and code-repository terms before redistributing generated derivatives.).

## 7. Usefulness: How can I use this paper?

It is a clean data-lineage case: the prompt, candidate pool, answer checker, accepted trace, and source model all affect the claimed scaling gain.

For reuse, preserve math_problem, generated_rationale, final_answer, correctness_check, source_model, retained_for_rft, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Generate diverse candidate paths, answer-check them, then fine-tune on accepted augmented data.
- Inference budget: Candidate-generation count and diversity determine the accepted RFT pool; exact settings vary by experiment.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Final-answer correctness check retains correct reasoning paths.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{scaling_relationship_on_learning_mathematical_reasoning_with_large_language_models_2023,
  title = {Scaling Relationship on Learning Mathematical Reasoning with Large Language Models},
  author = {Zheng Yuan and Hongyi Yuan and Chengpeng Li and Guanting Dong and Keming Lu and Chuanqi Tan and Chang Zhou and Jingren Zhou},
  year = {2023},
  howpublished = {arXiv}
}
```
