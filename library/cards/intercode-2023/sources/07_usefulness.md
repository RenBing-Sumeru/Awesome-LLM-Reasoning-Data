Use InterCode as a recipe for coding-agent trajectory records. Preserve task id, environment id, initial state, observation, action, execution output, error message, step number, time budget, final predicate, reward/score, and runtime version.

It is useful for evaluating command-line agents, SQL agents, debugging agents, and coding scaffolds that rely on iterative tool feedback. It also provides an audit checklist for any benchmark that claims execution-grounded agent capability.

For atlas work, it bridges benchmark/evaluation surfaces with environment-agent trajectory data. The key reusable insight is that intermediate execution feedback must be first-class data, not just hidden evaluator machinery.
