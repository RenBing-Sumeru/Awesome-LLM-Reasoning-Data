Reasoning-data generators can mutate wording or whole solutions, but they have little visibility into which atomic transformations make a problem difficult. This leads to narrow reasoning coverage, repeated patterns, and unstable control over frontier-level difficulty.

MindLoom reverse-engineers verified solutions into reusable thought modes, learns which modes fit a problem state, composes scarce compatible modes into new questions, and keeps judged-correct solution rollouts. The output is a provenance-filtered SFT set whose construction units are explicit reasoning transformations.

L4 facts: official source arXiv:2605.21630, 2026; arXiv preprint with no confirmed venue; decision boundary is a provenance-safe synthesized problem with at least one judged-correct rollout; Track-01 object is a seed, thought-mode chain, evolved question, and SFT response; collected as an existing promoted Card.
