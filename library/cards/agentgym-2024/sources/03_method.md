Inputs are environment services, task instructions, available actions, observations, an LLM-agent policy, and released or collected trajectories. AgentGym standardizes interaction so that agents can run across 14 environments through a common controller rather than bespoke scripts for each task family.

Pipeline:

1. Initialize an environment/task and expose observations plus the valid or available action surface.
2. Let the agent emit thought/action steps in a ReAct-style format.
3. Step the environment, return feedback, and continue until success, failure, or maximum rounds.
4. Store trajectories with task id, environment id, observations, actions, feedback, rewards or success labels, and metadata.
5. Use the same platform for AgentEval benchmarking, AgentTraj/AgentTraj-L supervised trajectories, and AgentEvol-style training or self-improvement.

Outputs are benchmark scores, trajectory datasets, trained checkpoints, and environment-level diagnostic traces. Reproducibility requires pinning the ACL version, project/repository commit, environment server versions, task split, max-round policy, trajectory source mix, model checkpoints, sampling budget, and filtering rules.
