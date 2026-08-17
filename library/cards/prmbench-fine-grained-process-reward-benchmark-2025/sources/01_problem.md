One step-accuracy score hides specific PRM failures: a model may accept unnecessary detours, logically unsound steps, or remain insensitive to small changes in numbers and conditions. Even with a high average score, it may consistently select subtly flawed paths during search, without revealing which capability is weak.

PRMBench constructs controlled variants around correct reasoning for simplicity, soundness, and sensitivity, using fine-grained labels to diagnose PRMs and LLM critics.
