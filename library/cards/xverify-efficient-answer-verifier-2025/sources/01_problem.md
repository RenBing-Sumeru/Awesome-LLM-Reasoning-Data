Answer verifiers may perform well on short responses yet fail on equivalent expressions, multi-part answers, and complex formatting in long reasoning traces. Rule matching has limited coverage, while general LLM judges are expensive and can be influenced by response style, so benchmark scores may not reflect real verification ability.

xVerify builds VAR by generating long responses with multiple models, applying automatic initial labels and multiple rounds of human review, and then trains lightweight verifiers for reasoning-model evaluation.
