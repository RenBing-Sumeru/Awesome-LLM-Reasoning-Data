Language models often follow the semantic priors of pretraining when given few-shot demonstrations. On inductive tasks, a model must infer the rule connecting inputs and outputs before applying it to a new input; imitating a teacher’s final answer alone can leave that hidden rule unlearned.

The paper asks how a student can acquire this two-stage behavior from a teacher when the underlying rule is not labeled. It treats candidate hypotheses, their agreement with demonstrations, and the resulting rule-following answer as training material rather than as an unobserved inference-time trick.
