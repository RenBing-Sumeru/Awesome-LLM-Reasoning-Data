Model-output membership inference for LLM pretraining data is hard to validate: known members may be mislabeled, member and non-member distributions can shift, and the small models used for controlled experiments differ sharply from deployed LLMs. This weakens contamination and privacy claims drawn from model behavior alone.

The paper instead audits a tokenizer, whose BPE vocabulary is trained on representative pretraining data and can be retrained cheaply. Given a candidate dataset and target vocabulary, it predicts set-level membership from token-level signals. This is an audit method for training-data leakage, not a benchmark of model reasoning, copyright adjudication, or a proof of a target model's complete pretraining corpus.

It remains usable when model weights, probabilities, and training logs are unavailable but the tokenizer is published for billing or compatibility.
