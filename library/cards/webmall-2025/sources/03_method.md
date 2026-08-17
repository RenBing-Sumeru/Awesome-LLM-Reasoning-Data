Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Load the simulated shops and product offers.
2. Give the agent a natural-language shopping instruction.
3. Let it search, compare, add to cart, or checkout across shops.
4. Score returned offer URLs or cart/checkout contents against the gold set.

Outputs are 4 simulated shops, 91 tasks, 11 categories, 4421 product offers, completion rate, precision, recall, and F1. The verifier, reward, judge, or environment is: Gold offer-URL set matching defines strict completion; product-search, add-to-cart, and checkout tasks also report precision, recall, and F1 for partial completion. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
