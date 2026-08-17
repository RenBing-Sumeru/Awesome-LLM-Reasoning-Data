The paper reports 2,457 questions across the LAB-Bench categories, and the official dataset card describes 8 broad categories and 30 narrower subtasks. The data card also states that the public repository contains about 80% of the full dataset while retaining a 20% private test subset and a canary string for contamination filtering.

The instance-level evidence is the question, candidate answers, and official target answer; for generated sequence/database tasks, additional evidence comes from the construction scripts or source databases disclosed in the paper. Aggregate model scores are evidence about the authors' prompting and scoring setup, not a proof of biological competence outside the benchmark.

The evidence boundary is versioned: the official data card records a FigQA swap on 2024-08-19 and a SeqQA restriction-enzyme fix on 2025-02-18. Reuse should cite the revision and not mix preprint numbers with later dataset snapshots.
