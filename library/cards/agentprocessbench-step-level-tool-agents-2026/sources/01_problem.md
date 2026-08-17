A tool-using agent usually receives only a terminal failure label, which cannot distinguish reasonable exploration, temporarily unproductive actions, and actions that actually damage the task. Later failures can also cause evaluators to mistake symptoms for the original cause.

AgentProcessBench expands tool trajectories step by step, asks humans to label actions as correct, exploratory-neutral, or erroneous, and determines the earliest error through an error-propagation rule, specifically evaluating whether step verifiers identify when failure begins.
