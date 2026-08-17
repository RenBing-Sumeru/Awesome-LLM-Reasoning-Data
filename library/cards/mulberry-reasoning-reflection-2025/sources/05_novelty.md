# Novelty

Single-model MCTS and ReST-style search bootstrap continuations from one policy, so their tree can remain confined to that policy's mistakes. Mulberry changes the path-construction decision by letting four heterogeneous MLLMs jointly expand and score nodes, then reuses a negative sibling as an explicit error-to-correction training transition. This makes the released supervision include both successful reasoning and a sampled reflection event. Tree search, final-answer checking, and SFT themselves are not new.
