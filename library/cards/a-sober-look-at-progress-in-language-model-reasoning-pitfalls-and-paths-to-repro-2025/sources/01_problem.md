Mathematical-reasoning leaderboards often compare models under different decoding settings, prompts, seeds, answer extractors, and compute stacks. On small test sets, these hidden choices can move Pass@1 enough to reverse rankings, so reported gains cannot be cleanly attributed to a training recipe.

The paper addresses this as an evaluation-audit problem: it systematically varies those choices, proposes a standardized reporting protocol, and re-evaluates recent RL and SFT reasoning models. Its direct outputs are a reproducible evaluation stack, released prompts and outputs, and a standardized result collection.
Without this control, users may adopt an ineffective post-training recipe, and the field may optimize against a noisy leaderboard instead of a reliable improvement.
