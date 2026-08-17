1. Inputs: large crowdsourced conversations, prompt-filtering rules, model endpoints, a baseline answer set, judge model, and evaluation config.
2. Pipeline: BenchBuilder filters hard prompts, models generate answers, `gen_judgment.py` asks the judge for pairwise preferences, and `show_result.py` aggregates scores and confidence intervals.
3. Outputs: prompt set, model answers, judgment records, win rates, and benchmark-quality metrics.
4. Feedback contract: the judge gives pairwise preference labels; paper-level validation compares benchmark rankings with human preference rankings and separability metrics.
5. Reproducibility notes: pin Arena-Hard version, prompt set, judge model, baseline, style-control features, temperature, answer budget, and date of model endpoints.
