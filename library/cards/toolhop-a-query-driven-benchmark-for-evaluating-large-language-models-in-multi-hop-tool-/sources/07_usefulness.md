1. **Tool-agent evaluation:** Use the official local tools to compare models or planning scaffolds on end-to-end accuracy and classify errors in selection, arguments, and aggregation.

2. **Trajectory extension:** Execute reference chains or collect failure–feedback–repair traces for SFT or RL, while keeping the original test set isolated from training.

3. **Retrieval ablation:** Hold the model fixed and vary documentation length, candidate-tool count, and retrieval modules to determine whether gains come from tool discovery rather than answer memorization.
