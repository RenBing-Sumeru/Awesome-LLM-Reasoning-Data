- **Start with the exact online object.** One trainable group is a generated question, 16 full responses, extracted answers, Math-Verify equivalence relations, a selected majority cluster, 16 binary rewards, and iteration/policy state. The public prompt snapshots are not this complete object.

- **Do not equate consensus with correctness.** Read Section 4.3 and Appendix E before using the reward: repeated wrong answer 0 can receive unanimous reward, and the `[0.2, 0.8]` filter only removes extreme consensus, not moderately sized wrong majorities.

- **Compare paper and code line by line.** Appendix C.4 targets two seed plus six generated few-shot examples; code uses at most two generated and fills the eight-example context from seed. The paper’s shortest-answer tie-break is absent, and template micro-batches, KL, and 2,000-instruction iteration size drift from the tables.

- **Treat bundled data as unbound snapshots.** `llama_gen7500_iter4.jsonl` has 7,532 rows, 4,730 unique normalized prompts, and 2,802 exact duplicates, while its iteration-4 name does not map to the three reported iterations. No manifest binds static files to checkpoints, filters, or metrics.

- **Preserve the release boundary.** Code is Apache-2.0, but the bundled datasets have no dataset-specific license; semantic decontamination is unknown. Complete responses, rewards, failures, verifier exceptions, accepted/rejected streams, public logs, official checkpoints, and paper-run manifests are not available.
