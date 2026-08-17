MiMo asks how much reasoning capability can be prepared during pretraining and then elicited through posttraining in a 7B model. The technical problem spans three data regimes: a 25T-token pretraining corpus intended to preserve dense reasoning patterns, distilled SFT for response and format alignment, and rule-verifiable mathematics and code problems for RL.

The audit problem is different. The report contains unusually concrete construction and reward descriptions, yet the actual pretraining documents, 500K or 6M SFT records, 130K RL tasks, code tests, verifier outputs, and policy trajectories are not released. Open weights and an inference fork therefore establish model availability, not a reusable training-data package.

For this Card, pretraining composition, SFT/distillation, RL data and feedback, open artifacts, and evaluation results are separate ledgers. A count, reward formula, checkpoint, or benchmark score in one ledger cannot fill unknown fields in another.
