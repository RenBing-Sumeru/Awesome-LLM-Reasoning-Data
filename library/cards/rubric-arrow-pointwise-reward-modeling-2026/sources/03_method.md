1. **Construct judge-SFT data:** Instructions, candidate outputs, and preferences are collected; atomic rubrics are generated and candidates receive criterion-level satisfaction and aggregate scores.


2. **Train initial components:** SFT initialises the rubric generator and rubric-conditioned pointwise judge to produce criteria and probabilistic scores.


3. **Alternate GRPO:** One component is fixed while the other is optimised: rubric rewards favour criteria that distinguish preferences, and judge rewards favour pointwise rankings consistent with pairwise winners.


4. **Train downstream policies:** The probability-aggregated reward supports rejection sampling or RL post-training. Reproduction requires fixed preference data, rubric count, aggregation, and alternation schedule.
