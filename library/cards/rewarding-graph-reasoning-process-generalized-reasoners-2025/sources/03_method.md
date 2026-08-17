1. **Create graph tasks.** Cover path, connectivity, topology, matching, and combinatorial problems with machine-readable graphs.
2. **Generate correct traces.** Use deterministic graph algorithms to output operations and states.
3. **Create erroneous traces.** Sample LLM solutions or perturb nodes, edges, order, and stopping conditions.
4. **Execute and verify.** Run every operation in the graph environment and locate the first error.
5. **Balance and release.** Balance graph size, task type, and error pattern and remove equivalent duplicates.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain graph structures, operation traces, state transitions, first-error locations, and positive/negative labels and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
