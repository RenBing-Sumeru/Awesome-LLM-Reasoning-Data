The authors distill Gemini Thinking traces for 1,000 selected problems and fine-tune Qwen2.5-32B-Instruct. During inference, they vary a token budget by forcing an early stop or extending generation after the model attempts to finish, then measure accuracy across reasoning benchmarks.

Reproduction requires the s1K revision, training hyperparameters, special-token handling, prompt format, minimum and maximum budget, context limit, and each benchmark split. Token length alone is not enough to specify budget forcing.
