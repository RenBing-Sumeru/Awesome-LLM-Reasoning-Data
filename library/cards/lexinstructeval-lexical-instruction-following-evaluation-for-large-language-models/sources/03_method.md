1. **Design the formal grammar:** Encode each requirement as one or more `Procedure–Relation–Value` triplets. Procedure locates text hierarchically, while Relation and Value define numeric or string constraints.

2. **Filter conflicting combinations:** Enforce type safety, canonical representation, and relation-applicability rules during generation, removing contradictory, unverifiable, or redundant constraints.

3. **Generate and grade:** Start from Infinity-Instruct topics, render structured rules with templates, and score difficulty from path depth, predicate, relation, value, and constraint count.

4. **Dual quality control and verification:** Qwen3-235B-A22B screens wording and contradictions, experts review every instruction, and the verifier performs element isolation, target transformation, and rubric adjudication.
