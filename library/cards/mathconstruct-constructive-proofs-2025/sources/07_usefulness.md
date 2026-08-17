1. **Verifiable mathematics evaluation:** Report success separately on original and parameterized variants under a fixed version and preserve verifier errors, formatting errors, and failed constraints.

2. **RLVR:** Use passing every checker condition as terminal reward and the number of satisfied constraints as diagnostic feedback. Training tasks can come from the same generators but must remain separate from the official 127 problems.

3. **Data-expansion template:** Reuse the specification, output schema, parser, constraint checker, and variant generator to construct new domains. Tasks without reliable programmatic verification cannot directly adopt MathConstruct’s binary reward and require proof assistants, solvers, or human audits.
