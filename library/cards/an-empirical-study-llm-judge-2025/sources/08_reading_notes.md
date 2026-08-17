1. Positioning: this is an audit of whether fine-tuned judges remain general evaluators, not a new judge proposal.
2. Method handle: cross evaluation changes scheme, task, adversarial surface, and prompt while keeping released checkpoints fixed.
3. Artifact handle: the official UnlimitedJudge repository supplies code and test-set preparation; no new paper dataset is claimed.
4. Evidence anchor: JudgeLM-7B falls from 82.39% on its own test to 48.7% on Prometheus-test, while GPT-4 is steadier across schemes.
5. Reuse decision: use it to gate an open judge before deployment; first measure cross-format transfer and relevant bias, not only native-test accuracy. CascadedEval’s low-confidence route to GPT-4 is an engineering fallback, not proof that the base judge is general.
