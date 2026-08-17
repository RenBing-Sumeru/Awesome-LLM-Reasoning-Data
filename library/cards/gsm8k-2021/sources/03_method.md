Inputs are the task materials and metadata needed to form one record: 8,792 word problems with natural-language solutions and final numeric answers, split into 7,473 train and 1,319 test examples.

Pipeline: Prompt or train models to produce solutions; extract final answers; score by exact match; train verifier models on generated solutions; use verifier scores to select among sampled solutions.

Outputs are scored benchmark records or evaluation summaries under this contract: final-answer exact match after answer extraction; verifier models are trained and evaluated as selection signals. Reuse must pin source version, split, scorer or judge version, prompt/scaffold policy, runtime environment where relevant, and artifact license.
