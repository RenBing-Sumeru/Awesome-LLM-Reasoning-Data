1. **Generate a logical world:** A program samples entities, attributes, and bijective relations, constructs a Zebra puzzle with a unique solution, and checks consistency with a solver.

2. **Hide critical information:** Some facts are removed from the visible clues and assigned to queryable tools, forcing the agent to acquire sufficient information through actions.

3. **Compute an optimal baseline:** Theoretical minimum query counts are derived from missing facts and constraint structure, providing a model-independent efficiency reference.

4. **Run controlled evaluation:** Puzzle size, missing clues, and query budgets are varied while answers, call sequences, and overhead relative to optimum are logged to distinguish reasoning errors from insufficient acquisition.
