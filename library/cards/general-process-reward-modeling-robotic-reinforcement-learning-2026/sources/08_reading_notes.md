1. Position: turn robot state transitions into cross-task progress rewards. Confirm that the contribution is process feedback rather than model weights alone.
2. Method: multi-robot trajectories, transition splitting, progress measures, negatives, and benchmark isolation. Data quality depends mainly on the labeler, tool, or environment signal.
3. Data: goal–transition–action–progress–label records. Audit scale, fields, splits, licensing, decontamination, and lineage.
4. Evidence: process rewards outperform terminal rewards with some transfer. Evidence is bounded by reported models, budgets, and benchmarks.
5. Reuse: fits robotic RL; short-term versus long-term progress mismatch is the main risk. Best for replayable process training, with label and error audits before reuse.
