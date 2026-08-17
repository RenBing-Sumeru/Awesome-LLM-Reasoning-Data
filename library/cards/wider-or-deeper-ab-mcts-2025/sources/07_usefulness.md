For **Rollout, Search, and Test-Time Trace Data**, AB-MCTS is a concrete recipe for treating inference budget allocation as a data-construction variable. A follow-up can hold prompts, model snapshot, evaluator, temperature, and total generation calls fixed, then compare independent width, iterative depth, fixed-branch MCTS, AB-MCTS-M, and AB-MCTS-A. The resulting unit of analysis is the full response–revision tree, not only the submitted answer.

Practical uses include:

- implementing an adaptive widen/deepen generator for code, ARC, or ML-engineering tasks with scalar environmental feedback;
- serializing `MCTSResult` trees and per-call logs to build the raw trace release absent from the official artifacts;
- studying which prompts favor independent alternatives versus feedback-conditioned repair, and how posterior uncertainty moves budget between them;
- auditing public-feedback overfitting by retaining both search scores and hidden-evaluation outcomes without leaking hidden tests into generation;
- comparing budgets at matched API calls, generated tokens, wall-clock time, evaluator runtime, and monetary cost;
- evaluating final-answer selectors separately from Pass@k discovery, especially when a correct branch exists but is not ranked first.

For dataset construction, a minimally useful record should contain the immutable task/source ID, prompt, model snapshot and provider settings, tree node ID, parent ID, fresh-versus-revision action, prior response and feedback context, generated completion, evaluator version and payload, scalar score, visit/value statistics, call order, token and cost accounting, final selection flag, and hidden outcome stored behind a leakage-safe boundary. All nodes should be retained because the checked implementation has no explicit pruning path; an unselected branch is valuable negative or alternative evidence even when it is not the final answer.

For post-training, these trees could later support SFT on successful revisions, preference construction, value modeling, or process studies, but the paper does not perform or validate those uses. They are research opportunities, not evidence-backed `training_use` labels for this Card. The supported uses remain `test_time_compute` and `evaluation`.

The appropriate reuse class is **strong inference recipe and capture-schema reference; conditional reproduction; direct trace-data reuse unavailable**. TreeQuest can be reused under Apache-2.0 subject to dependency and provider terms, while the benchmark inputs, model responses, ARC-AGI-2 materials, and supplemental bundle require their own rights review. Reproduction should pin the exact model snapshot wherever possible, record the unresolved `deepseek-chat` revision, keep the main 128-call and ARC-AGI-2 250-call protocols separate, and publish complete trees plus rejected/unselected branches.

The Card also provides a release checklist for the assigned track: runnable search code is not enough. A reusable test-time trace release needs realized raw trees, all model responses, revision prompts, evaluator outputs, branch-selection history, cost accounting, model/version pins, split and contamination documentation, and explicit licenses.
