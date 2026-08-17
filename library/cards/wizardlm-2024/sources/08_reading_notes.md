1. **Keep:** Evol-Instruct changes the request before generating its answer; the evolution lineage is the central data object.
2. **Use when:** seed instructions are too easy or cover too few task types.
3. **Record:** seed, depth/breadth operator, round, evolved instruction, teacher answer, and filter decision.
4. **Do not infer:** a longer request, a correct final benchmark score, or a GPT-4 preference proves each training answer correct.
5. **Audit first:** pin the teacher and released file, sample operator-specific failures, and compare a matched 70K baseline.
