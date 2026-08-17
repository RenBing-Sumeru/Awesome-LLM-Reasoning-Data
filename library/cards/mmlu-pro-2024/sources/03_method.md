1. Inputs: candidate MMLU-style questions, subject/category labels, answer options, model prompts, and model outputs.
2. Pipeline: clean and filter the question pool, expand each item to ten answer options, organize questions into 14 categories, run models with the official evaluation prompts, and normalize selected options for scoring.
3. Outputs: per-item correctness, category scores, average benchmark score, and optional leaderboard reports tied to a model snapshot and prompt policy.
4. Feedback contract: exact match with the released answer key; the official benchmark is evaluation-only and does not provide a training reward, preference label, or process-supervision trace.
5. Reproducibility notes: pin Hugging Face dataset revision, GitHub evaluator revision, prompt style, model checkpoint, decoding rule, answer extraction, and whether the comparison is against original MMLU or MMLU-Pro. The HF dataset card lists the dataset license as MIT.
