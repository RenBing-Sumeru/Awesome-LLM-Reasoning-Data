Use MathBench as a recipe for staged math evaluation, bilingual benchmark auditing, and robustness checks for multiple-choice answer scoring. It is especially useful when a model comparison needs to separate theory recall from application reasoning.

Preserve item id, language, stage, subject/topic taxonomy, MathBench-A vs MathBench-T label, answer/options, prompt template, model output, CE rollouts, ordinary accuracy where reported, and OpenCompass configuration.

For atlas use, the card should treat MathBench as evaluation-only evidence. It can inform evaluator design or post-training audit checklists, but it should not be reused as a reward source without a separate feedback-contract and contamination audit.
