Correctness is exact output-grid equality for the task, not a proof of human-like abstraction. A solver may reach the right grid through memorization, search, brute force over transformations, or prompt-specific heuristics.

The public evaluation set is useful for research but vulnerable to contamination and adaptive overfitting. The README also contains wording that should be pinned carefully: it says the success criterion allows two trials for each test input, while a later interface description mentions three trials. Any reported score should state the policy used.

The benchmark is intentionally narrow: small colored grids, minimal symbols, and exact outputs. It does not directly evaluate language grounding, physical reasoning, tool use, or real-world task completion. Private-tier claims require separate evidence because those tasks are not available in the public repository.
