1. Position: study VL-PRM data recipes with about 300K step labels. Confirm that the contribution is process feedback rather than model weights alone.
2. Method: multiple sources, diverse trajectories, answer checks, VLM first-error judging, and balancing. Data quality depends mainly on the labeler, tool, or environment signal.
3. Data: image–question–trajectory–step-label records. Audit scale, fields, splits, licensing, decontamination, and lineage.
4. Evidence: improvements in Best-of-N and tree search. Evidence is bounded by reported models, budgets, and benchmarks.
5. Reuse: fits general VL-PRMs; judge noise and contamination are the main risks. Best for replayable process training, with label and error audits before reuse.
