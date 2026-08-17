1. Sample tasks. The study draws math and science items from GSM8K, GSM-PLUS, MATH, OmniMATH, ARC-Challenge, and GPQA; it selects 300 items for several datasets and 100 per category for GPQA and OmniMATH.

2. Generate candidates. GPT-3.5 or GPT-4o-mini answers the task. Gold dataset labels determine whether the student answer is right or wrong.

3. Query judges. Each evaluated model receives question and candidate answer and produces a correct/incorrect decision with rationale.

4. Rank judges. A judge wins a head-to-head match only when it agrees with gold while its comparator does not; accuracy, Student-Wrong accuracy, and Elo are reported.

5. Debate with MAJ. Deductive, logical, and robust profiles critique each other, revise, then majority-vote; ties use a tie-breaker or manual review. Temperature is 0.5 and top-k is 1.0; prompt details and complete result tables require the official appendix.
