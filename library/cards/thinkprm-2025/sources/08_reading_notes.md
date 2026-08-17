- The public object is 1,000 PRM800K/MATH prefixes paired with QwQ-32B-Preview verification CoTs and human step labels, not 1,000 independently human-verified rationales.

- Four teacher chains are sampled per prefix; about 5,000 raw generations yield 1,000 retained chains after format, all-step agreement, length, and balance filters.

- The release has 869 unique questions and 8,099 step labels, 92.3% of which are positive despite roughly balanced prefix outcomes.

- ThinkPRM's scalar is a generative judgment probability after a verification trace, not a programmatic correctness predicate.

- Parallel scaling averages independent verifier scores; sequential scaling revisits one judgment, and neither mode is guaranteed to improve monotonically.

- Audit rationale faithfulness, upstream IDs, rejected candidates, decontamination, licenses, 65K release boundaries, and complete model/search revisions separately from benchmark gains.
