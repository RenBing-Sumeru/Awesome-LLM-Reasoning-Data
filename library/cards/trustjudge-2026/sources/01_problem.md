LLM-as-a-judge uses integer scores and pairwise choice, yet a lower-scored response can win head-to-head and pairwise verdicts can form cycles or contradictory ties. These defects make a judge’s ranking unreliable even when each individual prompt appears well formed.

TrustJudge is a probabilistic inference framework, not a newly trained judge. It preserves score distributions rather than one rounded score and resolves uncertain pairwise ties with likelihood information, then audits both inconsistency rates across judge families.
