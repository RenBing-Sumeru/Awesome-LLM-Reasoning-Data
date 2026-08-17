Instruction-following rewards are difficult when a request combines strict format, keyword, length, style, and semantic constraints. A reward based only on a reference answer misses many valid outputs, while an unconstrained judge can be inconsistent or hard to audit.

VerIF asks how to make instruction constraints into usable reinforcement-learning feedback. It divides them into hard constraints that can be checked by code and soft constraints that require a verifier model, then combines these checks into a reward interface.
