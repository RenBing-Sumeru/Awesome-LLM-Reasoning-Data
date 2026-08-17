- Separate 80,000 filtered prompt records from the on-policy rollout stream.
- Each reported training step uses 256 prompts x 16 rollouts, with up to 10 tool calls.
- Tool observations are environment outputs and are loss-masked.
- Terminal feedback is format -1 or word-level F1, not citation or step verification.
- Code, prompt Parquets, and a checkpoint are released; original training episodes are not verified as released.

