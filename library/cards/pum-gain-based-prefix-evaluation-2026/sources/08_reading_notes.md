1. **One-sentence positioning:** Local step correctness does not directly indicate whether a prefix improves downstream solvability; it uses estimating the solve-rate gain of lightweight student models with and without each prefix.
2. **Method handle:** The pipeline covers source preparation, record generation, verification, filtering, and release.
3. **Data handle:** PUM-MATH contains 282,346 mathematical prefix-preference pairs and centers on mathematical reasoning prefixes.
4. **Evidence anchor:** The advantage becomes larger when candidate pools, search budgets, or reward sparsity increase, with conclusions limited to the reported setup.
5. **Reuse decision:** It is most suitable for Best-of-N selection, beam search, and reinforcement learning; gain depends on the student model, sampling budget, and answer verifier must be checked before reuse.
