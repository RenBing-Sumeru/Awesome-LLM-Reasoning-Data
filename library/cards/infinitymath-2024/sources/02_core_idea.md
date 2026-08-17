InfinityMath turns a solved numerical problem into a generic problem, a reusable function-style program, variable constraints, and checked original/generated answers. Unlike free-form question rewriting, the released supervision object exposes the invariant computation that should survive numeric changes; unlike an outcome-only set, it includes the program trace consumed by SFT, so instruction, demonstration, and rationale data is the primary category.

Google Scholar citations: 22（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=InfinityMath%3A+A+Scalable+Instruction+Tuning+Dataset+in+Programmatic+Mathematical+Reasoning&author=Bo-Wen+Zhang&hl=en）

Open dataset: yes, anonymously readable and inspected.
Dataset name: InfinityMATH.
Official URL: https://huggingface.co/datasets/BAAI/InfinityMATH.
Scale: 101,380 retained records from seven source datasets.
Record form: source problem, number-independent problem, executable commented program, variable map or constraints, and original/generated answers.
File / storage format: one UTF-8 JSONL file with eight top-level fields.
Domains / languages: English grade-school, competition, algebraic, quantitative, and theorem-based mathematics.
Construction and filtering: mask numbers, synthesize a generic function program, execute against the known answer, minimally repair once after failure, then retain answer-matching records.
License / access constraints: Apache-2.0 in current dataset metadata; upstream source and generated-output terms still need lineage review.
Intended use: SFT for programmatic mathematical reasoning, numeric robustness studies, and programmatic template expansion.
