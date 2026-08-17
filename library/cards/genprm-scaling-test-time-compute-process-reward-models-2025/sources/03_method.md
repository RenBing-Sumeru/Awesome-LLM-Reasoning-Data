1. **Build candidate trajectories.** Collect MATH problems and generate multiple step-by-step solutions, retaining prefixes and current steps.
2. **Estimate relative progress.** Compare future solvability before and after each step rather than propagating final-answer labels.
3. **Run code verification.** Generate and execute Python checks for computable claims and use execution results to refine labels.
4. **Synthesize rationales.** A strong model writes judging rationales; malformed, conflicting, or execution-failed records are removed.
5. **Create training data.** About 23K records support generative SFT, while model training and inference sampling are secondary.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain MATH trajectories, relative-progress estimates, code execution, and generative judgment rationales and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
