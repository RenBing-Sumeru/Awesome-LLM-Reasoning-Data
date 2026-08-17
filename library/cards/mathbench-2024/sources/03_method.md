1. Inputs: textbooks, internet knowledge sources, educational exams or competitions, and open-source math questions, organized by stage and topic.
2. Construction: collect theoretical definitions/corollaries and practical application problems, convert suitable items into multiple-choice form, add distractors, and label each item with the hierarchical taxonomy.
3. Quality control: use a semi-automated filtering process with GPT-4 to reduce intrinsic item errors and stage-misalignment, while preserving a unique correct answer.
4. Outputs: MathBench-T, MathBench-A, released data files, official leaderboard, and OpenCompass evaluation configuration.
5. Feedback contract: chat models use zero-shot CoT on multiple-choice items and CircularEval; base models use perplexity evaluation. Official reported runs standardize max output length to 2048 and greedy decoding.
6. Reproducibility notes: pin the MathBench release, OpenCompass version, summarizer, model snapshot, prompt/scaffold, option-shuffle implementation, language subset, and CE vs accuracy metric before comparing scores.
