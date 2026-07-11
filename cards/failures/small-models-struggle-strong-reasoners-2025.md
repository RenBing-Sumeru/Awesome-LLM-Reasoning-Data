<!-- entry_id: small-models-struggle-strong-reasoners-2025 -->
<!-- card_type: failures -->
# Paper Card: Small Models Struggle to Learn from Strong Reasoners

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=small-models-struggle-strong-reasoners-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=small-models-struggle-strong-reasoners-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=small-models-struggle-strong-reasoners-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** This controlled study shows that stronger or longer teacher traces can harm small students, while answer-only filtering and incomplete paper-to-artifact mapping limit causal and reproducibility claims.
> **Reading priority:** Essential
> **Paper type:** Distillation failure study and reasoning-data mixture recipe
> **Knowledge categories:** Data construction and open-release recipes; instruction demonstrations and rationales; training-use optimization
> **Best for:** Researchers selecting reasoning teachers, trace lengths, and mixtures for small-model SFT
> **Confidence:** High
> **Year / Venue:** 2025 / Findings of ACL
> **Authors:** Yuetai Li, Xiang Yue, Zhangchen Xu, Fengqing Jiang, Luyao Niu, Bill Yuchen Lin, Bhaskar Ramasubramanian, Radha Poovendran
> **Institutions:** University of Washington; Carnegie Mellon University; Western Washington University
> **Links:** [Paper](https://aclanthology.org/2025.findings-acl.1301/) · [arXiv](https://arxiv.org/abs/2502.12143) · [DOI](https://doi.org/10.18653/v1/2025.findings-acl.1301) · [Project](https://small-model-gap.github.io/) · [Code](https://github.com/Small-Model-Gap/Small-Model-Learnability-Gap) · [Hugging Face](https://huggingface.co/UWNSL)

---

## 1. Problem: What question does this work address?

Reasoning distillation often assumes that the strongest available teacher and its longest chain of thought provide the best supervision. The paper tests this assumption across student sizes and identifies a failure mode: students at or below roughly 3B parameters do not consistently benefit from long CoT or outputs from larger teachers. They may learn better from shorter traces or smaller teachers whose output distribution is closer to their own capacity.

This matters for reasoning-data curation because answer correctness alone does not determine whether a trace is learnable. Teacher size, trace complexity, response distribution, and student capacity can change the value of the same prompt-answer supervision.

## 2. Core idea: What is the main contribution?

The paper names this failure the **Small Model Learnability Gap** and measures two forms: a long-CoT gap and a large-teacher gap. It then proposes Mix Distillation as a simple mitigation:

- **Mix-Long** combines long and short CoT records.
- **Mix-Large** combines responses from stronger and weaker teachers.

For the main 3B experiments, each mixture uses a 1:4 ratio, placing 20% weight on long-CoT or large-teacher records. The central data contribution is therefore not a new public corpus but a controlled trace-selection and mixing recipe.

## 3. Method: How does it work?

The construction starts from the 7,500-problem MATH training set. QwQ-32B-Preview generates long CoT and Qwen2.5-32B-Instruct generates short CoT. Size-controlled teacher pairs include Qwen2.5-72B/3B-Instruct, Llama-3.1-70B/8B-Instruct, and Gemma-2-27B/9B-it.

Teachers use greedy decoding by default. Responses undergo rejection sampling based on final-answer correctness. To compare two teachers while reducing prompt-selection confounding, the pipeline retains problems for which both teachers produce a correct solution. Each SFT record contains the math problem and a teacher-generated response with reasoning and a final answer.

The study trains ten Qwen and Llama students from 0.5B to 70B. Models below 14B receive full-parameter SFT for two epochs with AdamW, cosine scheduling, maximum learning rate `1e-5`, and sequence length 16,384. Larger models use LoRA for two epochs with learning rate `1e-4`. The main Mix-Long and Mix-Large comparisons use Qwen2.5-3B-Instruct and Llama-3.2-3B-Instruct.

Evaluation covers MATH, GSM8K, AIME 2024, AMC 2023, and the English mathematics subset of OlympiadBench. Final answers are checked by exact match, with Qwen2.5-32B-Instruct used as a fallback judge for unmatched forms.

## 4. Evidence: Why should we believe it?

Across the studied model families and sizes, the reported long-CoT and large-teacher gaps are often negative for the smallest students and become more favorable as student capacity grows. The paper also reports higher student perplexity on complex or large-teacher traces and uses similarity analyses as evidence of teacher-student distribution mismatch.

In the main 7,500-example experiments, Mix-Long and Mix-Large outperform the corresponding single-source baselines across most reported metrics for 3B students. A weight ablation reports the best average performance near 0.2 for long or large-teacher data. Case analysis suggests that long-only training can induce repetitive overthinking, while short-only training can omit needed reasoning; the mixture can produce intermediate-length behavior.

These results demonstrate a recurring failure under the paper's mathematics setup. They do not prove that 20% is universally optimal, that trace length alone causes the gap, or that every intermediate step in the retained responses is correct.

## 5. Novelty: What is new relative to prior work?

The paper shifts attention from teacher capability to student learnability. Instead of asking whether a teacher solves more problems, it asks whether a student of a given size can model the teacher's response distribution and benefit after SFT.

It also separates two factors commonly conflated in reasoning distillation: trace length and teacher scale. The paired-correct filtering and matched teacher comparisons attempt to hold outcome correctness constant while varying those construction choices. Mix Distillation then turns the diagnosis into a minimal data-mixture intervention.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- **Answer-only process validation:** Rejection sampling verifies final answers, not the correctness, necessity, or faithfulness of intermediate reasoning steps.
- **Judge dependence:** Qwen2.5-32B-Instruct resolves non-exact evaluation matches, introducing model-judge error and family bias.
- **Narrow domain:** The experiments focus on mathematical reasoning; transfer to code, science, agents, or open-ended judgment tasks is unknown.
- **Ratio portability:** The 1:4 mixture and the observed capacity boundary are empirical choices centered on the tested models. They should not be treated as universal thresholds.
- **Residual confounding:** Teacher size changes more than capability, including style, token distribution, training data, and alignment behavior. Pairwise correctness does not remove all such differences.
- **Incomplete artifact mapping:** The official project links an MIT code repository and UWNSL Hugging Face releases, but the exact paper-matched trace dataset, retained row manifest, checkpoint revisions, and generation configuration still require artifact-level confirmation.
- **Incomplete audit metadata:** Teacher revisions, full decoding metadata beyond default greedy generation, upstream output licenses, and decontamination are unreported.

## 7. Uses: How can this work be used?

Use the learnability gap as a preflight test before scaling a teacher-trace pipeline. Generate candidate traces from multiple teacher sizes or styles, measure student perplexity and downstream transfer, and retain teacher identity and trace length as row-level fields.

Mix-Long and Mix-Large provide simple baselines for capacity-aware data composition. They can be compared with learned selectors, curriculum schedules, or student-conditioned rewards. Curators should preserve both accepted and rejected responses so that later audits can separate answer correctness, process quality, and student compatibility.

For Track 8, the paper is best treated as a failure-and-recipe card rather than an open release. Its value lies in exposing hidden construction variables and showing that “stronger teacher” is not an adequate data-quality label.

## 8. Reading notes: What should readers remember?

- Correct traces from a stronger teacher are not automatically better training data for a small student.
- Long-CoT and teacher-scale effects are related but distinct construction variables.
- Mix-Long and Mix-Large use a 1:4 ratio in the main 3B experiments.
- Paired-correct filtering controls final-answer success, not process validity.
- The official project, MIT repository, and Hugging Face organization provide an artifact-discovery surface, but exact paper-to-dataset and checkpoint mappings still require confirmation.

## 9. Citation

Official ACL Anthology BibTeX:

```bibtex
@inproceedings{li-etal-2025-small-models,
  title = {Small Models Struggle to Learn from Strong Reasoners},
  author = {Li, Yuetai and Yue, Xiang and Xu, Zhangchen and Jiang, Fengqing and Niu, Luyao and Lin, Bill Yuchen and Ramasubramanian, Bhaskar and Poovendran, Radha},
  booktitle = {Findings of the Association for Computational Linguistics: ACL 2025},
  month = jul,
  year = {2025},
  address = {Vienna, Austria},
  publisher = {Association for Computational Linguistics},
  pages = {25366--25394},
  doi = {10.18653/v1/2025.findings-acl.1301},
  url = {https://aclanthology.org/2025.findings-acl.1301/}
}
```
