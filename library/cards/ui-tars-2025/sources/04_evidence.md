On OSWorld's 369 Ubuntu/Windows/macOS tasks, averaged over three runs, UI-TARS reports 24.6 success at 50 steps and 22.7 at 15 steps, compared with Claude at 22.0 and 14.9. These results belong to the paper's screenshot-only scaffold and step budgets, not a context-free checkpoint property.

On AndroidWorld, 116 tasks across 20 apps use randomized parameters; UI-TARS reports 46.6 versus GPT-4o at 34.5. The paper calls AndroidWorld out-of-domain because no corresponding training data is used, but provides no item hashes or semantic decontamination. Mind2Web, AndroidControl, and GUI-Odyssey are explicitly in-domain because related data enters training.

System 2 can be slightly worse than System 1 at Best-of-1 because thoughts can be irrelevant, hallucinated, or fixated, while it gains more at Best-of-16/64 through candidate diversity and selection. This is a test-time compute finding; it does not establish that thought traces are uniformly better supervision.
