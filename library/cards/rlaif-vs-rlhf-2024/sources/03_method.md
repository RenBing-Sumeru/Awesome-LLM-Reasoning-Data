For canonical RLAIF, an LLM labels response preferences and a reward model learns from those labels before the policy is optimized. For direct-RLAIF, the policy receives reward judgments directly from the off-the-shelf LLM during RL, avoiding a separate reward-model training stage.

The paper evaluates the alternatives on summarization, helpful dialogue, and harmless dialogue. It also tests a self-improvement setting in which the AI labeler is the same size as, or even the same initial checkpoint as, the policy being improved.
