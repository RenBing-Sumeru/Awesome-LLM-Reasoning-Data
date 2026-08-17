The authors state three primary limits: the recipe depends on a strong solution teacher; it studies English mathematics only; and biases can propagate from GSM8K/MATH seeds or the problem/solution generators. The proposed mitigation of an additional bias filter is future work, not part of the reported pipeline.

The feedback contract creates further concrete risks.

- The final `First` strategy performs no independent solution verification. Incorrect or misleading Qwen2.5-Math-7B-Instruct traces can enter SFT directly.
- Same-teacher self-consistency can agree on a shared error, while the tested solvability judge rejects 30.2% of MATH500 and 49.3% of its level-5 items. Learned quality filters can therefore remove hard valid data.
- Exact-match deduplication and the 95%-of-8-grams rule miss semantic paraphrases. The stated test-overlap rule covers GSM8K/MATH, not all five evaluation families.
- Selecting the highest-average checkpoint on GSM8K/MATH makes those reported metrics partly model-selection surfaces rather than untouched final tests.
- Agent and mixture comparisons share a scaffold, but they are single-paper experiments without published seeds, uncertainty intervals, or independent replication. Mixture selection and evaluation use overlapping benchmark objectives.
- FLAMES Small/Large/XL records, construction code, rejected candidates, seed-to-output IDs, per-item agent/intermediate fields, and model-ready manifests are not officially available.
- ACL's CC BY 4.0 license covers the paper. It does not establish a license or rights chain for unreleased synthetic records, teacher outputs, inherited taxonomies, GSM8K/MATH derivatives, or implementation code.

The following are curator inferences. Retaining only accepted problem–solution pairs would hide generator failure rates and filter false positives/negatives. Unpinned model and dataset revisions can change generated distributions and benchmark matching. Distraction Insertion may teach a recognizable distractor style rather than general robustness, and a taxonomy mixture can broaden topic labels without guaranteeing conceptual independence or balanced difficulty. These risks require row-level artifacts to test.
