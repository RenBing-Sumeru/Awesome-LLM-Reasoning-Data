1. **Python/pytest scope:** Eleven repositories do not represent Java, C++, distributed, or GUI testing. Transfer requires language-specific runners, fixtures, and mutation tools.

2. **Metrics are not complete oracles:** Coverage rewards executed paths, while mutation score depends on selected mutation operators; both may favor redundant or superficial tests. Audits should include real bugs or human defect-detection judgments.

3. **Code leakage and environment drift:** Open-source repositories may appear in pretraining corpora, and dependency versions can decay. Comparisons must freeze commits and images and separately report execution failures, contamination, and duplicate tests.
