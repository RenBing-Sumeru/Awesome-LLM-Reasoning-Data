1. **Evaluate multi-turn SQL agents:** Run full interactions on database snapshots and report per-turn, terminal, and Pass^k metrics.

2. **Train trajectories:** Use intents, SQL, execution results, and next-turn feedback for SFT or agent RL.

3. **Execution verifier:** Reward query results and state differences while separating syntax, runtime, and semantic errors. DySQL-Bench may be excessive for static queries, and sensitive data requires sanitized copies and permission sandboxes.
