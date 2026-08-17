Inputs are the benchmark prompts, source artifacts, task metadata, and any evaluator-specific context needed to score a model response. The fields to preserve are skill label, prompt, model response, expected answer or rubric, score.

A reproducible use should follow this pipeline:
1. Pin the official source, dataset or benchmark version, and evaluator revision.
2. Run the model under a disclosed prompt, scaffold, sampling budget, and tool/environment policy.
3. Convert outputs through the official answer extractor, judge, test harness, rubric, or hidden evaluator.
4. Store per-instance verdicts before reporting aggregate scores.

Outputs are per-instance scores or pass/fail labels plus aggregate metrics. The feedback contract is mixed checker or judge scoring. Reuse remains evaluation-oriented unless an official artifact demonstrates reward-modeling, filtering, reranking, or RL use.
