The paper makes step selection itself a first-class trace-construction object: a model-derived, length-normalized entropy score chooses which intermediate steps become explicit `[SKIP]` positions in a training target. This links an analysis-time score to a concrete long-to-short data transformation instead of only reporting a post-hoc compression rate.

It also couples that compressed SFT target with GRPO reward terms for answer correctness and compression. The novelty claim should remain scoped to the disclosed recipe: step entropy ranks model uncertainty or dispersion, not semantic necessity, and the work does not release the selected corpus needed to compare selectors at the row level.

