# Paper Card: Efficient Long CoT Reasoning in Small Language Models

> **One-sentence review:** Distills long chain-of-thought into smaller models by pruning teacher traces and curating valid on-policy student traces.
> **Reading priority:** worth reading
> **Paper type:** construction recipe paper
> **Best for:** Readers interested in math / reasoning / test time compute.
> **Confidence:** high
> **Year/source:** 2025 · arXiv
> **Authors:** Zhaoyang Wang, Jinqi Jiang, Tian Qiu, Hui Liu, Xianfeng Tang, Huaxiu Yao
> **Institutions:** University of North Carolina at Chapel Hill · Huazhong University of Science and Technology · Fudan University · Amazon
> **Links:** [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=efficient-long-cot-reasoning-in-small-language-models-2025&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=efficient-long-cot-reasoning-in-small-language-models-2025&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=efficient-long-cot-reasoning-in-small-language-models-2025&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Mathematical reasoning problems used to distill and evaluate long chain-of-thought behavior in small language models.

The reusable object is Pruned long reasoning trace, final answer, validity outcome, and selected student-training example. Fills the long2short lane with a concrete recipe that preserves the teacher/student trace lineage and validity filter rather than treating shorter reasoning as a formatting change.

## 2. Core Idea: What is the paper's main contribution?

Distills long chain-of-thought into smaller models by pruning teacher traces and curating valid on-policy student traces.

A long-CoT teacher provides initial traces; the student also generates on-policy candidate traces for curation. The feedback contract is: Programmatic or answer-based correctness checks validate traces selected for on-policy curation. The terminal condition is: A selected trace reaches a correct final answer under the reported math-task checker.

## 3. Method: How does it work?

Teacher traces are pruned; the student generates on-policy candidates to curate useful valid long-CoT data. Long-CoT distillation followed by on-policy student generation and validity-based curation. Remove unnecessary steps and retain student-generated traces that remain valid and useful under the reported check.

The resulting record contains Pruned long reasoning trace, final answer, validity outcome, and selected student-training example. The reported use is sft, distillation.

## 4. Evidence: Why should we believe it?

Pruned teacher traces and accepted student traces enter SFT/distillation. Reuse must retain teacher identity, pruning configuration, student policy version, prompt split, and answer checker.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Distills long chain-of-thought into smaller models by pruning teacher traces and curating valid on-policy student traces.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Pruning can delete uncertainty, corrections, or premises that are important for a valid derivation. Answer correctness does not prove that the compressed rationale is faithful or pedagogically useful. On-policy curation can reinforce the student's existing shortcuts and reduce solution diversity.

Reproduction also depends on split policy (Reported mathematical-reasoning evaluation benchmarks; inspect exact train/evaluation separation before reuse.), decontamination (unknown), and license provenance (unknown).

## 7. Usefulness: How can I use this paper?

It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result.

For reuse, preserve problem, teacher_long_cot, pruned_steps, student_candidate_trace, final_answer, validity_check, selected_training_trace, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Long-CoT distillation followed by on-policy student generation and validity-based curation.
- Inference budget: Long-trace length and student on-policy generation budget are material but should be pinned per experiment before reuse.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Programmatic or answer-based correctness checks validate traces selected for on-policy curation.
- Remaining checks: needs_metadata: verify code, data release, and exact trace-pruning configuration before reuse

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{efficient_long_cot_reasoning_in_small_language_models_2025,
  title = {Efficient Long CoT Reasoning in Small Language Models},
  author = {Zhaoyang Wang and Jinqi Jiang and Tian Qiu and Hui Liu and Xianfeng Tang and Huaxiu Yao},
  year = {2025},
  howpublished = {arXiv}
}
```
