The system first trains an MM-Policy and uses the 10K MM-K12 image-and-text problems with verifiable answers as seed data. MCTS expands solution trees, terminal answer checks propagate signal through paths, and the resulting more-than-700K annotations train MM-PRM to rank candidate reasoning paths.

The core artifact is thus a relation among image, problem, answer checker, tree, and step label. The label is derived from a search-and-verification procedure, not a human certification that each written step is semantically correct.
