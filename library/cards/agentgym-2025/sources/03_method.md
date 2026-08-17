Step 1 -- Standardize interactive environments.
Input: Fourteen environments with incompatible dependencies, actions, and rewards.
Operation: Deploy each as a service behind create, reset, observation, available-action, and step interfaces.
Output and transition: Reproducible environment endpoints enter instruction collection.
Check / stop rule: Each service must reset, expose legal actions, execute a step, and return an observation or reward.

Step 2 -- Build instruction and evaluation pools.
Input: Original task splits, rule generators, and examples for model-based expansion.
Operation: Gather or generate 20,494 instructions, manually verify model-generated tasks, and reserve 1,160 cases for AgentEval.
Output and transition: Feasible training instructions enter trajectory collection.
Check / stop rule: Reject generated instructions that cannot be completed in the target environment.

Step 3 -- Gather and filter demonstrations.
Input: Instructions, rule/human action sequences, GPT-4-Turbo, crowdsourcing, and live environments.
Operation: Add stepwise thoughts to known paths or explore unknown paths, execute every episode, and filter by reward and correctness.
Output and transition: 14,485 AgentTraj-L episodes from 11 environments enter SFT.
Check / stop rule: Retain only trajectories meeting the environment-specific success or reward condition.

Step 4 -- Supervise and compare agents.
Input: Llama-2-Chat-7B and either 6,130 AgentTraj or 14,485 AgentTraj-L demonstrations.
Operation: Run three-epoch trajectory SFT and evaluate all supported AgentEval environments.
Output and transition: Comparable base agents and a trajectory-scale comparison.
Check / stop rule: Report every environment metric; do not collapse incompatible rewards into an unexplained universal label.

Reproduction requires pinned environment images, seeds, instruction generators, teacher versions, crowdsourcing protocol, reward code, train/eval splits, dataset revision, and SFT settings. A complete collection-cost ledger is missing.
