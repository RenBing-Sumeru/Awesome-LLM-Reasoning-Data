The paper names this failure the **Small Model Learnability Gap** and measures two forms: a long-CoT gap and a large-teacher gap. It then proposes Mix Distillation as a simple mitigation:

- **Mix-Long** combines long and short CoT records.
- **Mix-Large** combines responses from stronger and weaker teachers.

For the main 3B experiments, each mixture uses a 1:4 ratio, placing 20% weight on long-CoT or large-teacher records. The central data contribution is therefore not a new public corpus but a controlled trace-selection and mixing recipe.
