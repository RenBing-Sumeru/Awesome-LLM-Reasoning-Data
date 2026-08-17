1. **Limited naturalness:** Artificially concatenated tasks may not resemble real work, and models may learn formatting and context management rather than deeper single-problem reasoning.

2. **Length and credit assignment:** Deeper compositions increase token cost and failure probability, while all-or-nothing reward does not reveal which subproblem failed.

3. **Inherited verifier flaws:** Any incorrect reference or checker loophole in a component propagates into composed tasks and may be exploited systematically.
