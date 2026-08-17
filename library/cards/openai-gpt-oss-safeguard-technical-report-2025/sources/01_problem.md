Frontier safety releases can make inference behavior and model availability visible while leaving the post-training data and feedback pipeline non-auditable. Open weights do not by themselves disclose the policy-labelling records, human judgments, rewards, selection decisions, data rights, or evaluation controls that produced a safety classifier.

gpt-oss-safeguard is a concrete disclosure-boundary case. OpenAI releases weights for two policy-reasoning models and reports safety evaluations, but the official sources do not provide the training-record corpus or a reproducible post-training recipe. This Card records what the report supports and what it leaves unknown; it does not represent the release as a reusable safety-data resource.

