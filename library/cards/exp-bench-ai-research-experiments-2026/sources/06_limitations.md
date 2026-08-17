1. **Resource sensitivity:** Training experiments depend on GPUs, runtime, and random seeds, so timeouts may be mistaken for research-capability failures. Reuse must report resource budgets and variance across runs.

2. **Task fidelity:** Semi-automated extraction can simplify hypotheses or omit implicit configurations, and human review cannot fully prove equivalence to original experiments. Paper-to-task lineage and review records should be preserved.

3. **Subjective evaluation:** Design and analysis cannot be fully programmatically graded, so some scoring relies on rubrics or judges. Important conclusions require human audits and should not be conflated with execution scores.
