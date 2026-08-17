1. Inputs: legal prompts or contexts in Chinese, task metadata, and official target answers for legal memorization, understanding, or application tasks.
2. Pipeline: curate tasks, provide standardized prompt templates, run models through OpenCompass-compatible evaluation scripts, parse model outputs, and compute task metrics.
3. Outputs: model responses, per-task scores, and aggregate comparisons across the three cognitive levels.
4. Feedback: the evaluator gives correctness or metric scores against the official answer; it does not verify that the model's reasoning would be accepted by a court or lawyer.
5. Reproducibility: pin the GitHub commit, data directory version, OpenCompass environment, prompt template, answer parser, model decoding settings, and whether few-shot examples or retrieval were used.

This Card treats LawBench as evaluation-only. Turning its items into training data or preference labels would change the feedback contract and create benchmark-contamination risk.
