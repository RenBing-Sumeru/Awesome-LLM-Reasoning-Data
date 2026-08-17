The framework combines source diversity with a narrow reward contract. It gathers general-purpose and math prompts, converts tasks into MCQ or open-ended templates, removes answers that are difficult to verify with simple rules, prepares alternative source/format/usefulness blends, and applies GRPO. Total reward is positive only when both answer correctness and output formatting pass. Reasoning must appear inside think tags and the final answer in a boxed answer field.

The released object is concrete: each JSONL row has data_source, a user prompt ending at the start of the think block, reward_model.ground_truth, reward_model.style=rule, and meta_data; Math additionally carries persona and skills. It does not contain the policy's completed reasoning. The method's claim is therefore about how prompt sources, answer-space constraints, and blend weights affect online RL—not that the public files are a trace dataset or that exact matching is a semantic verifier.


