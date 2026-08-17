1. Position: generate judging reasoning and preference-optimize it. Confirm that the contribution is process feedback rather than model weights alone.
2. Method: seed labels, teacher rationales, filtering, and trace pairing. Data quality depends mainly on the labeler, tool, or environment signal.
3. Data: both SFT reasoning and DPO process preferences. Audit scale, fields, splits, licensing, decontamination, and lineage.
4. Evidence: 11.9/8.5 F1 gains on ProcessBench/PRMBench. Evidence is bounded by reported models, budgets, and benchmarks.
5. Reuse: fits generative verifiers; hidden teacher-rationale errors are the main risk. Best for replayable process training, with label and error audits before reuse.
