1. Inputs: a long document, a list of instructions or questions, reference outputs, source-domain metadata, and a declared evaluation metric.
2. Dataset organization: the official repository separates closed-ended tasks and open-ended generation tasks, with 20 test datasets loadable from Hugging Face or the repository.
3. Prediction generation: a model reads the long input and produces answers saved as per-task JSONL prediction files.
4. Closed-ended evaluation: scripts compute exact/exam-style metrics or QA metrics where answer forms are constrained.
5. Open-ended evaluation: scripts compute n-gram metrics, LIE-adjusted metrics that control reference-length bias, LLM-judge battles with GPT-4 or GPT-3.5 against a baseline, and smaller human-evaluation subsets.
6. Reproducibility boundary: pin dataset revision, tokenizer/context budget, truncation or retrieval policy, prompt engineering flag, in-domain-data flag, model version, judge model, baseline opponent, reference length instruction, and leaderboard date.
