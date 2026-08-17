Comparative LLM-as-a-judge can rank candidate generations well, but exhaustive pairwise comparisons are expensive and common confidence scores are poorly calibrated. Consequently, selecting the next comparison by minimum uncertainty can waste budget or even degrade a partial ranking.

This paper recasts comparative and absolute judge outputs as a general probabilistic Product-of-Experts (PoE) problem. It derives uncertainty for individual comparisons and for the whole ranking, then uses it to select the next informative comparison rather than evaluating every pair.
