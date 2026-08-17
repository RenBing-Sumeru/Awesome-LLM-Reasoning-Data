Inputs are the task materials and metadata needed to form one record: a NLG task input, candidate output, evaluation criterion, CoT form-filling judge response, score-token distribution, and scalar GPT-4 score.

Pipeline: Create a rubric prompt; ask GPT-4 to reason and fill the scoring form; extract the score; compare it with human ratings; run ablations over prompt design and metric baselines.

Outputs are scored benchmark records or evaluation summaries under this contract: scalar LLM-judge scores validated by correlation with human ratings. Reuse must pin source version, split, scorer or judge version, prompt/scaffold policy, runtime environment where relevant, and artifact license.
