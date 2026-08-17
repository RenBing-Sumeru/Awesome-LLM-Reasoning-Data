1. **One-sentence position:** Multi-SWE-bench releases 1,632 expert-verified tasks across seven languages plus 4,723 Multi-SWE-RL training instances.

2. **Method takeaway:** Repository and PR selection, container building, base/test/gold three-state execution, and cross-review by 68 experts are central to quality.

3. **Data takeaway:** Each task includes an issue, commit, gold and test patches, F2P/P2P tests, logs, and an environment; benchmark and RL artifacts must remain separate.

4. **Evidence anchor:** 2,456 candidates are reduced to 1,632, and model results vary sharply with language, patch length, and file count; long tasks are solved at about half the rate.

5. **Reuse decision:** It suits multilingual SWE evaluation and RL. Difficulty confounding, test blind spots, and public-PR contamination require stratified reporting and temporal deduplication.
