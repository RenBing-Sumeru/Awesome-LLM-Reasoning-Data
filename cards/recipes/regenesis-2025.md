<!-- entry_id: regenesis-2025 -->
<!-- card_type: recipes -->
# Paper Card: ReGenesis: LLMs can Grow into Reasoning Generalists via Self-Improvement

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=regenesis-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=regenesis-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=regenesis-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** ReGenesis makes abstract-to-concrete trace construction explicit, but answer-only filtering and answer-hinted retries can preserve invalid or rationalized reasoning paths.
> **Reading priority:** Essential
> **Paper type:** Self-generated reasoning-path construction and SFT recipe
> **Knowledge categories:** Instruction, Demonstration, and Rationale Data | Process and Trace Supervision Data | Data Construction and Open Release Recipes | Training Usage and Optimization Objectives
> **Best for:** Researchers designing self-generated reasoning traces across heterogeneous task families
> **Confidence:** High
> **Year / Venue:** 2025 | ICLR Oral
> **Authors:** Xiangyu Peng, Congying Xia, Xinyi Yang, Caiming Xiong, Chien-Sheng Wu, Chen Xing
> **Institutions:** unknown
> **Links:** [Paper](https://proceedings.iclr.cc/paper_files/paper/2025/hash/9c77f2ce42151b2c2e26d2cf47f99564-Abstract-Conference.html) | [arXiv](https://arxiv.org/abs/2410.02108) | [OpenReview](https://openreview.net/forum?id=YUYJsHOf3c)

---

## 1. Problem: What question does this work address?

Self-training can generate many task-specific reasoning traces, but direct trace sampling often lacks an explicit plan for transferring reasoning patterns across domains. ReGenesis asks whether a target model can first abstract how to reason, then adapt that abstraction to each task, and finally instantiate concrete paths that improve math, logic, commonsense, and natural-language-inference performance without relying on an external reasoning teacher.

## 2. Core idea: What is the main contribution?

ReGenesis constructs reasoning data through an abstraction ladder: general reasoning guideline → task-specific guideline → reasoning structure → concrete candidate path. Candidate paths are checked against the source dataset's ground-truth answer, and retained paths become one-time SFT targets. This makes the intermediate planning representation, not only the final rationale, a deliberate data-construction variable.

## 3. Method: How does it work?

The source mixture contains instructions and answers from GSM8K, NumGLUE, ReClor, ARC-Challenge, and StrategyQA; GSM8K human rationales are excluded. The target model begins from a general reasoning guideline, adapts it to the current task, writes a reasoning structure, and expands that structure into a concrete step-by-step path and predicted answer. Main experiments use Mistral-7B-Instruct-v0.3, with Meta-Llama-3-8B-Instruct used in analysis.

For each instruction, the model samples 25 paths at temperature 0.85. Exact-match comparison with the ground-truth answer determines which paths pass, and up to five correct paths are retained at random. If no path passes, the answer is exposed upstream as a hint and the model retries. The paper also studies self-consistency majority vote as an alternative selection rule. The final model receives one-time SFT on instruction-to-path-plus-answer targets.

## 4. Evidence: Why should we believe it?

The paper evaluates in-domain test splits from the training-task families and six separate out-of-distribution tasks. It studies both the main exact-match filter and a majority-vote alternative, and analyzes the method with Mistral and Llama model families. The cross-domain setup supports the claim that the guideline-to-structure-to-path scaffold is not confined to a single math dataset.

However, performance improvements demonstrate the usefulness of the selected training mixture, not the validity of every retained reasoning step. No official code, generated-path dataset, trained checkpoint, or project page was verified, so the exact prompts, source snapshots, and generated corpus cannot currently be independently audited as a release.

## 5. Novelty: What is new relative to prior work?

The central novelty is the explicit abstraction ladder before trace generation. Rather than sampling complete rationales directly, ReGenesis asks the model to transform a general guideline into a task-specific guideline and then into a reusable reasoning structure before producing concrete paths. It combines this scaffold with high-volume self-sampling, terminal-answer filtering, and a recovery path for instructions with no initially accepted trajectory.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Exact-answer agreement is only an outcome check. It can accept invalid intermediate reasoning that reaches the expected answer and reject semantically equivalent answers that fail the parser. Randomly retaining up to five passing paths does not explicitly optimize correctness, diversity, or coverage, while majority voting can amplify correlated model errors.

The answer-hinted retry is especially important to audit: exposing the target answer can cause post-hoc rationalization or leak answer-specific tokens and structures into the generated path. A path produced under this hint is not equivalent to an independently solved trajectory, yet both may enter the same SFT mixture. The source mixture also confounds attribution across task families, and the paper reports no explicit decontamination. Reproduction is further limited by the absence of official code, data, model artifacts, generated-data licensing, and immutable prompt or dataset snapshots.

## 7. Uses: How can this work be used?

ReGenesis is a useful recipe for studying whether abstract planning scaffolds improve self-generated SFT data across domains. Its records can support process-oriented SFT, comparisons between direct rationale sampling and structured generation, and controlled studies of path count, pass rate, random retention, majority selection, and hinted recovery. For Track 8, the method provides a strong example of why construction lineage should record every intermediate object and whether an accepted trace was generated freely or with the answer revealed.

## 8. Reading notes: What should readers remember?

- The data chain is guideline → adapted guideline → structure → concrete path → predicted answer.
- The target model is the path generator; source-dataset answers provide terminal supervision.
- Each instruction receives 25 sampled paths, with at most five passing paths retained.
- Exact-match filtering validates the answer, not the reasoning process.
- Failed instructions may be retried with the answer exposed as a hint, creating rationalization and leakage risk.
- Official code, generated data, checkpoints, licenses, snapshots, and decontamination are unknown.

## 9. Citation

The following provisional citation preserves the verified ICLR 2025 Oral record and official arXiv identifier.

```bibtex
@inproceedings{peng2025regenesis,
  title = {ReGenesis: LLMs can Grow into Reasoning Generalists via Self-Improvement},
  author = {Peng, Xiangyu and Xia, Congying and Yang, Xinyi and Xiong, Caiming and Wu, Chien-Sheng and Xing, Chen},
  booktitle = {International Conference on Learning Representations},
  year = {2025},
  eprint = {2410.02108},
  archivePrefix = {arXiv}
}
```
