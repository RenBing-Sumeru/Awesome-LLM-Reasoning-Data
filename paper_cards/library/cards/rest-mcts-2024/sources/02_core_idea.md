Process-reward-guided tree search recipe for collecting reasoning traces and inferred per-step value targets.

policy models generate intermediate reasoning steps while MCTS expands candidate paths. The feedback contract is: process reward model guided by final-answer oracle feedback and MCTS-derived value targets. The terminal condition is: final-answer correctness under search.
