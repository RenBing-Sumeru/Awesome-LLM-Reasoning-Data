1. **Synthetic naturalness:** Automated pairing of taxonomies and behavioral graphs can produce formally valid but awkward entity–property combinations. Solver validity concerns internal consistency, not real-world truth. Human semantic-naturalness audits are needed.

2. **Evaluation-scale mismatch:** The release has over 372K tasks, but model experiments use much smaller Level 2 and Level 3 samples; DeFAb-Hard has 235 tasks, and some Level 3 analyses use even fewer. Small evaluation gaps cannot be extrapolated directly to the full corpus.

3. **Rendering and source bias:** Four templates and 18 knowledge bases still impose fixed vocabulary and structure, enabling template or source-fact learning. Splits should hold out sources and entities, report each rendering, and audit upstream licences and lineage despite the aggregate MIT release.
