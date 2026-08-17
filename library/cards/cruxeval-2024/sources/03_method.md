1. Inputs: short Python functions, generated or curated inputs, and reference outputs computed by execution.
2. Task formation: create two prompts per function family when possible: predict the output for a given input, or provide an input that yields a given output.
3. Filtering: keep examples whose execution is deterministic enough for answer-level evaluation and whose I/O format can be compared by the official harness.
4. Outputs: model answers for input or output prediction, plus pass/fail or pass@k metrics.
5. Feedback contract: Python execution and reference I/O determine acceptance; no extra reward model or LLM judge is part of the core benchmark.
6. Reproducibility notes: pin Python version, serialization rules for inputs and outputs, prompt template, answer parser, sampling count, timeout policy, and dataset revision.
