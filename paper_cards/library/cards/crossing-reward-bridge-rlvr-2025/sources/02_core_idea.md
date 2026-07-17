The key record contains a prompt, an expert-written reference answer, a response sampled from the policy, and a correctness judgement. A strong teacher model supplies the judgement during exploration, creating data that can supervise a smaller generative reward model.

The smaller verifier does not need to return only a hard correct-or-incorrect decision. Its probability assigned to the judgement token becomes a soft reward, allowing the reinforcement-learning objective to use a graded signal when free-form answers cannot be reduced to an exact string match.
