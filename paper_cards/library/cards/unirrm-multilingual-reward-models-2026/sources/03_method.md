The first stage distils structured evaluations from GPT-OSS-120B and retains records with correct final judgements. The second stage applies group-relative policy optimization on 32,832 reinforcement-learning records, mixing pairwise and listwise formats.

Its composite reward gives most weight to output format, then outcome consistency, with a smaller teacher-evaluated rubric-quality term. This makes the optimization target reward a usable structured judgement, rather than treating a correct final choice as sufficient evidence that the evaluation process was useful.
