Read the benchmark design before the leaderboard. The central object is an executed trajectory with environment feedback; aggregate score is a summary over many such trajectories. Keep model capability, scaffold design, parser robustness, and environment implementation separate when interpreting failures.

The important boundary is that AgentBench evaluates agents in packaged environments. It does not certify general real-world tool reliability, and it does not turn public benchmark traces into uncontaminated training data.
