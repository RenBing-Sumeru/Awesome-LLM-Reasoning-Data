For the Programmatically Verifiable Outcome Data track, LEAP is a concrete design for keeping a terminal verifier separate from a search judge. A reusable run record should store the benchmark row and source, formal statement, environment revision, backend/model configuration, informal plan, DAG node and dependencies, candidate Lean artifact, exact compiler feedback, reviewer decision, rollout/revision/call budget, final proof, and Lean verdict. LEAP's public release supplies the benchmark rows and successful final artifacts, but not the intervening fields.

Practical uses are therefore bounded:

- evaluate formal provers on the 30 Basic and 30 Advanced Lean-IMO-Bench statements while reporting pass@k or rollout budget;
- reproduce the released proof artifacts under a pinned Lean/Mathlib environment and audit statement fidelity;
- compare direct generation, iterative compiler revision, tree search, DAG memoization, and decomposition review under equalized call or token budgets;
- design failure logging that preserves Lean rejections and reviewer-pruned branches rather than keeping successes only;
- use Tables 3-6 as an audit checklist for separating model quality, search structure, heuristic review, and test-time compute.

Reuse class: safe as an evaluation and audit reference after snapshot pinning. End-to-end reproduction is blocked pending the framework, prompts, model/toolchain versions, and failed trajectories. The paper does not establish safe training reuse, agent training, SFT, or RLVR from the released artifacts.
