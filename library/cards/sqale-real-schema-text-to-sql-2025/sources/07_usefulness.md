1. **Text-to-SQL training:** Fine-tune models on schemas, questions, and target SQL, and construct curricula by table count, foreign-key count, or join length. Success should be measured by execution accuracy on unseen schemas rather than string match alone.

2. **RLVR:** Execute generated SQL against fixed database instances and construct layered rewards for parsing, execution, and result equivalence, while recording timeouts, empty results, and runtime errors separately.

3. **Data auditing:** Compare SQaLe with Spider and BIRD by schema complexity and query operators to determine whether gains reflect real structural generalization. The corpus cannot directly replace enterprise logs for tasks involving real business values, permissions, or multi-turn clarification.
