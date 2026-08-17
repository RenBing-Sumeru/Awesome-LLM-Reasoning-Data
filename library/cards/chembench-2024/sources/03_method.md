1. Inputs: chemistry QA items, topic labels, model wrappers/prompters, and task-specific answer formats.
2. Pipeline: load the official benchmark, instantiate a prompter for the target LLM or multimodal model, run the benchmark across topics, score answers, and save topic reports.
3. Outputs: per-topic and aggregate evaluation records with model answers and scores.
4. Feedback: the verifier is the ChemBench evaluation package using answer keys or metric code; human chemist performance is a comparison baseline, not the online scorer.
5. Reproducibility: pin the package/data release, Hugging Face dataset version if used, prompt builder, model endpoint, temperature, dependency versions, and report date. The benchmark is evaluation-only; converting it into training reward requires a separate license, leakage, and answer-key audit.
