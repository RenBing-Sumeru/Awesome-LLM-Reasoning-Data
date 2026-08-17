Step 1 -- Assemble and balance tasks.
Input: Public training instances from 16 tasks in five skill dimensions.
Operation: Map each task to a continuous or discrete action space and downsample oversized sources.
Output and transition: A balanced instruction pool enters action recovery.
Check / stop rule: Preserve all five skills and task-native evaluation access; otherwise exclude the source.

Step 2 -- Recover gold action sequences.
Input: Instructions, environments, optional gold answers, and any existing solution traces.
Operation: Use GPT exploration, iterative answer forcing, environment-state heuristic search, or trajectory reformatting according to task type.
Output and transition: Executable gold action sequences enter rationale annotation.
Check / stop rule: Execute actions and retain only paths that meet the task-native correctness or reward predicate.

Step 3 -- Add per-action rationales and serialize episodes.
Input: Each instruction, gold action sequence, and associated observations.
Operation: Prompt GPT-3.5-Turbo for a rationale before each action and convert the result to a chatbot sequence.
Output and transition: 51,287 rationale-action-observation trajectories enter mixture construction.
Check / stop rule: Every action must retain the correct order and observation context; malformed or mismatched paths are rejected.

Step 4 -- Train and evaluate SAMOYED.
Input: AGENT BANK plus low proportions of general instruction and code data.
Operation: Mask user and observation tokens, optimize only agent response tokens, and test nine held-in and five held-out tasks.
Output and transition: SAMOYED checkpoints and task/trajectory scaling evidence.
Check / stop rule: Report both held-in and held-out averages and compare mixture ratios; no universal deployment threshold is supplied.

Reproducibility requires pinning the hosted revision, 16 source versions, action-recovery branch, teacher versions, execution images, prompts, mixture ratios, masking rules, and evaluation splits. Teacher cost and exact call budget are not disclosed.
