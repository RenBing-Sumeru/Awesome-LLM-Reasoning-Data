1. Inputs: selected BIG-bench task examples, target answers, few-shot exemplars, prompting strategy, and a language model.
2. Pipeline: format each task with direct or chain-of-thought prompts, collect the model's answer, extract/normalize the final answer when needed, and score against the target.
3. Outputs: per-task JSON examples, prompt files, model outputs, per-task accuracy, and aggregate BBH results.
4. Verifier: task answer keys and official evaluation scripts decide success; rationale text is not independently verified.
5. Reproducibility boundary: pin repository commit, prompt variant, answer extraction rule, model/API version, decoding settings, task subset, and contamination status.
