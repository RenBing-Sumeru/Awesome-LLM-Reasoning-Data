1. **Positioning:** MATPO addresses role-level credit assignment for planner and worker tool trajectories in a shared model.
2. **Method handle:** Role prompts, two-level rollouts, local tool rewards, and global outcome rewards jointly update shared weights.
3. **Data handle:** About 1.487 million records contain role steps, tool arguments, format and correctness rewards, and composite rewards.
4. **Evidence anchor:** It averages 18.38% relative gain on three knowledge-intensive benchmarks and is more robust to tool noise.
5. **Reuse decision:** It fits multi-agent RL and value training; account for tool cost, reward blind spots, and role interference; also report planner success, worker tool execution, and interface failures separately; It is best for multi-agent RL, role value models, and tool-trace auditing. The main risks are shared-weight interference and tool-format shortcuts, requiring role ablations and deduplication.
