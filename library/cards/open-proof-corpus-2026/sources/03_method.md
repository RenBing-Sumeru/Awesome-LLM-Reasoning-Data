- Native verifier: qualified human mathematical-proof judges.
- Judge pool: thirteen expert human judges are recorded in the accepted metadata.
- Input: a problem, generated proof, and, when available, an official competition solution or other reference material.
- Primary output: a binary judgment of whether the complete proof is mathematically correct under the corpus grading guidelines.
- Additional outputs: written feedback, uncertainty flags, and optional sentence-level annotations identifying erroneous passages.
- Supervision granularity: answer level, step or sentence level when annotations exist, and scalar/binary reward.
- Terminal predicate: a human judge accepts or rejects the complete proof as mathematically correct.
- Quality-control mechanism: a subset receives duplicate grading; approximately 10% double grading means that most proofs retain only one human judgment.
- Reported agreement: 90.4% agreement is recorded, but nonzero disagreement remains.
- Estimated label error: the paper's reported 5% judge-error estimate depends on independence assumptions and should not be treated as a directly observed universal error rate.
- Auxiliary model assistance: O4-MINI supplies non-verdict proof summaries and issue suggestions. These are not the authoritative correctness labels, but they may still anchor human review.
- Best-of-N contract: eight O4-MINI generations are all human-graded for 60 problems. For other problems, only selected outputs may be graded, so unselected candidates must not be silently interpreted as human-rejected proofs.

The feedback contract is therefore expert judgment over natural-language proof validity. It is richer than final-answer matching but weaker than formal proof checking.
