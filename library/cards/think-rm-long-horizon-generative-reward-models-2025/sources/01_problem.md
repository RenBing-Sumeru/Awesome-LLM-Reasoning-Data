Complex preference judgments may require comparing factual support, instruction following, and potential risks. A shallow reward model that outputs only an A/B decision can rely on length or wording and cannot explain why one response is preferred, making it unsuitable for stable long-horizon reward reasoning.

Think-RM uses a teacher to generate extended comparative reasoning traces, filters them by the original preference label and output format, applies SFT, and then reinforces both the reasoning process and final judgment with rule-based rewards.
