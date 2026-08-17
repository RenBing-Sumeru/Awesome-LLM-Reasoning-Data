1. **Checker correctness is a single point of failure:** Missing constraints, incorrect optimality checks, or parser–statement mismatch can accept invalid constructions or reject valid ones. Mutation testing and independent manual review are required.

2. **Small and heterogeneous:** The 127 tasks span many structures, but each category is small and aggregate percentages may be dominated by a few types. Per-problem and per-category results should be reported.

3. **Format sensitivity:** A model may derive a valid object but fail the required format. Reasoning failures should be separated from extraction failures, and permissive LLM repair should not silently modify answers.
