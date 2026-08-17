Goedel-Prover treats formal statements and compiler-valid whole proofs as a growing supervision pool: two formalizers increase statement-style diversity, a model judge screens semantic faithfulness, Lean supplies the hard proof predicate, and each SFT prover discovers positives for the next round. The closest comparison is outcome-only theorem proving, but the public artifacts serialize statements and complete proof demonstrations for training, so instruction, demonstration, and rationale data is the primary category.

Google Scholar citations: 135（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Goedel-Prover%3A+A+Frontier+Model+for+Open-Source+Automated+Theorem+Proving&author=Yong+Lin&hl=en）

Open dataset: yes, two official ungated datasets were anonymously read.
Dataset name: Goedel-Pset-v1 and Lean-workbook-proofs.
Official URL: https://huggingface.co/datasets/Goedel-LM/Goedel-Pset-v1 and https://huggingface.co/datasets/Goedel-LM/Lean-workbook-proofs.
Scale: 1.64M formal statements in four shards; 29,750 complete Lean Workbook proofs.
Record form: informal/formal statement pairs keyed by problem_id, and separate problem_id/full_proof records.
File / storage format: Parquet train files with three-column statement and two-column proof schemas.
Domains / languages: English informal mathematics and Lean 4 formal mathematics across olympiad, school, and undergraduate topics.
Construction and filtering: dual autoformalization, Lean compilation, model-based faithfulness checks, Pass@16 whole-proof sampling, compiler verification, and eight cumulative expert iterations.
License / access constraints: no dataset license tag was present; MIT applies to code only, so source and teacher-output rights require separate review.
Intended use: SFT, verifier-backed proof-data expansion, formalization research, and theorem-prover evaluation.
