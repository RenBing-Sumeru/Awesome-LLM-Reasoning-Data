1. Inputs: GH Archive public GitHub events from April 1 to October 7, 2025, agent-specific signatures or links, public repositories, commit hashes or PR base/head hashes, and natural-language descriptions written by agents.
2. Identification: detect Claude Code through co-author signatures, Codex through PR descriptions linking to Codex tasks, and Cursor Agent through commit author signatures; manually inspect a small random sample to check attribution.
3. Collection: shallow-clone repositories with identified activity, fetch git patches, and merge code-change content with event metadata.
4. Filtering/formatting: remove dependency-originated changes such as node_modules, parse patches into previous and updated file contents or ellipsis-separated hunks, omit over-budget training examples, and prepare prompt/completion pairs.
5. Outputs: dataset records for code editing, corpus statistics by agent/language/task type, a classified sample of task categories, and fine-tuning subsets for Python and JavaScript.

The verifier layer is mixed: provenance checks and manual spot checks support attribution; public merge/commit history is an implicit human filter; HumanEvalFix and CanItEdit pass@1 evaluate downstream usefulness. There is no disclosed per-item execution oracle for every mined edit.
