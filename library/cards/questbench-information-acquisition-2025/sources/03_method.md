1. **Formalize complete tasks:** Convert logic, planning, and mathematics problems into CSPs with variables and constraints.

2. **Hide one assignment:** Remove a key variable so the answer is no longer unique, while retaining the full state as oracle.

3. **Generate question options:** List askable variables and use a solver to determine which questions restore a unique answer after receiving their values.

4. **Evaluate selection:** The model chooses a clarification question or “not sure,” and accuracy is computed against correct options. Reproduction must fix option ordering, CSP solvers, human-edited GSM versions, and random seeds.
