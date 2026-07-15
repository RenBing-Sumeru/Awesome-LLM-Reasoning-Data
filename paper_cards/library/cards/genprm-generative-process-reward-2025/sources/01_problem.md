Scalar process reward models can label a reasoning step without explaining the judgment, and their fixed score is hard to improve with extra test-time computation. Fine-grained labels are expensive, while a fluent explanation is not itself proof that a step is valid.

GenPRM asks how to create inspectable process supervision from limited math data and let a verifier continue reasoning at inference time. It makes the reward model generate an analysis and, when applicable, code-based checks before it issues a step judgment.
