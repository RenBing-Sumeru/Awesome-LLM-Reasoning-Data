1. Inputs: sampled MMLU test questions, original choices and answer keys, subject metadata, and annotator guidelines.
2. Pipeline: inspect each item, determine whether the original key and question are valid, assign a corrected answer or defect label where applicable, and analyze how corrected labels change model evaluation.
3. Outputs: a 5,700-question manually re-annotated subset in the official release, row-level error decisions, and aggregate estimates of MMLU error prevalence and score impact.
4. Feedback contract: human adjudication for item validity and answer correctness; original MMLU exact-match scoring for comparing model results before and after corrections.
5. Reproducibility notes: pin MMLU-Redux version, original MMLU package, sampling frame, annotator protocol, error taxonomy, model-score recomputation script, and license. The public HF dataset card lists CC-BY-4.0.
