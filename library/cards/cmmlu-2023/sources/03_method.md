1. Inputs: subject-specific CSV files containing Chinese questions, four answer choices, and one correct label.
2. Pipeline: load subject data, optionally preprocess prompts with the official direct-answer or chain-of-thought prompt utilities, run a model in zero-shot or few-shot settings, parse the answer option, and aggregate accuracy.
3. Outputs: per-subject and average accuracy grouped by STEM, humanities, social science, other, and China-specific categories in leaderboard-style reports.
4. Feedback: the verifier is the answer key and exact option-level scoring; no human or LLM judge is needed for standard evaluation.
5. Reproducibility: pin dataset commit, subject list, prompt language, few-shot examples, CoT/direct-answer mode, answer parser, harness version, and model date. Public answer keys create contamination risk.
