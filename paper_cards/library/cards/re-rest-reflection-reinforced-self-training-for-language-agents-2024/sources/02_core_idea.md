Builds self-training episodes from an agent's initial output, external feedback, reflector revision, and refined trajectory.

The agent generates an initial trajectory; a reflector rewrites weak samples using the trajectory and external feedback. The feedback contract is: External feedback such as code unit-test results, plus reflector-generated revisions. The terminal condition is: The refined trajectory meets the task-specific success or quality criterion.
