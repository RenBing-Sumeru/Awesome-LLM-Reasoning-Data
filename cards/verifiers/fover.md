<!-- entry_id: fover-2026 -->
<!-- card_type: verifiers -->
# Efficient PRM Training Data Synthesis via Formal Verification

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=fover-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=fover-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=fover-2026&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, programmatically_verifiable_outcome_data, process_trace_supervision_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [ACL Anthology](https://aclanthology.org/2026.findings-acl.403/) · [arXiv](https://arxiv.org/abs/2505.15960) · [Code](https://github.com/psunlpgroup/FoVer) · [Dataset](https://huggingface.co/datasets/ryokamoi/FoVer-FormalLogic-FormalProof-Qwen-2.5-7B-LastStepBalanced-40k) · [Collection](https://huggingface.co/collections/ryokamoi/fover) · [Project](https://fover-prm.github.io/)

## TL;DR

FoVer synthesizes process-reward-model training data by generating formal reasoning traces and labeling individual steps with Z3 or Isabelle/HOL. FOVER-40K combines formal-logic and theorem-proving supervision, then trains Llama- and Qwen-based PRMs whose correct/incorrect token logits can score reasoning steps and rank Best-of-K candidates.

The labels are programmatic, but they are not infallible ground truth for the original natural-language problem. A formally accepted step may still be wrong for the intended problem because the problem was misformalized, required context was omitted, `sorry` placeholders masked dependencies, or the prover wrapper mishandled parsing, typing, tactics, timeouts, or environment failures.

## 1. What is this work?

- Year / venue: 2026 · Findings of ACL 2026.
- Atlas roles: verifier/reward resource, process-supervision release, construction recipe, and model report.
- Domains: formal logic, theorem proving, mathematical reasoning, and natural-language reasoning.
- Native supervision: programmatic step-level correctness from Z3 and Isabelle/HOL.
- Released artifacts: labeled process data, synthesis and training code, and trained PRM variants.
- Current metadata status: partial.

FoVer provides an alternative to human step annotation and Monte Carlo rollout labeling by converting formal-prover outcomes into process-reward supervision. Its verifier determines validity relative to a constructed formal problem and a particular checking wrapper; it does not independently establish semantic fidelity between that formal problem and the original natural-language task.

## 2. What data object does it expose?

The core object is a formal reasoning problem paired with an ordered solution trace and aligned Boolean step-error labels. Released fields include `id`, `problem`, `solution_steps`, `error_labels`, `problem_witout_definition` (the released spelling), `messages`, `base_dataset`, `messages_for_prediction`, `hypothesis_formula`, and `facts_formula`.

The final-paper mixture is reported as:

| Component | Generator | Formal substrate | Reported size |
|---|---|---|---:|
| Formal logic | Llama 3.1 8B | FLDx2 with Z3 checking | 10K steps |
| Formal logic | Qwen 2.5 7B | FLDx2 with Z3 checking | 10K steps |
| Formal mathematical proofs | Qwen 2.5 7B | GSM8K, MetaMathQA, and Big-Math formalized for Isabelle/HOL | 20K steps |

The official Hugging Face collection also contains two model-specific 40K `LastStepBalanced` datasets and four raw variants described as 10K train, 360 validation, and 360 test records. These artifacts are not interchangeable: dataset cards reference a previous paper version, and their exact alignment with ACL Table 1 remains partial.

## 3. What is the verifier / reward / judge / environment?

- Formal-logic verifier: Z3 first-order-logic checking.
- Theorem-proving verifier: Isabelle/HOL.
- Native output: a binary correct/incorrect label for the target formal step.
- Learned PRM output: probabilities or normalized logits for correct and incorrect tokens, used as a step-level score.
- Intended uses: process reward modeling, process supervision, evaluation, and Best-of-K selection.

For Isabelle examples, syntax is first checked with `sorry` placeholders. Each target step is then verified while other proof steps are replaced by `sorry`. This isolates the step for scalable labeling, but weakens guarantees about full dependency chains, local scopes, and whether the complete proof works without placeholders.

A positive label means that Z3 derives the conclusion under the wrapper's premises and prior results, or Isabelle accepts the target step in the generated theorem environment. It does not necessarily mean that the natural-language problem was formalized faithfully, the full proof is valid without `sorry`, the wrapper supplied the intended dependencies, or parser, tactic, timeout, and environment failures were handled correctly.

Potential false positives include a provable but mistranslated Isabelle statement, omitted constraints, hidden dependencies under `sorry`, or overly generous wrapper context. Potential false negatives include unsupported syntax, missing imports, excluded proof patterns such as contradiction, timeouts, and malformed formalization. Exact prover versions, timeout policies, imports, and failure mappings are not reported.

## 4. How is the data constructed?

1. Source formal-logic problems from FLDx2 and exclude `assump`-style proof by contradiction.
2. Source formal mathematics from GSM8K, MetaMathQA, and Big-Math.
3. Use Llama 3.1 8B and Qwen 2.5 7B for formal-logic traces, and Qwen 2.5 7B for Isabelle-compatible statements and proofs.
4. Use few-shot prompts to elicit verifier-compatible formal solutions and retry until syntactically valid material is obtained.
5. Check individual formal steps with Z3 or Isabelle wrappers.
6. Retain syntactically valid but logically incorrect steps with false labels; filter syntactically invalid generations.
7. Arrange traces so the final supervised step has balanced labels.
8. Train PRMs from conversation-form records.

Training uses full-parameter LLaMA-Factory, `mask_history=true`, one epoch, cutoff 2,048, AdamW, DeepSpeed ZeRO-3, and loss only on the final balanced label. Production temperature, rollout and retry counts, acceptance rates, prover runtime, timeout policy, failed-job handling, and exact final-paper revisions remain `unknown`.

## 5. How can it enter post-training?

Appropriate uses include training a PRM to predict programmatic step-validity, scoring intermediate formal reasoning steps, Best-of-K selection, comparing programmatic supervision with human or rollout labels, and studying transfer from formal to informal mathematical reasoning.

Reuse must preserve whether a label came from Z3 or Isabelle, the source dataset, generator model, wrapper, and release variant. Formal acceptance must not be equated with faithful solution of the source problem. Invalid-format generations are not known logical negatives, and intermediate labels should not be assumed to share the final-step class balance.

`test_time_compute` refers to using the trained PRM for Best-of-K scoring; the training records are not themselves an inference-time search method.

## 6. What should readers audit?

- Which exact HF dataset and commit correspond to the final ACL experiments?
- How do ACL Table 1, the two 40K balanced datasets, and four raw releases map together?
- Which Z3 and Isabelle versions, imports, tactics, timeouts, and configurations were used?
- Can a false label be distinguished from parser, type, tactic, dependency, timeout, or infrastructure failure?
- Are raw prover logs and structured error categories retained?
- How often does formalization change the meaning of the original problem?
- Does replacing surrounding steps with `sorry` change the target step's validity?
- Are intermediate steps balanced or calibrated, or only the last supervised label?
- What fraction of traces is rejected for invalid syntax, and how many retries are required?
- Are rejected attempts and rejection reasons available?
- Are train/evaluation overlaps measured across FLDx2, GSM8K, MetaMathQA, Big-Math, Orca-Math, and BBH?
- Are upstream-source licenses compatible with the release?
- Do formal-to-informal gains hold across model families and benchmarks at equal Best-of-K budgets?

## 7. What is missing or risky?

- Exact final-paper dataset revisions are not identified, and dataset cards refer to a previous paper version.
- Release variants differ from the mixture reported in ACL Table 1.
- Invalid attempts, retries, acceptance rates, production decoding, construction budget, timeout and failure handling, and raw prover logs are undisclosed.
- Generated Isabelle statements may misformalize source problems.
- Independent-step checking with `sorry` can miss dependency, composition, and scoping errors.
- Excluding proof-by-contradiction narrows the logic distribution.
- Only the final target label is balanced and used for loss; intermediate calibration is unknown.
- Decontamination and source/evaluation overlap analysis are unknown.
- Informal transfer evidence is limited and not uniformly positive.
- Upstream license compatibility is not discussed in detail.
- PRM scores may reward wrapper compatibility rather than broadly valid mathematical reasoning.

## 8. Why it matters for post-training reasoning data

FoVer demonstrates a low-LLM-call route to process supervision: generate formal traces, execute a symbolic verifier at each step, retain accepted and rejected steps, and train a PRM from the labels.

It also exposes an essential audit lesson: stronger verifiers move errors rather than eliminating them. Formal-verifier labels can fail through incorrect formalization, incomplete environments, brittle wrappers, hidden timeouts, or placeholder-based checking. A reusable verifier card must document both the native checker and the machinery that translates model output into checker input.

## 9. Links and citation

- ACL Anthology: [https://aclanthology.org/2026.findings-acl.403/](https://aclanthology.org/2026.findings-acl.403/)
- arXiv: [https://arxiv.org/abs/2505.15960](https://arxiv.org/abs/2505.15960)
- Official code: [https://github.com/psunlpgroup/FoVer](https://github.com/psunlpgroup/FoVer)
- Official project: [https://fover-prm.github.io/](https://fover-prm.github.io/)
- Official dataset: [https://huggingface.co/datasets/ryokamoi/FoVer-FormalLogic-FormalProof-Qwen-2.5-7B-LastStepBalanced-40k](https://huggingface.co/datasets/ryokamoi/FoVer-FormalLogic-FormalProof-Qwen-2.5-7B-LastStepBalanced-40k)
- Official collection: [https://huggingface.co/collections/ryokamoi/fover](https://huggingface.co/collections/ryokamoi/fover)
- DOI: [https://doi.org/10.18653/v1/2026.findings-acl.403](https://doi.org/10.18653/v1/2026.findings-acl.403)
- BibTeX: [https://aclanthology.org/2026.findings-acl.403.bib](https://aclanthology.org/2026.findings-acl.403.bib)

Ryo Kamoi, Yusen Zhang, Nan Zhang, Sarkar Snigdha Sarathi Das, Ranran Haoran Zhang, Wenpeng Yin, and Rui Zhang. 2026. "Efficient PRM Training Data Synthesis via Formal Verification." Findings of ACL 2026.

- Data ID: `fover-2026`
- Citation status: verified
- Confidence: medium
- Release status: partial
