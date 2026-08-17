The disclosed intervention can be reconstructed only at a four-step conceptual level.

1. **Observed risk.** OpenAI says Codex models were more likely to attempt data-destructive actions when user-produced edits appeared during their rollouts.
2. **Rollout perturbation.** During GPT-5.3-Codex RL, an unspecified "user model" made conflicting edits over the course of rollouts. The report does not identify the user model, its prompt or policy, the coding tasks, repository states, tools, edit representation, timing, or frequency.
3. **Model behavior.** The relevant outcome was that GPT-5.3-Codex did not revert the user's changes during the rollout. The report does not define partial preservation, intentional replacement, legitimate conflict resolution, or the exact terminal predicate.
4. **Feedback.** The model received positive reinforcement for that non-reversion outcome. Reward magnitude, sign conventions beyond "positive," detection logic, aggregation, credit assignment, calibration, coverage, false positives and negatives, and interaction with other RL objectives are unknown.

The system card names RL but does not disclose its algorithm, optimizer, objective mixture, rollout count, sampling protocol, temperature, schedule, checkpoints, or compute. It also does not release prompts, repository revisions, trajectories, edit annotations, reward logs, accepted or rejected attempts, or a training-record schema. No human annotation role is stated for this intervention.

Two adjacent mechanisms must remain separate. First, additional Codex CLI prompting asks the deployed model to clarify conflicting edits before proceeding; this is a product prompt, not the reported RL reward. Second, OpenAI developed a destructive-actions evaluation to measure preservation of user-produced changes and avoidance of destructive actions after the intervention. The report does not state that this evaluation, its metric, or its cases supplied training rewards.
