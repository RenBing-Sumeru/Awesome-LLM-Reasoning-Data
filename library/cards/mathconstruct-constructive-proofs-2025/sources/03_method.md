1. **Select construction problems:** Competition problems are chosen when the answer is not a fixed scalar and can be represented as a finite structure. Statements are normalized and a machine-parseable output format is defined.

2. **Implement verifiers:** A parser and checker are written for each problem to validate object size, element ranges, distinctness, relational constraints, objective values, or optimality. Reference and random valid answers provide positive tests, while intentionally corrupted answers provide negative tests.

3. **Generate parameter variants:** New instances are generated for problems with variable size or parameters, and the checker is run under those parameters. Original and variant performance are reported separately to test robustness.

4. **Evaluate models:** Models produce constructions and explanations, objects are extracted from final text, and success requires every checker condition to pass. Parsing failures are tracked separately. Reproduction requires fixed benchmark versions, sample counts, parsing rules, and timeouts.
