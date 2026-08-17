The core data object is an interleaved agent episode: formal prompt, optional natural-language proof or previous-failure summary, reasoning, Lean/search/Python calls, real tool responses, evolving context, cached verified lemmas, summary/restart state, final theorem, and terminal `+1/-1`. No step reward is claimed.

A second object is a lemma-style Lean sketch derived from a natural-language proof. It is trained by a mixed Sketch Rubric contract—Lean structure, natural-language atomic-lemma verification, and a Long-CoT rubric—and then expanded into recursively verified leaves at test time.
