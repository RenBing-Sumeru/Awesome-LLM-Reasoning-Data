AgentErrorTaxonomy defines 17 error types across memory, reflection, planning, action, and system modules. Ten annotators use it to mark decision steps and identify the minimal root-cause set rather than every cascading symptom. AgentDebug then performs module-level analysis, selects the earliest critical error, writes actionable guidance, and re-executes from that point until success or the attempt limit.

Two feedback contracts must remain separate. ALFWorld, WebShop, or GAIA supplies the environmental terminal outcome. Error type, causal importance, evidence span, and feedback quality require human or LLM judgment. A successful re-rollout can test usefulness of guidance, but does not retroactively prove every diagnostic label correct.

