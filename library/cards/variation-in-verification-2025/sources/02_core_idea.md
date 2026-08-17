The study separates true-positive rate (accepting correct responses) from true-negative rate (rejecting incorrect responses) and measures both along three axes: problem difficulty, generator generation capability, and verifier generation capability. Difficulty is estimated from average generator pass rate; the same models' direct problem-solving pass rates proxy generation capability.

Its TTS analysis filters sampled candidates with a verifier and reports conditional pass rate: the correctness fraction among retained responses, with fallback to the original generator pass rate when all responses are rejected. This is the expected accuracy of uniformly drawing from the retained pool, not Best-of-N selection.

The released data makes the design auditable. `LLMVerify-Generator` contains candidate CoTs and response labels; `LLMVerify-Verifier` contains verifier CoTs and verdicts. The keys `(model, dataset_source, dataset_idx, response_idx)` connect the two.
