rStar-Math's central contribution is a four-round data loop in which code-augmented MCTS supplies both selected correct trajectories for policy SFT and search-derived step comparisons for a process preference model, after which the new policy and PPM generate the next round.

| Contract element | Internal construction object and signal |
|---|---|
| Prompt and reference | An answer-keyed mathematics problem from the reported 747K pool |
| Behavior | A policy proposes one natural-language/Python reasoning step at each MCTS node |
| Runtime feedback | The cumulative Python program must execute without an error for the candidate to remain viable |
| Terminal feedback | Extracted answer equivalence yields +1 for a correct terminal and -1 for an incorrect terminal |
| Search value | Terminal outcomes are back-propagated into Q-values; from round 3, the previous PPM initializes step values |
| SFT object | Up to two correct root-to-leaf trajectories per problem, ranked by average/minimum Q and stripped of responses containing `error` |
| PPM object | Under a shared prefix, high-Q steps reaching correct outcomes are preferred to low-Q steps reaching wrong outcomes; repository export also requires Q-margin at least 0.5 and edit distance at least 20 |

The verifier contract is mixed but bounded. Python execution observes syntax/runtime viability, not whether a comment formalizes the problem correctly or whether the computation is mathematically relevant. The answer checker observes only extracted terminal equivalence, so a correct result can coexist with defective intermediate reasoning. Q-values and PPM scores summarize success under a particular policy, explored tree, checker, and finite budget; they are trajectory-dependent estimates rather than proofs of local step validity.

The direction is joint evolution of reasoning-data generation and a process selector. Related rStar-family search work, REST-MCTS, and DART-Math are useful comparison points, but the paper-specific change here is the coupling of code-augmented tree generation, terminal-back-propagated step preferences, and four rounds of policy/PPM refresh. The authors do not use a superior model to write the reported solution trajectories, but this boundary must retain two bootstrap facts: GPT-4 generates part of the problem pool and DeepSeek-Coder-V2-Instruct (236B) generates round-1 MCTS traces.
