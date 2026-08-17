1. **Position:** one generic cue and a second extraction call replace task-specific CoT demonstrations.
2. **Mechanism:** generate a free-form rationale first, then ask the same model to extract the final answer; only the answer is scored.
3. **Data/artifact:** no new dataset is released; the official repository provides evaluation code for existing benchmarks.
4. **Evidence anchor:** with text-davinci-002, MultiArith moves 17.7%→78.7% and GSM8K 10.4%→40.7%, at the cost of a second call.
5. **Reuse decision:** use as an elicitation baseline or candidate-trace generator; audit step correctness before treating outputs as SFT supervision.
