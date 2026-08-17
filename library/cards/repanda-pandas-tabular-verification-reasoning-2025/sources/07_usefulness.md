1. **Tabular fact verification:** Train a model to generate pandas_code and use sandboxed execution rather than a text judge for entail/refute decisions, reporting both execution rate and label accuracy.

2. **Structured RLVR:** Reward executable programs whose outputs match the answer, with separate syntax, resource, and safety penalties. Fix the pandas version and DataFrame parser before training.

3. **Interpretable auditing:** Expose generated queries to analysts for checking row selection and aggregation. Extend the execution language for multi-table joins or open-text evidence.
