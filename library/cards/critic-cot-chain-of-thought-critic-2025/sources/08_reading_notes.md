1. **One-sentence positioning:** Critic-CoT locates specific errors in mathematical solutions through stepwise critiques and guides revision.
2. **Method handle:** Separate candidates by answer correctness, generate teacher critiques, and verify revised solutions.
3. **Data handle:** critic_cot contains about 276K problems, candidate solutions, stepwise critiques, and revisions.
4. **Evidence anchor:** Filtering invalid solutions and iterative refinement improve both GSM8K and MATH accuracy.
5. **Reuse decision:** Best for candidate filtering and revision; audit teacher rationalization and answer-label bias.
