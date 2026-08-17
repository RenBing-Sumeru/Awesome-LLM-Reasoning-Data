PRMs usually segment reasoning by line breaks, sentences, or manual rules, but textual boundaries do not necessarily match internal model decisions. One key choice may span several sentences, while several decisions may occur within one sentence. A poor granularity mixes multiple inferences under one label or fragments one decision and increases rollout cost.

AdaptiveStep detects decision transitions from abrupt changes in token confidence and estimates values from these adaptive prefixes, producing process-reward data aligned with model states.
