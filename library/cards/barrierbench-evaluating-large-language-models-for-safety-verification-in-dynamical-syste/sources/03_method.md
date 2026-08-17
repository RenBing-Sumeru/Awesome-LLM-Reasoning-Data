1. **Construct system tasks:** Different dynamics are curated with state variables, initial sets, unsafe sets, and target safety properties.

2. **Build formal verifiers:** Barrier conditions are encoded as SMT constraints checking values on initial regions, separation from unsafe regions, and invariance under derivatives or discrete transitions.

3. **Have LLMs propose templates:** Agents generate polynomial or other candidate barriers from language and equations and may jointly propose controllers.

4. **Solve and repair from feedback:** The SMT solver returns success, counterexamples, or failure information, which agents use to revise structures, coefficients, and search strategies until success or budget exhaustion.

5. **Evaluate uniformly:** Valid-certificate success, iterations, and cost are compared across RAG, single-agent, and collaborative strategies on 100 tasks.
