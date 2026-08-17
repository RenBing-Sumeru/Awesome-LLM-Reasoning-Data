The threat model requires white-box access to an open judge and its prompt template; the paper does not establish transfer to API judges, hidden prompts, or adaptive defender changes. Reuse should therefore first reproduce the attack on the exact judge, tokenizer, template, and position protocol rather than treat the reported rates as platform-independent.

The main attack and detector tests use constructed target pairs and limited samples: 10 targets and 500 clean responses per MT-Bench/LLMBar detector test. The authors test only known-answer, PPL, and PPL-W detection, and note improving stealthiness as future work. A deployment audit should add realistic adversaries, semantic sanitization or isolation defenses, and end-to-end harm measures.

Because per-target optimization is required, the paper also does not establish attack cost or feasibility at the scale of a continuously changing production corpus.
