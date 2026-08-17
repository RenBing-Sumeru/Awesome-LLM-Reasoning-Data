Claim: reasoning-oriented post-training can improve answering while making models less willing to abstain.

Setup: the authors evaluate 20 frontier models over 20 datasets, including DeepSeek-R1-Distill-Llama-70B against Llama-3.3-70B-Instruct and s1.1 against Qwen2.5-32B.

Result: reasoning fine-tuning lowers abstention by 24% on average, including on math and science tasks; raising the reasoning-token budget generally worsens abstention further.

Boundary: this is behavior under this benchmark, prompt, and LLM-judge protocol, not a direct measurement of a model's internal uncertainty.
