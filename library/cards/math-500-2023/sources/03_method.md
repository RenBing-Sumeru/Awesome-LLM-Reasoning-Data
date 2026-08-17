1. Inputs: the MATH test split, excluded PRM test examples, a random subset protocol, model responses, and reference final answers.
2. Pipeline: select 500 held-out MATH problems, run the model or verifier-guided solver, extract final answers, and grade them with the released MATH-style grader.
3. Outputs: per-problem correctness and aggregate accuracy on MATH-500.
4. Verifier: answer-level grading by the official `grader.py` logic in OpenAI's repository, subject to normalization limits.
5. Reproducibility notes: pin `math_splits/test.jsonl`, the grader commit, answer extraction policy, prompt/scaffold, decoding budget, and whether PRM reranking or majority voting is used.
