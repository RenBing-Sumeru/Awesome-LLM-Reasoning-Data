Correctness is only relative to the expert annotation schema and IoU/class matching rule. A model can score well while still being unusable for real phone control if it misses action affordances, dynamic state, accessibility semantics, or app-specific consequences that are not represented in the element taxonomy.

The dataset is static iOS screenshot data, not a live interaction environment. It does not supply multi-step trajectories, user goals, executable actions, terminal success predicates, or reward traces. The paper does not disclose a hidden split, a stable evaluator-code commit, API serving dates, or complete redistribution terms for commercial app screenshots; downstream training use needs artifact-level license review.

The reported API-model results are fragile because closed-source model backends can change, and the paper's exact prompts, schema, evaluator implementation, and API dates must be pinned for score reuse. The public artifact does not by itself guarantee hidden-test protection; contamination is plausible because screenshots and annotations are public.

Do not read the benchmark as proving general mobile-agent competence. It measures element extraction from screenshots under a fixed schema.
