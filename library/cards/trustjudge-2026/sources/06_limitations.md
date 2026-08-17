Author-stated: TrustJudge depends on the underlying evaluator’s instruction following; smaller models can fail to return valid scores or comparisons, so the framework cannot repair a nonfunctional judge.

Curator audit: lower CR/NTR does not prove that a judge’s preferences are correct, fair, or robust to prompt injection. Before deployment, separately test human agreement, position/length bias, prompt compliance, and the cost of obtaining token probabilities or perplexity.
