1. **Evaluate multilingual agents:** Use PB500 for rapid iteration and the full set for final reporting. Output resolve rate, environment failures, F2P/P2P results, and language- and task-type-specific scores.

2. **Train localization models:** Use modified-file, function, class, and CST-node metadata to train repository retrievers or rerankers, then verify whether better localization actually improves repair success.

3. **Analyze failures:** Separate failures into missed localization, correct localization without edits, compilation failures, and test failures. Gold-node precision should not be a hard reward when alternative correct patches are expected, and languages without stable Docker environments and tests should not be added directly.
