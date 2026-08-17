Open-ended LLM outputs cannot be evaluated reliably by lexical metrics, while human judging is costly and GPT-4 API judging is hard to reproduce and can expose submitted data. Existing open judge models also inherit position, missing-knowledge, and prompt-format biases.

JudgeLM builds a locally deployable judge from GPT-4-supervised answer-pair records. It supplies a training set and validation benchmark, then tests interventions intended to make the resulting judge usable with or without a reference answer.
