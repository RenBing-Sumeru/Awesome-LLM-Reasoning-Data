1. Position: store process and outcome feedback for the same Agentic RAG trajectories. Confirm that the contribution is process feedback rather than model weights alone.
2. Method: fixed corpus, trajectories, alternative actions, evidence coverage, and dual rewards. Data quality depends mainly on the labeler, tool, or environment signal.
3. Data: query–retrieval-action–process-preference–outcome-reward records. Audit scale, fields, splits, licensing, decontamination, and lineage.
4. Evidence: process rewards often help efficiency but are not universally superior. Evidence is bounded by reported models, budgets, and benchmarks.
5. Reuse: fits fixed-index RAG; heuristic labels and index drift are main risks. Best for replayable process training, with label and error audits before reuse.
