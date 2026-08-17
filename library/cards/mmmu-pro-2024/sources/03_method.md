1. Inputs: candidate MMMU-style multimodal academic questions, images or diagrams, textual stems/options, subject labels, and reference answers.
2. Pipeline: identify and remove or rewrite items that can be answered from text alone; build a standard MMMU-Pro setting and a vision-only setting where direct textual cues are reduced; package items with metadata for official evaluation.
3. Outputs: versioned benchmark examples, model prompts, answer targets, and aggregate model scores for standard and vision-only subsets.
4. Verifier: the official benchmark answer key/evaluator supplies the pass/fail or accuracy signal at answer level. It does not provide step-level proof, visual-grounding certificates, or a reward model for training.
5. Reproducibility notes: pin the Hugging Face dataset revision, the official GitHub evaluator revision, prompt/scaffold policy, answer-fix date, and whether results use standard, vision-only, or corrected splits.
