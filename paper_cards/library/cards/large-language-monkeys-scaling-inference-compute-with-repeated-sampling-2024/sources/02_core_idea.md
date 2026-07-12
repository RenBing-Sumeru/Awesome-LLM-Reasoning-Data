Studies repeated sampling as an inference-compute scaling axis across math, code, formal proof, and SWE-bench-style tasks.

language models sampled repeatedly at positive temperature; SWE-bench samples are full agent attempts. The feedback contract is: automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection. The terminal condition is: at least one sampled candidate passes the task verifier, or a selected candidate matches the benchmark answer.
