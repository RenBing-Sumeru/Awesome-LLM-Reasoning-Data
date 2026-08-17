Repeated sampling can improve a reasoning system only if it also knows which answers to submit. Majority voting trusts frequency, while best-of-N trusts a reward model; under a Pass@k contract, either can keep nonzero regret or even worsen as the sampling budget grows.

The paper asks for a selection rule that jointly respects the number of generated candidates and the number of answers a system may return. Its target is not a prettier single-answer score, but a rule whose performance improves predictably when more inference compute is spent.
