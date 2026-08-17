The contribution is a domain-expert benchmark that turns practical biology research operations into auditable multiple-choice tasks. The core mechanism is a mix of manually authored expert questions and programmatically generated tasks, with public examples plus a retained private subset for contamination monitoring.

Each data object is a question with task/category metadata, choices, an official answer, and in some categories long biological text, tables, figures, protocols, or DNA/protein sequences. The feedback contract is exact answer scoring and reported model precision/accuracy under the authors' prompting and evaluation settings.

Closest comparisons are general science QA, GPQA-style expert QA, and Bio/medical benchmarks; LAB-Bench differs by emphasizing research workflow objects such as protocols, database records, figures, tables, and sequence manipulations. The direction label is domain-expert evaluation surface with contamination-aware release.
