For **Rollout, Search, and Test-Time Trace Data**, DOTS provides a compact experimental contract for separating action-trajectory choice from the underlying solver. A study can hold the question pool, solver, answer checker, temperature, and execution budget fixed while varying the 12-path grammar, number of evaluation samples, retained-set sizes, tie-break, or failure-retention policy. The paper configuration—\(K=2\), \(N_{\text{eval}}=4\), \(N_1=8\), \(N_2=3\), and \(T=0.4\)—is a useful baseline only when reported separately from the current repository defaults.

The raw release can support several audit-oriented uses:

- compare successful and failed dialogues for the same question and action trajectory;
- estimate how answer extraction, exact matching, and program output formats affect trajectory rankings;
- train or evaluate trajectory selectors if users reconstruct explicit candidate groups and prevent question-level leakage across splits;
- study whether solver-specific labels transfer across GPT-4o-mini, Llama-3-70B-Instruct, and Llama-3-8B-Instruct;
- design richer releases that preserve accumulated scores, every prune/keep decision, retry/stop reasons, and per-example compute budgets.

The paper also describes an SFT use: an external planner learns explanation plus path, and an internalized model learns explanation, path, solver reasoning, and answer. That use is supported as a construction recipe, but the final processed SFT files and checkpoints are not currently verified. Reusers would need to reconstruct targets from raw trials and reproduce GPT-4o explanations, or obtain a restored official package; they should not label the existing HF JSON as ready-to-train final SFT data.

For evaluation, report nominal trajectory executions, variable Self-Verification retries, generated tokens, latency, and monetary cost separately. Compare a fixed CoT/PoT baseline, random or heuristic routing, and searched routing under matched budgets. Because search repeatedly queries the solver and uses ground-truth answers, score gains combine planner quality, additional construction compute, and evaluator behavior; benchmark performance alone cannot attribute the gain to better data.

The appropriate reuse class is **strong recipe and raw-rollout audit reference; conditional research reuse; production training or redistribution pending manifest and rights review**. Before reuse, establish stable record counts and splits, preserve source-task boundaries, document deduplication and benchmark overlap, reconcile paper/code settings, and review the HF MIT declaration together with unknown code and upstream derivative-data rights.
