A long agent episode may contain many downstream symptoms after one early mistake. Flat error enumeration therefore does not identify which decision caused terminal failure or what feedback would permit recovery. The work separates AgentErrorTaxonomy, AgentErrorBench, and AgentDebug.

The reusable data object is a failed environment episode augmented with decision-step module text, error labels, a minimal critical root cause, supporting evidence, corrective feedback, and subsequent re-rollout outcome. The official repository links a 200-episode AgentErrorBench release; this is distinct from the larger pool of more than 500 failures examined while forming the taxonomy.

