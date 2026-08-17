One-sentence contribution: SWE-Gym converts real Python repository tasks into an open training environment for software engineering agents and verifiers, then shows that trajectories from this environment can improve open-weight SWE agents.

The core mechanism is to build executable task instances with tests, sample agent-environment interaction trajectories, fine-tune agents on successful or filtered trajectories, and train verifiers that select promising solutions at inference time. The official README highlights both OpenHands and MoatlessTools experiments.

The data object is richer than a benchmark row. It includes a task, repository state, runtime environment, tests, actions or generated patches, execution feedback, terminal success labels, and trajectory-level metadata. The feedback contract can be used for supervised fine-tuning, rejection-sampling fine-tuning, verifier training, and best-of-N selection.

Category rationale: SWE-Gym belongs in environment/trajectory data and also touches benchmark/evaluation surfaces. Closest comparisons include SWE-bench Lite/Verified as downstream tests, SWE-smith as scaling-oriented SWE data construction, and agent scaffolds that produce executable repair trajectories.
