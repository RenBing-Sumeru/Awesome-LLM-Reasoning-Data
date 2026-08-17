1. **Text-to-SQL SFT:** Fine-tune on the 89,544 full set or the 67,570 SELECT-only subset and evaluate execution accuracy on held-out databases.

2. **RLVR rewards:** Combine SQL execution, result equivalence, and structural constraints, separately labeling errors and empty outputs.

3. **Retrieval augmentation:** Train masked-alignment retrieval for structurally matched examples while preventing target-benchmark SQL-skeleton leakage.
