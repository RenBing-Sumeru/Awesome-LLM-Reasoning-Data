Black-box LLM probabilities, gradients, and hidden states are unavailable, so reference-free hallucination detection often relies on consistency across repeated generations. Comparing responses only to one another ignores whether they actually answer the query and cannot provide a better alternative to the user.

HalluCounter jointly models response–response and query–response consistency and alignment, training a classifier that outputs a hallucination label, confidence, and an optimal candidate, with a cross-domain evaluation set.
