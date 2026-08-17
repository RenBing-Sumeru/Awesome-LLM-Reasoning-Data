1. **Replicate service interfaces:** Key endpoints from four enterprise APIs are implemented over isolated databases, preserving realistic arguments and responses without external side effects.

2. **Define task state:** Each task initializes users, files, events, or issues from a fixed template and describes the target operation in natural language.

3. **Write diff contracts:** Declarative assertions specify entities that must be added, changed, removed, or preserved without prescribing call order.

4. **Execute and score:** Agents call sandbox APIs through a common scripting layer. The system computes the final state diff, passes only when every assertion holds, and retains call logs for diagnosis.
