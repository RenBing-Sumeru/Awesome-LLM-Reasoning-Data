- Environment unit to inspect: task worker session with prompts, Function Calling tool actions, observations, reward history and terminal signal.
- Task and source boundary to verify: ALFWorld/WebShop direct inputs; OS/KG/DB Self-Instruct with o3 and Claude Sonnet 4; BIRD augmentation only for DB.
- Feedback contract to verify: normalized environmental rewards, binary whole-trajectory correctness, and minus 0.2 for budget overruns or abnormal termination.
- Reuse gate before relying on results: paper-era container/data/split hashes, synthetic-input provenance, rollout and evaluator logs, queue/policy-version state, and a contamination audit.

