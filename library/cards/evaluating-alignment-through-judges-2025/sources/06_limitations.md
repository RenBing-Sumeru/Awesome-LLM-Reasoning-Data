The main assumption is a strong, stable preference oracle. Weaker oracles reduce GE-consistency, and oracle self-preference is visible in the two AlignEval variants; reuse should test multiple oracles and report order consistency.

AlignEval is a proxy and can be gamed: training a model to judge can raise its score without improving generation alignment. The authors recommend combining it with IFEval, but this does not remove the risk; audit models with direct generation tests.

Its instances derive from filtered Arena-Hard comparisons, so coverage is limited and filtered-out ambiguity is excluded. Do not treat its rank as a complete safety or helpfulness assessment.
