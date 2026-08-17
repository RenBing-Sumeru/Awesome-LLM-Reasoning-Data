1. **One-sentence position:** SWE-Bench Pro recalibrates coding-agent capability with 1,865 professional long-horizon tasks split into public, held-out, and commercial partitions.

2. **Method takeaway:** Real-task selection, engineer-added context, containerized test replay, solvability review, and non-public partitions are central.

3. **Data takeaway:** Only 731 public tasks are released, with descriptions, commits, patches, tests, dependencies, and environments; private portions cannot be independently audited.

4. **Evidence anchor:** Under a unified scaffold, the best model reaches about 23.3% Pass@1 and all systems remain below 25%, far below Verified.

5. **Reuse decision:** It suits long-horizon and contamination-sensitive evaluation. Private-set reproducibility and prompt augmentation require partitioned reporting and fixed budgets.
