AgentQuest is useful as a recipe for agent-evaluation schema design. A downstream atlas entry can borrow its separation between benchmark driver, action, observation/state, terminal outcome, progress metric, and repetition metric.

When reusing it, preserve at least the task id, benchmark module, driver version, agent/scaffold prompt, action sequence, observations, terminal predicate, progress score, repetition score, run budget, and dependency or API version. These fields make it possible to distinguish "failed immediately," "made partial progress," and "looped under the same environment state."

For the atlas, the card is valuable because it turns agent evaluation from a final leaderboard row into a trajectory-level audit question: what did the agent try, what feedback did it receive, and where did progress stop?
