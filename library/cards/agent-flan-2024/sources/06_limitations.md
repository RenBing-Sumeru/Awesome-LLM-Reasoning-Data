1. Author-stated limitation: training and validation cover only part of the agent landscape, so the balance learned on seven source families may not transfer to new action spaces. Reuse should add held-out tool schemas and environments before fixing the mixture weights.

2. Author-stated limitation: only roughly 20,000 valid ToolBench samples, about ten percent of that source, are used for quality. Reuse should report API-category coverage and compare against a larger, equally filtered subset.

3. Curator audit risk: negative templates can teach superficial cues for whether tools exist, while inherited traces retain teacher errors and source terms. Reuse should adversarially paraphrase negative cases and audit record-level lineage rather than trusting Agent-H alone.
