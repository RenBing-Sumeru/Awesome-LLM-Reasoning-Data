1. Inputs: exam records from official/public sources, task name, question text, answer options where applicable, and a gold answer. 
2. Benchmark construction: the authors group exams into task files, release prompts and evaluation scripts, and evaluate models under zero-shot, few-shot, and chain-of-thought variants. 
3. Model output handling: the harness asks the model for an answer, extracts the predicted option or text answer, and compares it to the reference answer. 
4. Outputs: per-task accuracy and aggregate summaries; the unit of feedback is the final answer, not a verified reasoning trace. 
5. Reproducibility boundary: pin repository commit, dataset files, prompt template, decoding budget, answer-extraction rules, model version, and whether English or Chinese tasks are included in the comparison.
