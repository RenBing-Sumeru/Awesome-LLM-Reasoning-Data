N-gram decontamination misses training examples that solve the same task with different wording or code. A benchmark score can therefore mix out-of-distribution reasoning with exposure to test-like data, even when no string duplicate is present.

The paper searches an open training corpus for semantic duplicates, then uses controlled fine-tuning to test whether them improve both matched items and held-out items from the same benchmark. It frames this benchmark-specific spillover as shallow generalization.
