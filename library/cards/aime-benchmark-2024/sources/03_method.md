1. Inputs: selected AIME year/exam, contest problem statement, and official integer answer. 
2. Evaluation: the harness formats each problem as a math prompt, collects one or more model completions, extracts the final integer, normalizes formatting, and compares it to the answer key. 
3. Outputs: number correct and percentage score over the pinned set, usually 15 items for one exam or 30 items if AIME I and II are both included. 
4. Verifier: exact match to the official answer; no theorem prover, proof checker, or human solution-quality judge is part of the basic contract. 
5. Reproducibility boundary: record source URL, problem text version, answer key, prompt, sampling temperature, attempts per problem, answer-extraction rule, model checkpoint/date, and whether solutions or worked examples were exposed.
