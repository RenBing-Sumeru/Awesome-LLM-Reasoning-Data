Reward hacking means an agent satisfies a formal signal while violating the task's intent, but existing evaluations usually find it after the fact through human or LLM inspection. That makes cross-model, cross-environment measurement costly and unreliable.

The paper defines hack-verifiable environments: a wrapper plants specified shortcuts and deterministically flags their use. It instantiates this design as Hack-Verifiable TextArena, turning reward-hack occurrence and hack-free task success into automated evaluation outcomes.
