1. **Combine sources.** Collect images, questions, and answers from several visual reasoning datasets and deduplicate them.
2. **Generate diverse trajectories.** Sample multiple VLM solutions, including correct, partial, and erroneous traces.
3. **Locate step errors.** Use answer checks and strong VLM or trace-comparison judgments to identify first errors.
4. **Filter and balance.** Rejudge conflicts and balance tasks, lengths, labels, and error positions.
5. **Create 300K data.** Store images, questions, steps, and labels; model training is a downstream use.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain multi-source image problems, multi-model trajectories, first-error labels, and positive/negative step ratios and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
