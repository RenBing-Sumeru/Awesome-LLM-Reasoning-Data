1. **Build logic trees:** Extract entities, operations, and constraints from schemas, foreign keys, and table values to represent compositional user intents.

2. **Synthesize multi-turn tasks:** An LLM follows the tree to generate evolving requests covering queries and data manipulation.

3. **Execute, verify, and refine:** Run SQL in isolated databases and compare expected results or state; failing records are revised or removed.

4. **Expert confirmation and evaluation:** Humans audit final trajectories, and a simulated user–agent–database environment computes turn accuracy, overall accuracy, and strict Pass^5. Reproduction must freeze database snapshots, transaction isolation, and user simulators.
