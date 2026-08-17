Inputs are olympiad-level math problems, reference answers or worked solutions, subdomain labels, difficulty labels, model prompts, and model-generated answers. The paper treats the benchmark as evaluation-only; there is no single base model, optimizer, reward model training loop, or RL rollout recipe to reproduce.

Pipeline:
1. Curate hard math problems and normalize them into benchmark records with category and difficulty metadata.
2. Run evaluated models with a specified prompt/scaffold policy and collect final answers.
3. Score answers by rule-based checking where the answer format allows it, or by Omni-Judge where free-form equivalence must be judged.
4. Report aggregate accuracy by model, subdomain, and difficulty, while keeping item-level correctness as the decisive feedback unit.

Outputs are benchmark records, model-level scores, category/difficulty breakdowns, and a released judge artifact. Reuse requires pinning the dataset revision, judge revision, prompt template, answer extraction rules, model sampling settings, and whether a comparison used public examples, held-out examples, or a leaderboard snapshot.
