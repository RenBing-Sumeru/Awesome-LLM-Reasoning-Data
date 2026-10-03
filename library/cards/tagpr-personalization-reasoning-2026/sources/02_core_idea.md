The policy learns to express personalization reasoning through nine semantic tags derived from exploratory annotations and K-means consolidation. Approximately 2,000 retained tagged examples initialize the syntax through SFT.

Guided RL combines a tag-structure reward, a learned Personalization Reward Model with User Embeddings (PRMU), and foundation rewards. PRMU produces one scalar for an entire profile-conditioned response. A later exploratory RL phase removes the tag and PRMU rewards and continues with foundation rewards.

The feedback contract is mixed: tag and output-format checks are programmatic; teacher judging and learned preference scoring require model judgment. Tag compliance should be interpreted as structural compliance, not as proof that each step is semantically correct.

Primary-source locations: Sections 3.2–3.3; Figures 2–3.
