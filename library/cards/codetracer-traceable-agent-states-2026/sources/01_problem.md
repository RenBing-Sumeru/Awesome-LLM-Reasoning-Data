A coding agent’s final patch may pass some tests while containing wrong tool calls, useless edits, or irreversible state changes. Final success cannot explain where failure began or supervise recovery policies, and existing agent logs often lack consistent step boundaries and human rationales.

CodeTracer introduces CodeTraceBench, manually verifying erroneous and useless steps in coding-agent trajectories and explaining their causes so intermediate agent states can be localized, scored, and used for recovery.
