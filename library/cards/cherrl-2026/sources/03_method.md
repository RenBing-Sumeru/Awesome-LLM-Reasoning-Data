1. An ordinary LLM judge scores prompt, response, and rubric; a second judge detects one target bias. CHERRL adds its Boolean bonus with weight 0.5.

2. Qwen3-4B is trained with GRPO on HealthBench or VerInstruct under lexical, format, tone, or self-praise bias. Each run retains responses, biased/unbiased scores, and a shortcut detector.

3. It smooths the reward gap and high-score shortcut frequency, sweeps 12 threshold pairs, and takes the modal joint-emergence step as reference onset.

4. RHDA sees only a sanitized mirror of step, prompt, response, visible score, and rubric; inspect, analyze, compute, and reason tools produce an evidence-backed alert.

Reproduction requires the code, judge prompts, bias rules, rollout logs, Qwen3-4B/GRPO configuration, dataset versions, and threshold protocol. Compute budget and judge-service details are not fully disclosed.
