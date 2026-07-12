Defines process reward as prover-measured progress and trains Process Advantage Verifiers for more efficient search and online RL.

Collect prover rollouts from adjacent reasoning states, estimate before/after success, form process-advantage labels, train PAVs, and use dense scores in beam search or online RL. The feedback contract is: progress is the change in future success probability before and after a step under a prover policy distinct from the base policy. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.
