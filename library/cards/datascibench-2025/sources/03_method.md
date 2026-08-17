1. Inputs: collected natural data-science prompts, datasets or task context, predefined task types, and aggregate functions or metrics.
2. Ground-truth pipeline: generate candidate GT with LLM-based self-consistency, then validate it with human verification.
3. TFC evaluation: map each task to a function and code-based metric rule, execute or inspect the model-produced outcome, and score it by the defined rule.
4. Outputs: model code/output, execution outcome, metric value, pass/fail or task score, and benchmark-level aggregates.
5. Feedback contract: the TFC metric and programmatic rule determine acceptance; human verification is used for GT/metric validation, not as an opaque preference judge for every output.
6. Reproducibility notes: pin dataset revision, execution environment, package versions, random seeds, metric code, answer parser, prompt/scaffold, timeout, and any human-verification protocol.
