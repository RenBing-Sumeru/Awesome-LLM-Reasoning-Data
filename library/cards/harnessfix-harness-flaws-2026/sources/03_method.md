1. Inputs: failed trajectories from the four target benchmarks, including task text, actions, observations, environment feedback, and terminal score or error.
2. Representation: convert each trajectory into HTIR so that task, state, action, observation, evaluator, and failure evidence are separated rather than left as a flat log.
3. Diagnosis: classify candidate harness flaws such as environment setup, missing dependency, unclear task specification, evaluator mismatch, or oracle/ground-truth problems.
4. Repair: apply benchmark-specific repair operators and rerun or re-evaluate affected cases where the benchmark permits it.
5. Outputs: flaw records, repaired harness artifacts or patches, and before/after validation results.

The verifier is the benchmark environment and scoring rule after repair, with human/LLM-assisted diagnosis used only as an intermediate signal. Reproducibility requires pinning the GitHub revision, benchmark versions, environment images, API/tool credentials, model rollouts used to obtain failures, and timeout policies.
