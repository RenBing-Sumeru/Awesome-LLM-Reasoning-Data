Self-play preference optimization usually focuses on how to select responses, while every prompt is treated as equally suitable for producing DPO data. Difficult prompts can yield weak or unreliable preference pairs even after reward-model ranking.

The paper asks which prompts should be allowed to consume self-play sampling and preference-optimization budget. It treats low mean reward across sampled responses as a model-relative difficulty signal.
