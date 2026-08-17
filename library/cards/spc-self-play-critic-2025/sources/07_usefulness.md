For the `data_construction_open_release_recipes` track, SPC is useful as an auditable recipe for turning source solutions into process-supervision data. It identifies the source pool, teachers, two learned roles, corruption taxonomy, solver-impact filter, game rewards, sampling mixture, per-round counts, balancing intervention, optimization scaffold, and downstream evaluation. That makes it possible to separate the reusable construction logic from the reported checkpoint results.

The recipe can inform several workflows:

- build step-level SFT data with critique text plus explicit correctness conclusions;
- construct same-prefix correct/corrupted counterfactuals for process-verifier training;
- use outcome-checked adversarial examples as positive and negative offline-RL data;
- study opponent matching and co-adaptation in self-play data curricula;
- audit whether a critic depends on error-type templates, Answer tags, or class balancing;
- run stepwise test-time search in which rejected steps are regenerated before a trajectory continues.

Adopters should retain the method’s boundaries. “No additional human annotations” describes later-round generation, while initialization still uses PRM800K human labels and proprietary teacher models. Reproduction also requires replacing or obtaining the inaccessible SharePoint data, choosing missing sampling parameters, and establishing licenses. The round-2 checkpoint can support evaluation experiments, but its benchmark scores should not be used as a proxy for the quality or legal usability of the underlying records.
