AutoPSV trains an answer-level verifier and uses changes in its confidence across reasoning steps to generate process-level annotations automatically.

For rollout/search data, the key point is that multiple generated outputs and their intermediate steps become a candidate-selection surface: the verifier is used to choose better answers and to label reasoning progress without manual step labels.

- Year / venue: 2024 · NeurIPS.
- Author affiliations: The University of Hong Kong; The Chinese University of Hong Kong; University of Cambridge; University of Edinburgh; City University of Hong Kong.
- Atlas role: process_supervision, verifier_reward, construction_recipe.
- Domains: math, commonsense, reasoning.
- Current status: verified.
- Why it belongs: AutoPSV is a representative automatic process-labeling recipe that turns answer-level verification into step-level process supervision.
