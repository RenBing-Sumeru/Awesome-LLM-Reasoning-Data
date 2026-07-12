Uses Monte Carlo continuations and final-answer checks to create automatic step labels for PRM training, reranking, and stepwise PPO.

Generate candidate solutions, split them into steps, sample continuations from prefixes, check terminal answers, derive process labels, train Math-Shepherd, then use it for reranking or PPO. The feedback contract is: final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.
