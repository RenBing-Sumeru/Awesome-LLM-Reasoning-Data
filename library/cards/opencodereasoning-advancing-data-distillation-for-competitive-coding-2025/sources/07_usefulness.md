For the **Data Construction & Open Release Recipes** track, this work is a reusable design and audit case rather than merely a model-score report.

- **Conditional training reuse:** pin the HF revision, retain every provenance field, resolve per-source licenses, reconstruct split_1 prompts deterministically, and run functional tests plus target-benchmark decontamination before SFT. The release-level CC BY 4.0 label is not sufficient on its own.
- **Filtering baseline:** compare format/syntax acceptance, execution-only acceptance, difficulty-balanced execution filtering, and a mixed policy at matched row count and matched unique-question support. Report both retained questions and retained responses.
- **Verifier audit:** sample syntax-accepted rows, execute them in the source test environment, stratify false accepts by source/difficulty, and preserve failing code and rejection reasons instead of publishing only survivors.
- **Scaling study:** vary unique questions and responses per question independently; the paper's 25k-to-736k curve changes both coverage and volume.
- **Release checklist:** publish question IDs, source revisions, generation seeds, all candidates, filter decisions, contamination neighbors/judgments, per-row execution labels, and license manifests.

Reuse class: conditionally suitable for SFT/distillation after version, rights, and correctness checks; strong as a construction/filtering audit reference; unsuitable as a clean evaluation benchmark because its questions and responses are training material. The current OCR-2 recipe can bootstrap implementation, but an OCR-1 replication must restore the paper's 16k generation contract rather than silently using 32 seeds and 28,768 tokens.
