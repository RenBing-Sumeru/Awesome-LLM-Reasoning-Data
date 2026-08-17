Tool-using agents can produce a fluent explanation while calling a wrong function, using invalid arguments, or ignoring an available tool result. Terminal success alone is sparse, while generic preference judges may not understand the schema and execution constraints of a tool trajectory.

ToolRM asks how reward modelling can evaluate tool use with feedback tied to executable interactions. It represents the target as a preference between trajectories whose calls and observations can be checked against task-specific rules and reference behaviour.
