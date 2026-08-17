1. **Inherited WikiSQL simplicity:** Single-table queries and small schemas remain far from real enterprise databases.

2. **Automatic-repair risk:** Some questions allow multiple interpretations, and rule-based fixes may alter intent; change logs and manual audits are needed.

3. **Execution-equivalence boundary:** Incorrect SQL may produce the same result on a particular sparse table. Multiple database instances or structural checks are needed to reduce accidental equivalence.
