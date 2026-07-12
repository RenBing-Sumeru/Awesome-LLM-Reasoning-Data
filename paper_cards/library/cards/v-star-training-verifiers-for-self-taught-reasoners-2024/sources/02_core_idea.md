Reuses both correct and incorrect self-generated solutions to co-evolve a reasoner and a DPO-trained verifier for best-of-N selection.

Sample many solutions, partition them by automatic correctness, fine-tune the reasoner on positives, train the verifier with correct/incorrect pairs, rerank candidates, and iterate. The feedback contract is: unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.
