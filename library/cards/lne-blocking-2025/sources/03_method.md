1. Estimate contamination. For model M and prompt x, run greedy decoding once and compute length-normalized entropy from token distributions; lower LNE is treated as stronger memorization.

2. Choose disruption strength. Map LNE to Cnt(M,x), the number of Blocking operations, using a task-specific threshold. Different prompts receive different intervention strengths.

3. Disrupt decoding. During a second greedy generation, suppress the highest-probability token at selected positions to elicit a non-memorized alternative response.

4. Score the result. Apply the ordinary task metric to that response and use it as the mitigated estimate. The paper evaluates code generation, arithmetic reasoning, and appendix summarization; it does not train a new model.

Reproduction requires prompts, checkpoints, LNE computation, task threshold, decoding code, and metric. Threshold selection is task-specific; full pretraining contamination and unreported sampling details are unknown.
