The construction is tailored to QA, and the paper notes higher QA than summarization scores. Its pairs may therefore underrepresent retrieval failures in other RAG tasks; validate on the intended corpus and task.

Grounding is necessary for the reported gain: removing it drops models close to baseline. A deployment with missing, stale, poisoned, or contradictory retrieval context can still receive a confident but wrong contextual score.
