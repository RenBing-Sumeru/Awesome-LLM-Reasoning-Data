1. **Repository selection:** Commits from popular open-source projects are fixed, and refactorings requiring cross-file understanding but feasible within a bounded time are selected.  
2. **Task writing:** Humans define 100 modifications and write lazy, base, and descriptive instructions with different information levels for each.  
3. **Composition:** Non-conflicting tasks in the same repository can be chained into longer multi-hop objectives.  
4. **Validation construction:** AST tests check symbols, calls, inheritance, and file structure rather than merely comparing textual patches.  
5. **Agent execution:** SWE-agent runs in a fixed environment, while the state-aware variant continuously displays structured state. Repository commits, dependencies, tests, and step budgets must be pinned.
