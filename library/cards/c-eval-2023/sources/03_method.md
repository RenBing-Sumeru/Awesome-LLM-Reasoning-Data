1. Inputs: Chinese multiple-choice exam questions, subject labels, level labels, answer options, split metadata, model prompts, and model option outputs.
2. Construction: the authors collect and organize questions across disciplines, define validation/test usage, and identify a challenging C-Eval Hard subset from difficult subjects.
3. Evaluation: a model receives a question and options under zero-shot, few-shot, or chain-of-thought prompting settings described by the benchmark; the output is normalized to an option label.
4. Output: per-subject accuracy, aggregate accuracy, C-Eval Hard accuracy, and model comparison tables.
5. Verifier: the answer key is the verifier; there is no partial-credit process verifier and no judge preference.

Reproducibility requires the dataset release version, split policy, whether the current public test labels are used, prompt template, few-shot exemplars, answer extraction rule, language setting, and leaderboard date. Evaluation-only records should not be converted into training or reward data without a contamination audit.
