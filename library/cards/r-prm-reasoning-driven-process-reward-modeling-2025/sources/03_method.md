1. **Normalize seed supervision.** Represent each labeled item as a problem, prefix, current step, and correctness conclusion.
2. **Generate judging traces.** Use a strong model to analyze local logic, computation, and contextual consistency.
3. **Filter SFT data.** Remove label-conflicting, incomplete, malformed, or self-contradictory rationales.
4. **Create process preferences.** Sample multiple verifier traces and pair them by conclusion correctness and rationale quality.
5. **Create two-stage data.** Use one split for explanatory SFT and another for DPO over judging processes.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain step labels, teacher-evaluation rationales, and verifier reasoning preference pairs and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
