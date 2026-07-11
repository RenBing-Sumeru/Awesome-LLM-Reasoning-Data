<!-- entry_id: compassverifier-2025 -->
<!-- card_type: verifiers -->
# Paper Card: CompassVerifier: A Unified and Robust Verifier for LLMs Evaluation and Outcome Reward

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassverifier-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassverifier-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassverifier-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** A strong open outcome-verifier release whose expert-adjudicated benchmark and error-driven augmentation are reusable, but whose training-corpus completeness, count contradiction, and inherited licenses require careful audit.
> **Reading priority:** Essential
> **Paper type:** Outcome verifier, benchmark, and open release
> **Knowledge categories:** Reward and feedback data | Programmatically verifiable outcomes | Expert judgment data | Data construction and filtering | Verifier auditing
> **Best for:** Researchers building answer filters, reference-based rewards, verifier benchmarks, and RLVR pipelines across mathematics, science, knowledge, and general reasoning
> **Confidence:** High
> **Year / Venue:** 2025 | EMNLP 2025
> **Authors:** Shudong Liu, Hongwei Liu, Junnan Liu, Linchen Xiao, Songyang Gao, Chengqi Lyu, Yuzhe Gu, Wenwei Zhang, Derek F. Wong, Songyang Zhang, Kai Chen
> **Institutions:** Shanghai AI Laboratory; NLP2CT Lab, University of Macau
> **Links:** [Paper](https://aclanthology.org/2025.emnlp-main.1698/) | [DOI](https://doi.org/10.18653/v1/2025.emnlp-main.1698) | [Project](https://open-compass.github.io/CompassVerifier/) | [Code](https://github.com/open-compass/CompassVerifier) | [Dataset](https://huggingface.co/datasets/opencompass/VerifierBench) | [Models](https://huggingface.co/collections/opencompass/compassverifier)

---

## 1. Problem: What question does this work address?

Reasoning-model pipelines need to decide whether an unstructured response matches a reference answer. Regex and symbolic matchers are brittle across formulas, sequences, multiple subproblems, free text, and abnormal outputs. General LLM judges can cover more formats but require prompt customization and can hallucinate or apply inconsistent penalty thresholds. These weaknesses affect both evaluation and training because the same judgment may become an outcome reward.

The paper addresses two coupled gaps: the lack of a challenging, diverse benchmark for reference-based answer verification, and the lack of a lightweight verifier trained on the failure cases that defeat rules and general judges. It also asks whether one verifier can operate across knowledge, mathematics, science, and general reasoning without a separate prompt or parser for every dataset.

## 2. Core idea: What is the main contribution?

CompassVerifier combines a curated benchmark, a verifier-training recipe, released checkpoints, and an RL reward demonstration.

VerifierBench starts from more than 1.325 million responses produced by 53 model variants on 16 benchmarks. Multi-model and multi-prompt judgments remove easy cases and identify disputes. Deduplication, problem filtering, similarity filtering, and expert adjudication produce a difficult test set with three labels: Correct, Incorrect, and Invalid. Invalid distinguishes a wrong response from a flawed question, incomplete reference, refusal, repetition, truncation, or other quality failure.

CompassVerifier is trained on consensus-filtered base examples plus two targeted synthetic sources: error-driven adversarial augmentation derived from human failure rationales and complex-formula augmentation. The released 3B, 7B, and 32B Qwen-family models take a question, reference answer, and candidate response and emit a direct A/B/C verdict or an optional chain-of-thought analysis followed by that verdict.

## 3. Method: How does it work?

### VerifierBench construction

OpenCompass collects 1,325,293 question/reference/response triplets from 53 commercial, open, and reasoning-model variants across GSM8K, MATH, AIME2024, BBH, GaokaoBench, HLE, KorBench, GPQA, SimpleQA, ChineseSimpleQA, MMLU-Pro, ARC, OlympiadBench, TheoremQA, NuminaMath, and DROP.

The filtering pipeline then applies:

1. Multi-expert model voting to label easy agreement cases and isolate disagreements.
2. Multi-prompt voting, with dataset-specific prompts where a universal verifier prompt remains unreliable.
3. String deduplication, especially for repetitive Invalid responses.
4. DeepSeek-V3 filtering of open-ended questions, incomplete references, and proof-based cases that cannot be judged objectively from the reference alone.
5. Human annotation of approximately 5,000 disputed examples, including detailed judgment rationales.
6. Similarity filtering within the dominant Incorrect subset to improve label balance.
7. Explicit separation between the final test set and CompassVerifier training data.

The paper reports 2,817 final test examples. The current Hugging Face viewer reports approximately 2.82k rows with fields for question, gold answer, model response, gold judgment, source, domain, and answer type.

### CompassVerifier training data

The paper's Table 13 reports 96,832 examples:

- 54,420 consensus-filtered base examples from the VerifierBench pipeline;
- 24,294 error-driven adversarial examples;
- 18,118 complex-formula examples.

Experts manually review 5,000 annotations and record rationales about task constraints, critical information, answer equivalence, format tolerance, and penalty thresholds. These rationales are clustered into failure categories. DeepSeek-V3 generates 34 meta-judge templates and targeted boundary cases intended to address over-strict format rejection, under-penalized conceptual errors, perspective mistakes, and prompt sensitivity.

Complex-formula augmentation generates equivalent and non-equivalent expressions across 14 science and engineering disciplines. Generalizability augmentation varies prompts and responses, including truncating reasoning prefixes, replacing or removing thinking tags, and mixing format perturbations before judgment and filtering.

The 3B, 7B, and 32B CompassVerifier checkpoints are fine-tuned as generative verifiers. Their native output is A for Correct, B for Incorrect, or C for Invalid/quality problems. The repository notes that B and C can be merged for binary reward use. A separate experiment uses CompassVerifier as an outcome reward for GRPO training of Qwen3-4B-Base on an Open-S1 subset that excludes integer-answer problems.

## 4. Evidence: Why should we believe it?

VerifierBench covers four domains, seven answer types, and difficult cases selected because rule-based and LLM judgments disagree. The paper evaluates general models, specialized verifiers, and CompassVerifier at three sizes using accuracy and F1. Reported performance increases with CompassVerifier scale, and mathematics remains the hardest domain. Results are also broken down by answer type and ternary label, which is more informative than one aggregate score.

Ablations add complex-formula and error-driven augmentation to a base verifier and report incremental gains. Prompt-transfer tests evaluate both model-specific prompts and a standardized benchmark prompt. The reward experiment compares Math-Verify, general LLMs, specialized verifiers, and CompassVerifier as the reward source for GRPO on AIME24, AIME25, and MATH500.

The release is substantial: Apache-2.0 code, a CC-BY-SA-4.0 VerifierBench dataset, and 3B/7B/32B model checkpoints are public. The repository includes direct and chain-of-thought inference prompts and example parsing code.

This evidence demonstrates utility on the reported benchmark and reward setup. It does not establish that every accepted verifier judgment is correct, that the benchmark is free of source-model contamination, or that all 96,832 training examples and intermediate votes are released. Benchmark performance should not be treated as proof of training-data quality.

## 5. Novelty: What is new relative to prior work?

The work does more than train a generic judge on preference pairs. It treats answer verification as a distinct reference-conditioned task with diverse structured and unstructured answer types, and it explicitly models Invalid inputs rather than forcing every case into correct/incorrect.

Its main construction novelty is error-driven verifier refresh. Human rationales are not only retained for analysis; they are clustered into meta error patterns and converted into synthetic decision-boundary templates. Formula equivalence and prompt-format variation are also targeted rather than left to incidental coverage.

The combined release links three surfaces that are often separated: a difficult verifier benchmark, specialized verifier checkpoints, and a demonstration that the same model can provide outcome rewards during RL. This makes the verifier a reusable and auditable data object rather than an undocumented evaluation prompt.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- Appendix A.8 contains a material count contradiction. Table 13 lists 24,294 adversarial examples and a total of 96,832, while the following prose says 224,294. Only 24,294 reconciles with the total; the official source should be corrected rather than silently normalized.
- DeepSeek-V3 is used for problem filtering, answer-type classification, error-template synthesis, formula work, and other augmentation. These roles concentrate teacher bias and hidden-objective risk in a single model family.
- Multi-model consensus is not an oracle. Correlated judges or shared prompts can produce confidently wrong labels, especially on subtle equivalence and task-constraint cases.
- Human reviewers report divergent penalty thresholds. The A/B/C boundary therefore embeds annotation policy about acceptable precision, formatting, completeness, and interpretation.
- The paper describes more than 30 meta error patterns in benchmark analysis and over 40 high-impact categories in training analysis without releasing one clearly versioned taxonomy and mapping.
- Proof-based, open-ended, and ambiguous-threshold questions are excluded. The verifier's broad domain coverage should not be interpreted as coverage of all reasoning verification.
- Some reward experiments merge Invalid with Incorrect. This loses whether the candidate is wrong or whether the prompt/reference/evaluation object is defective.
- The public VerifierBench release exposes the test set, but the release status of the complete 96,832-example verifier-training corpus, human rationales, votes, rejected samples, and filter decisions is unclear.
- The dataset card declares CC-BY-SA-4.0 and the code is Apache-2.0, but upstream benchmark questions, reference answers, and generated model outputs have heterogeneous provenance. A top-level dataset license does not by itself resolve inherited rights.
- Model checkpoint licenses should be checked per model card; the repository's Apache-2.0 code license does not automatically license model weights or their Qwen base.
- Decoding settings, seeds, API revisions, and immutable response-generator versions are not consolidated across all 53 models.
- Reported train/test non-overlap does not establish semantic deduplication against upstream benchmarks, source-model pretraining data, or external evaluation sets.

For calibration, the native A/B/C distribution matters. A binary merge can conceal high Invalid rates, and accuracy can be misleading under class imbalance. Before using CompassVerifier as a filter or reward, measure per-domain precision, recall, false-positive cost, Invalid calibration, prompt sensitivity, and generator-specific drift on an independent audit set.

## 7. Uses: How can this work be used?

CompassVerifier can replace brittle answer extractors or expensive general judges when constructing reasoning datasets with reference answers. It can score generated solutions, reject abnormal outputs, provide outcome rewards for RLVR, and audit whether different answer formats are treated consistently.

VerifierBench is useful as a pre-deployment gate for reward models and evaluators. Teams can stratify results by domain, answer type, and A/B/C label, then add local error templates for their own failure boundaries. The human-rationale-to-template pipeline is especially relevant to Track 8 because it offers a repeatable refresh loop: collect disagreements, adjudicate them, cluster failure causes, synthesize boundary cases, retrain, and reevaluate.

For open-release practice, the work is a useful but incomplete model. It releases benchmark data, code, and checkpoints, yet a fully auditable release would also expose the complete training corpus, source manifests, votes, rationales, rejected cases, transformation logs, licenses, and immutable versions.

## 8. Reading notes: What should readers remember?

- The verifier input is `(question, reference answer, model response)`; the native signal is ternary A/B/C, not merely a scalar reward.
- VerifierBench is a filtered hard-case benchmark derived from more than 1.325 million responses, not a random sample of ordinary outputs.
- The training recipe mixes 54,420 base, 24,294 adversarial, and 18,118 formula examples; the paper's separate 224,294 statement is inconsistent.
- Error templates are grounded in expert rationales, but DeepSeek-V3 both shapes and populates many augmentation stages.
- Treat Invalid separately during calibration whenever prompt, reference, truncation, or refusal defects matter.
- Code, benchmark data, and models are released; full training-data lineage and inherited-license compatibility remain incomplete.

## 9. Citation

```bibtex
@inproceedings{liu-etal-2025-compassverifier,
  title     = {{C}ompass{V}erifier: A Unified and Robust Verifier for {LLM}s Evaluation and Outcome Reward},
  author    = {Liu, Shudong and Liu, Hongwei and Liu, Junnan and Xiao, Linchen and Gao, Songyang and Lyu, Chengqi and Gu, Yuzhe and Zhang, Wenwei and Wong, Derek F. and Zhang, Songyang and Chen, Kai},
  booktitle = {Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing},
  month     = nov,
  year      = {2025},
  address   = {Suzhou, China},
  publisher = {Association for Computational Linguistics},
  pages     = {33466--33494},
  doi       = {10.18653/v1/2025.emnlp-main.1698},
  url       = {https://aclanthology.org/2025.emnlp-main.1698/}
}
```
