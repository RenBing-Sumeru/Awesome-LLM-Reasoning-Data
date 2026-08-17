# Usefulness

**Reasoning SFT builder:** Start with checkable math, coding, or logic instructions and a capable actor, reuse the marked-action plus execution-feedback recipe, and export `instruction`/`response` records with parent lineage. The output is an SFT corpus whose success should be tested against a source-answer baseline at fixed token budget; do not reuse the acceptance rule when final answers cannot be checked reliably.

**Data auditor:** Load both official Parquet files, join `id` and `parent_id`, and inspect whether SFT responses correspond to correct branches while pair trajectories preserve the failed context that motivated correction. The output is a lineage and label-consistency report; success requires schema, count, duplicate, checker false-positive, and source-license results rather than only model scores.

**Mixture designer:** Combine UltraInteract demonstrations with a controlled general-instruction subset, train the same base model under full, source-answer, no-UltraInteract, and UltraInteract-only conditions, and report per-domain accuracy plus instruction-following regression. Use this only when compute permits matched training budgets and a frozen evaluation split; otherwise Table 5's composition and size effects remain confounded.
