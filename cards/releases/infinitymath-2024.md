<!-- entry_id: infinitymath-2024 -->
<!-- card_type: releases -->
# Paper Card: InfinityMATH: A Scalable Instruction Tuning Dataset in Programmatic Mathematical Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=infinitymath-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=infinitymath-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=infinitymath-2024&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** InfinityMATH releases 101,380 executable math examples and a reusable number-masking recipe, but its answer-only checks, incomplete lineage, and current schema inconsistency limit auditability.
> **Reading priority:** Recommended
> **Paper type:** Open programmatic-mathematics dataset and construction recipe
> **Knowledge categories:** Instruction, Demonstration, and Rationale Data | Executable Code Feedback Data | Data Construction and Open Release Recipes | Training Usage and Optimization Objectives
> **Best for:** Researchers constructing or auditing scalable program-of-thought instruction-tuning data
> **Confidence:** Medium
> **Year / Venue:** 2024 | CIKM
> **Authors:** Bo-Wen Zhang, Yan Yan, Lin Li, Guang Liu
> **Institutions:** Beijing Academy of Artificial Intelligence | China University of Mining & Technology Beijing
> **Links:** [Paper](https://arxiv.org/abs/2408.07089) | [DOI](https://doi.org/10.1145/3627673.3679122) | [Venue](https://dl.acm.org/doi/10.1145/3627673.3679122) | [Data](https://huggingface.co/datasets/BAAI/InfinityMATH)

---

## 1. Problem: What question does this work address?

Program-of-thought instruction data can improve mathematical reasoning, but conventional synthesis depends on many seed problems and repeated LLM calls. Programs generated for one numerical instance may also encode brittle assumptions that fail after simple number changes. InfinityMATH asks whether a problem can instead be converted into a number-independent template that is generated once, checked by execution, and instantiated repeatedly.

## 2. Core idea: What is the main contribution?

The release turns source math problems into generalized problems with named numeric placeholders and reusable Python solution functions. Each released record links an original problem to its generalized form, generated program, variables, original answer, generated answer, source, and ID. Its native feedback contract is programmatic: reconstruct the original instance, execute the function, and compare the result with the known answer.

## 3. Method: How does it work?

The pipeline draws problems from AQuA-RAT, GSM8K, MATH, NUMGLUE, MathQA, TheoremQA, and DeepMind Mathematics. It masks numerical constants with meaningful variables, asks an LLM to produce a function-call program with a docstring and explanatory comments, and constrains the returned format for post-processing. The original variable assignments are then inserted, the program is executed in Python, and its output is compared with the source answer. When the first program fails, interpreter feedback and the correct answer can be supplied in a second-round prompt requesting a minimal repair.

For augmentation, placeholders can be replaced with numbers satisfying LLM-proposed ranges or criteria. The modified program is executed again to check that it still returns the expected result. The paper reports 101,380 successful samples across the seven sources. The exact generator snapshot, decoding settings, comparison tolerances, rejection counts, and complete repair statistics are unknown.

## 4. Evidence: Why should we believe it?

The paper fine-tunes Llama2-7B, CodeLlama-7B, and Aquila2-7B and evaluates on in-domain and out-of-domain mathematical benchmarks. It also compares scaled and unscaled subsets from GSM8K and MATH and reports improved accuracy after numeric augmentation. GSM8K+ and MATH+ test number variations, while a docstring ablation examines whether rationale-like program descriptions affect downstream performance.

The official HF repository exposes the released JSONL and the documented fields, and declares an Apache-2.0 license. This supports the existence of the artifact and the reported construction object; benchmark gains do not independently establish that every program is semantically correct or that every derived instance preserves the original problem meaning.

## 5. Novelty: What is new relative to prior work?

Instead of asking an LLM to synthesize a fresh solution for every augmented numerical problem, InfinityMATH separates the numerical assignments from a reusable solution program. The distinctive contribution is the combination of number masking, function-template synthesis, execution-based acceptance, optional interpreter-guided repair, and low-cost rule-based numeric instantiation.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Execution and final-answer agreement can accept a brittle or semantically incorrect program that happens to return the expected value. LLM-proposed numeric ranges may still create unrealistic or meaning-changing instances. The paper does not disclose decontamination, an immutable generator version, exact decoding parameters, execution tolerances, full rejection statistics, or a standalone construction-code release.

Release lineage is also incomplete: rows name a source dataset, but upstream versions and original item identifiers are not fully pinned, and the Apache-2.0 declaration does not by itself resolve compatibility with every upstream dataset license. The current HF viewer reports mixed number/string types in `ori_answer` and fails dataset generation, creating a concrete schema and loader risk. No immutable HF revision is linked to the paper's 101,380-record snapshot.

## 7. Uses: How can this work be used?

InfinityMATH can support program-of-thought SFT, controlled studies of numerical robustness, and research on reusable synthetic-data templates. For Track 8, it is a useful case study in how generator prompts, execution filters, repair loops, augmentation rules, schemas, licenses, and release revisions jointly define an open-data recipe. Auditors can use it to test whether answer-equivalent programs remain logically faithful across numeric substitutions and whether released rows retain enough upstream lineage for reuse.

## 8. Reading notes: What should readers remember?

- The primary release object is a generalized problem plus reusable Python program, not only a solved math question.
- Python execution checks outcomes; it does not validate every reasoning step or the semantics of an augmented problem.
- The reported corpus contains 101,380 successful samples from seven named math sources.
- Bug repair uses interpreter feedback and the known correct answer, but complete repair and rejection statistics are unknown.
- Reuse should pin a dataset revision, normalize field types, and audit upstream licenses and item lineage.

## 9. Citation

The following citation uses the official ACM DOI and the author/title metadata verified from the paper.

```bibtex
@inproceedings{zhang2024infinitymath,
  title = {InfinityMATH: A Scalable Instruction Tuning Dataset in Programmatic Mathematical Reasoning},
  author = {Zhang, Bo-Wen and Yan, Yan and Li, Lin and Liu, Guang},
  booktitle = {Proceedings of the 33rd ACM International Conference on Information and Knowledge Management},
  year = {2024},
  doi = {10.1145/3627673.3679122}
}
```
