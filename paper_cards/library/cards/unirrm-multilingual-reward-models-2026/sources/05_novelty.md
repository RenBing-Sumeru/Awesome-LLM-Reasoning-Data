Many multilingual reward datasets preserve a chosen and rejected response but do not train a common reasoning protocol across evaluation formats. Conversely, format-specific reward models can score well without exposing how a task-specific criterion was formed.

UniRRM changes both the training record and the reward consumer: it records adaptive rubric generation as part of the target and optimizes one model across pairwise, listwise, and pointwise decisions. Its novelty is this shared evaluation representation, not merely translating an existing preference set.
