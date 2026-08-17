For the assigned `data_construction_open_release_recipes` track, the strongest use is as a provenance-first design and audit pattern, not as a ready-to-train dataset release.

**Construction planning.** Before mixing two datasets, trace their upstream families and avoid selecting a source together with a derivative or superset. Use the graph to identify high-reuse ancestors, then run content checks only on the implicated paths. This can reduce the search space, but it does not replace record-level deduplication.

**Contamination and rights audit.** If a benchmark or restrictive source appears upstream, enumerate all reachable descendants and prioritize them for exact, near-duplicate, and semantic checks. Carry license and source-document evidence along edges as audit metadata. The paper demonstrates path tracing; adding rights propagation would be a downstream extension, not a reported feature.

**Reproducible release design.** A stronger implementation should publish a versioned edge ledger with evidence snapshots, reviewer decisions, confidence calibration, graph checksums, and accepted/rejected edges. Any constructed row should retain source dataset and record IDs, transformations, deduplication outcomes, and split assignment. This turns a graph-level hypothesis into a record-level release ledger.

**Controlled experiments.** Compare random source sampling, downstream-mixture sampling, and leaf-guided sampling at fixed unique-instruction count, verifier, optimizer, and compute. Evaluate answer correctness and downstream training alongside diversity metrics. Such an experiment would test the paper's construction hypothesis rather than assuming larger embedding dispersion means better training data.

Reuse class: the code and released JSONL graph outputs are suitable as a reading, audit, and reconstruction starting point after pinning commit `681db3ab13eaa4391025d6c4b86ed5b58b73988e`. The reported 570K corpus is blocked for training reuse because no immutable corpus, license, split, checksums, or record-level lineage was verified. The project should not be treated as an evaluation benchmark with a fixed hidden test.
