First, PRIME assumes a reliable response-level verifier. Mathematical exact matching and code tests judge only the final result; if an incorrect reasoning process accidentally reaches the correct answer, the complete response is still used as a positive PRM example. Token rewards therefore do not constitute human-verified step correctness.

Second, the experiments cover only English mathematical and coding tasks with deterministic answers. The method has not been established for open-ended writing, factual question answering, or subjective preferences that cannot be programmatically verified. Replacing the verifier with an LLM judge may cause judge bias to be amplified through online PRM updates.

Third, PRIME jointly uses online updating, prompt filtering, SFT initialization, and a particular advantage design, so the final gain cannot be attributed entirely to implicit rewards.
