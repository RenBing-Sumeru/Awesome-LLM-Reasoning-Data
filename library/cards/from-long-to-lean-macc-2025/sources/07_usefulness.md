For **Rollout, Search, and Test-Time Trace Data**, MACC is a compact case study in sequential long2short selection. A controlled follow-up can hold the source prompt, original-trace generator, compressor snapshot, answer exposure, tokenizer, and SFT recipe fixed while varying maximum round \(T\), stopping rule, semantic/correctness safeguards, or whether the rejected rebound is retained. This turns trace length and revision depth into explicit construction variables rather than undocumented preprocessing.

Practical uses include:

- implementing the paper’s one-candidate-per-round answer-conditioned rewrite chain and comparing it with single-pass, fixed-round, and multi-candidate compression;
- testing token-length rebound against alternatives that require final-answer consistency, semantic equivalence, proof-step preservation, or calibrated judge agreement;
- studying how exposing the final answer changes rationale faithfulness and whether a compressed trace remains useful when the label is withheld;
- using the Table 5–6/Algorithm 1 inconsistency as a reproducibility audit for tokenizer pins, stop logs, selected indices, and rendered example labels;
- evaluating compressor and round choices under matched API calls, input/output tokens, latency, monetary cost, and final SFT compute;
- designing a complete revision-corpus schema that preserves selected and rejected evidence rather than publishing only \(r^*\).

A reusable record should include immutable source and prompt IDs; source split and upstream revision; target-model and compressor snapshots; tokenizer revision; \(r_0\); every \(r_i\); parent and round index; final-answer exposure flag; prompt template revision; input/output token counts; \(CR_i\); any PPL, answer, semantic, or process checks; rebound and stop reason; selected index; exclusion/retry status; and final SFT serialization. The discarded longer round should be retained because it is direct negative evidence about the selector.

The supported downstream use is SFT: selected compressed rationale plus answer, with some original-trace mixing. Future releases could enable preference learning, faithfulness studies, or learned selectors, but the paper neither performs nor validates those objectives. They should not be added to `training_use`.

The appropriate reuse class is **strong construction/audit reference; paper-level reproduction only; data and implementation reuse blocked**. The official repository is README-only, corpus count/schema/splits are unknown, API settings and \(T\) are unpinned, generated-data rights are unresolved, and the appendix selection cannot be reconstructed. Reusers should not infer canonical benchmark counts or fabricate missing revision chains from examples.

For this track, MACC is also a release checklist. A credible long-to-short package needs all original, intermediate, selected, and rebound/rejected rounds; exact tokenization and stop decisions; prompt/model/API versioning; data splits and decontamination; SFT mixture manifests; costs; and explicit code/data licenses. Aggregate accuracy and average length cannot substitute for that lineage.
