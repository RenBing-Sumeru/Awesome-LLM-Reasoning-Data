Agents often perform well on the environments used for policy training yet fail when an unseen task requires a different action policy. Directly diversifying policy fine-tuning can overfit those environments, leaving test-time selection unreliable.

AgentRM addresses that failure by learning a general process reward model from agent search trajectories and using it to rank or expand actions at inference time. It is an audit-relevant reward-reliability study: the output is a learned selection signal for agent behavior, not a benchmark-contamination detector.
- Concrete problem: what research or engineering gap the paper is trying to close.
- Why it matters for this atlas: which reasoning-data, verifier, reward, environment, benchmark, or audit question it clarifies.
- Data object / evaluation surface: what one sample, episode, task, trace, or benchmark instance contains.
- L4 collection note: what official source and local card evidence make it ready to include without another topic-approval round.
