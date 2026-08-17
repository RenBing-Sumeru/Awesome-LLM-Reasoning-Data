A reasoning prefix can be locally correct yet merely restate the problem, add irrelevant computation, or even reduce the probability that a downstream model solves the task. Step correctness therefore cannot determine whether the prefix is genuinely useful, and search may preserve branches that are correct but contribute nothing.

The paper asks lightweight student models to continue with and without each prefix, uses the difference in verified solve rates as the gain, and constructs prefix-preference pairs for training a Prefix Utility Model.
