The method begins with a small seed set to train a model that maps a response-like document to an instruction. It applies that model to a web corpus, then uses a separate instruction-following evaluator to assess the resulting instruction-document examples and filter weak pairs.

The retained pairs fine-tune a stronger LLaMA model. The paper repeats this process for two iterations, so later data labeling and curation are performed by an improved model rather than by the original seed system.
