1. **Preprocess hierarchical RTL:** A BaseJump STL commit is pinned, dependencies, parameters, and instances are expanded, and modules are packaged for standalone formal verification.

2. **Synthesize reference assertions:** An LLM proposes SVA from RTL and specifications; formal-tool feedback on compilation, proof, and vacuity drives iterative repair before artifacts are stored.

3. **Build deep bug data:** Multiple bug types are injected into 28 modules, preserving correct and buggy RTL, natural-language specifications, and mutation lineage.

4. **Run six-axis verification:** Compilation checks syntax, formal engines check non-vacuous proof, and specifications and mutations measure faithfulness, fault detection, and formal-core coverage.

5. **Compare models and agents:** Single-shot and agentic generation are evaluated with fixed RTL, tools, and budgets, retaining per-module metrics.
