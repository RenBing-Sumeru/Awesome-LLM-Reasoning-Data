1. **Mathematical RLVR:** Construct rule rewards from problem and answer, sample by llama8b_solve_rate, and report answer-parser failures and the mixture weight of each source.

2. **Data-recipe experiments:** With the same base model, rollout budget, and training steps, compare original sources, Big-Math-Reformulated, and difficulty buckets to separate scale effects from reformulation effects.

3. **Audit baseline:** Reuse the released filters for deduplication, contamination, question type, and answer-format checks. Do not apply the same acceptance contract unchanged to proof tasks or problems with multiple valid answers.
