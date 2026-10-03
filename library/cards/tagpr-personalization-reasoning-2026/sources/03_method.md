Section 3.2 samples 1,000 instances from each of six LaMP training tasks. Qwen3-235B-A22B-Thinking-2507 generates 16 candidate reasoning chains per instance. An accuracy filter retains correctly answered samples, then GPT-4o judges logic, factual accuracy, completeness, and conciseness; chains scoring above 15 are kept. Exploratory GPT-4o tagging is consolidated into nine tags via K-means, followed by reannotation restricted to that vocabulary. The final SFT stage retains approximately 2,000 examples.

PRMU is initialized from Skywork-Reward-V2-Qwen3-0.6B and jointly trains reward-model parameters and user embeddings with a Bradley–Terry preference objective. Profile-Reasoning Preference (PRP) pairs favor responses generated with the profile over those without it. Personalized-Quality Preference (PQP) pairs are ranked by correctness or ROUGE. Each preference set has approximately 10,000 samples. These are constructed labels, not a claim of direct human ranking for every pair.

The tag reward checks format, tag-vocabulary membership, and a minimum count (three in Appendix A.1). GSPO trains the policy through guided and exploratory RL. The candidate count of 16 belongs to SFT construction; policy-training rollout later samples five responses. Published serialized dataset fields and downloadable artifacts are unknown.

Primary-source locations: Sections 3.2–3.3 and Appendix A.1.
