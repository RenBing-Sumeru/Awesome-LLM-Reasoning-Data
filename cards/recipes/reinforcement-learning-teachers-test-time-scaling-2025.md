<!-- entry_id: reinforcement-learning-teachers-test-time-scaling-2025 -->
<!-- card_type: recipes -->
# Paper Card: Reinforcement Learning Teachers of Test Time Scaling

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-teachers-test-time-scaling-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-teachers-test-time-scaling-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforcement-learning-teachers-test-time-scaling-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** RLT directly optimizes a 7B teacher for student learnability, but known-answer conditioning and the absence of released traces or a clearly labeled teacher checkpoint limit independent audit.
> **Reading priority:** Essential
> **Paper type:** Reasoning-data construction recipe and reinforcement-learning study
> **Knowledge categories:** Data construction and open-release recipes; instruction demonstrations and rationales; RLVR and distillation
> **Best for:** Researchers designing teacher-generated reasoning data, cold-start corpora, student-conditioned rewards, or distillation audits
> **Confidence:** High
> **Year / Venue:** 2025 / NeurIPS
> **Authors:** Edoardo Cetin, Tianyu Zhao, Yujin Tang
> **Institutions:** Sakana AI
> **Links:** [Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/9a6b278218966499194491f55ccf8b75-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2506.08388) · [Code](https://github.com/SakanaAI/RLT) · [Project](https://sakana.ai/rlt/) · [Models](https://huggingface.co/collections/SakanaAI/reinforcement-learning-teachers)

---

## 1. Problem: What question does this work address?

Reasoning distillation usually asks a strong model to solve a problem and then repurposes successful solutions as student training data. This creates two mismatches. First, sparse correctness rewards require a teacher that can already solve the task. Second, a policy optimized to solve is not necessarily optimized to explain in a form that a particular student can learn.

RLT asks whether a smaller model can instead be trained specifically as a teacher. The data-construction question is not merely whether a generated answer is correct, but whether an explanation conditioned on a known solution increases a student's ability to predict that solution.

## 2. Core idea: What is the main contribution?

The paper introduces a Reinforcement-Learned Teacher: a Qwen2.5-7B-Instruct model receives both a question and its known solution and generates the intermediate explanation connecting them. A frozen student converts each proposed explanation into a dense scalar reward by measuring how well the student can recover the supplied solution and how plausible the explanation is under the student's distribution.

The primary constructed object is an explanation-plus-solution SFT example. Its feedback contract is explicitly student-conditioned: the same explanation can receive a different value when the reward student changes. This makes the reward model, teacher conditioning, and downstream student part of the data provenance.

## 3. Method: How does it work?

The default source is fewer than 17,000 mathematics and coding question-solution pairs from Bespoke-Stratos-17k; the paper also studies a 1,000-example subset. The code expects `question` and `solution` fields and optionally an existing `reasoning_trace` for warm-up.

The pipeline is:

1. Warm up Qwen2.5-7B-Instruct with RLT-formatted example traces.
2. Give the teacher each question together with its known solution and require a tagged, connect-the-dots explanation.
3. Extract the explanation tokens, place them before the known solution, and score this student-distillation sequence with a frozen Qwen2.5-7B-Instruct student.
4. Compute a dense reward from the student's average and minimum log-probability over solution tokens plus a KL-based term that favors explanations interpretable as student-side continuations. Apply a format penalty to malformed outputs.
5. Optimize the teacher with GRPO, using group size 64, temperature 0.7, top-p 1.0, no top-k, a 16,384-token context, 125 steps, and batch size 1,024.
6. Regenerate explanations after RL and use the resulting explanation-plus-solution records for student SFT.

Unlike ordinary rejection-sampling pipelines, the reported main construction uses raw RLT outputs rather than retaining only teacher completions that independently solve the task. The known solution is always available to the teacher. For larger students, the official repository recommends collecting multiple traces because long explanations can be cropped by the student's context window.

## 4. Evidence: Why should we believe it?

The paper compares RLT-generated traces with Bespoke, Sky-T1, s1, DeepSeek-R1, and other distillation baselines on AIME 2024, MATH-500, and GPQA Diamond. It evaluates both 7B and 32B students and both 1K and roughly 17K source-data regimes. The reported experiments show that a 7B RLT can produce training traces that yield stronger downstream students than traces from much larger solver-oriented teachers under the paper's matched setup. It also reports transfer to larger students and out-of-distribution tasks.

Useful reproducibility evidence includes training code, configuration files, the dense-reward implementation, generation settings, and an Apache-2.0 repository. The official Hugging Face collection exposes RLT-7B and RLT-32B artifacts described as students distilled from a 7B RLT.

These benchmark results support the claim that optimizing for downstream learnability can outperform solver-trace collection in this setup. They do not establish that the explanations are faithful proofs, generally optimal for every student, uncontaminated, or reusable without the original reward student.

## 5. Novelty: What is new relative to prior work?

Prior reasoning distillation usually treats teacher traces as a by-product of solving and filters them with outcome correctness. RLT instead makes teaching effectiveness the RL objective and supplies the answer in advance so teacher exploration is unnecessary. The reward is not a generic judge score: it is derived from the target student's token probabilities over the known solution, with an additional explanation-distribution term.

This reframes teacher-generated data as a bilevel construction problem. The producer is optimized against the learning behavior of a consumer, so teacher identity alone is insufficient provenance; the reward student and solution-conditioned prompt are also essential metadata.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- **Known-answer hindsight:** The teacher explains a supplied solution rather than independently deriving it. A fluent trace may rationalize the answer or omit uncertainty that would appear during genuine search.
- **Student-specific reward:** A frozen Qwen2.5-7B-Instruct student defines learnability. Rewarded traces may exploit that student's distribution and transfer unevenly to different architectures, sizes, or pretraining mixtures.
- **Weak process validity:** Higher solution-token likelihood is not proof that every intermediate step is correct, necessary, or causally responsible for learning.
- **Artifact boundary:** The official model collection describes distilled students. It does not clearly expose the trained RLT teacher checkpoint, and no official generated-explanation dataset or row-level lineage manifest was identified.
- **Release and audit gaps:** Exact retained student-training rows, immutable source indices, generated-data licensing, and decontamination are unknown.
- **Context truncation:** Long explanations can be cropped during student distillation, especially for 32B students, changing the effective training object.

## 7. Uses: How can this work be used?

For reasoning-data construction, RLT provides a concrete alternative to sampling from a frontier solver: train a smaller producer against downstream student utility. It can inform cold-start SFT data, teacher-selection studies, pedagogical trace generation, and experiments that compare generic correctness filters with student-conditioned feedback.

For audits, record the question and known solution, RLT teacher checkpoint, reward-student checkpoint, prompt format, explanation, both reward components, decoding parameters, GRPO group, and downstream student. Without those fields, an apparently ordinary chain-of-thought row hides the mechanism that selected its style and content.

For replication, use the official code as a recipe rather than treating the released model collection as a complete data release. Reusers should independently validate step correctness, test transfer across students, preserve failed or low-reward traces, and publish immutable row-level lineage.

## 8. Reading notes: What should readers remember?

- RLT learns to explain a known answer; it is not trained primarily to discover the answer.
- The native signal is downstream student likelihood, not final-answer correctness or human pedagogy labels.
- The reward student is part of every generated trace's provenance.
- Raw RLT outputs are used for distillation, avoiding the usual correctness-only rejection stage.
- Code and distilled students are public, but generated traces and a clearly labeled teacher checkpoint were not identified.

## 9. Citation

Official NeurIPS 2025 citation:

```bibtex
@inproceedings{cetin2025reinforcement,
  title={Reinforcement Learning Teachers of Test Time Scaling},
  author={Cetin, Edoardo and Zhao, Tianyu and Tang, Yujin},
  booktitle={Advances in Neural Information Processing Systems},
  volume={38},
  year={2025}
}
```
