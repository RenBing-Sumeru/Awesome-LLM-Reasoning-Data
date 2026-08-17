1. **Test toxicity and distinguishability:** Generated tests may reject correct patches, while regression suites may let most candidates pass; the paper observes low distinguishability for execution verifiers. Tests should be checked on gold, incorrect, and human alternative patches.

2. **Learned-verifier bias:** Execution-free models may rely on long reasoning, style, or model identity rather than code semantics and may prefer their own trajectories. Provide minimal information and calibrate with cross-model and adversarial candidates.

3. **Data lineage:** Back-translated issues may not match original developer intent, and public repositories may overlap with SWE-bench. Deduplicate by repository and commit, freeze images, and distinguish the paper’s 8.7K count, the 7,478-record V1 release, and the 4,578-record subset.
