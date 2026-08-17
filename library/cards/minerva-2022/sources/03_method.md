1. Inputs: public benchmark questions from MATH, GSM8K, MMLU-STEM, and an OCW course problem set, together with prompt examples and the Minerva model checkpoint.
2. Pipeline: continue pretraining a PaLM-scale model on scientific and mathematical web/paper text; prompt the model to produce step-by-step reasoning; sample candidate solutions; aggregate or select final answers under the paper's inference settings.
3. Outputs: final-answer predictions, benchmark scores, and qualitative solution examples; rejected samples and full rollout traces are not a general released data object.
4. Feedback contract: the decisive feedback is benchmark-level final-answer scoring, multiple-choice correctness, or paper-specific grading, not a proof checker for the written derivation.
5. Reproducibility notes: pin benchmark versions, prompt format, sampling count, majority-vote policy, model size, answer normalization, and contamination controls before comparing or reusing numbers.
