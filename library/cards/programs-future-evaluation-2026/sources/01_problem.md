Direct LLM judges are costly, prompt-dependent, inflexible after a rubric change, and biased. These properties make large evaluation pipelines hard to audit and reproduce.

PAJAMA asks an LLM to synthesize executable judging programs instead of issuing a verdict directly. Programs can be stored, inspected, adapted, and run locally; weak supervision aggregates their noisy outputs.
