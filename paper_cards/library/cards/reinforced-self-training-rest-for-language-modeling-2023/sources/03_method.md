The procedure relies on the paper's quality/reward setup for generated outputs and its translation evaluations. Preserve that exact signal before treating the batch as reusable reasoning data.

The current policy generates a batch in a grow phase. An offline RL improve phase reuses the batch, then the updated policy creates the next batch.
