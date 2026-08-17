1. **Elicit a rationale.** Input: a benchmark question, the tested LLM, and the fixed cue “Let's think step by step.” Operation: append the cue and decode a free-form rationale. Output/transition: a first-pass reasoning trace. Check/stop: no verifier scores its steps; decoding ends at the model's normal stop condition.

2. **Extract the answer.** Input: the original question and first-pass rationale. Operation: issue a second, task-aware prompt asking for an answer in the benchmark's expected form. Output/transition: a normalized final answer. Check/stop: extraction formatting determines whether an otherwise useful rationale can be scored.

3. **Evaluate the protocol.** Input: extracted answers and official answer keys for 12 reasoning datasets. Operation: apply each task's answer-matching rule and compare with standard zero-shot and few-shot baselines. Output: accuracy by task. Check/stop: only the final answer is graded; rationale faithfulness and step correctness remain unmeasured.

Reproducibility: pin model/API version, exact cue, extraction template, decoding parameters, benchmark revision, and answer normalization. The main reported text-davinci-002 results cannot be exactly reproduced if the historical API model is unavailable.
