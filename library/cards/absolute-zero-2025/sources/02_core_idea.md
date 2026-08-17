The one-sentence contribution is: use one policy to create executable Python tasks, estimate each task's learnability from eight attempts by that same policy, and update both proposer and solver roles from terminal programmatic rewards without an external RL-stage task-answer corpus.

| Contract element | AZR object or signal |
|---|---|
| Curriculum state | Growing deduction, abduction, and induction buffers, initialized from an identity triplet and base-model-generated seeds |
| Proposal context | Six uniformly sampled historical triplets for deduction/abduction, or one buffered program for induction |
| Proposed task | Deterministic Python program/input/output triplet; induction adds ten I/O pairs and a free-form message |
| Proposal validation | Parse and execute, return a value, avoid configured forbidden modules/keywords, and produce matching outputs in two executions |
| Proposer feedback | Eight current-policy solver attempts estimate success; learnability is `0` at zero success and otherwise `1 - success_rate` |
| Solver feedback | Deduction uses Python type/value equality; abduction executes the predicted input; induction requires the synthesized program to pass all five hidden I/O cases |
| Reward granularity | One terminal scalar at the final response token; wrong but formatted output gets `-0.5`, format failure gets `-1` |
| Training use | RLVR through Task-Relative REINFORCE++ across six task-role groups |

The executor is both environment and verifier. It can observe parse success, exceptions/timeouts, returned values, repeatability across two runs, Python equality, and hidden-test functional behavior. It cannot prove semantic novelty, safe behavior, absence of hidden state, robust determinism, or that the intended reasoning caused the answer. No learned reward model or LLM judge checks the reasoning trace, so the feedback is answer-/episode-level rather than process supervision.

The method represents autotelic curriculum construction: task distribution and solver capability co-evolve, while the current policy supplies both sides of the interaction. Relative to pipelines that depend on a fixed external task set or stronger-model solution traces, AZR removes that input at the RL stage and lets executable task generation drive training. It does not remove upstream pretraining, human scaffold design, or privileged executor feedback, and it does not release the resulting online episode stream as a dataset.

The closest Atlas comparisons are AlphaMath's almost-zero-data self-training, GENIUS-style unsupervised self-training, and self-play/critic recipes. AZR's distinguishing interface is three-way program-task generation plus role-relative RL over a shared executable verifier; the nearest-comparison details should still be checked in those primary sources rather than inferred from their titles.
