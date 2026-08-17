Use HarnessFix as a checklist for agent benchmark audits. Preserve task ID, benchmark version, raw trajectory, environment image, evaluator revision, failure symptom, flaw category, repair operator, patch artifact, rerun result, and unresolved assumptions.

For the atlas, it is a recipe for separating agent-error data from harness-error data. It is especially useful before using failed trajectories as training data, reward data, or leaderboard evidence: the same trajectory may teach agent repair, benchmark repair, or both, and those labels must stay separate.
