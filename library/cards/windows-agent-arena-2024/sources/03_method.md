Typical inputs include a user goal, current GUI/OS/mobile state, and available actions. The pipeline initializes an environment, lets the agent observe state, executes click/input/navigation/tool/script actions, records intermediate states, and scores outcomes with WindowsAgentArena task validators and Windows VM evaluation harness.

Outputs include task outcomes, trajectories, state transitions, action logs, score records, and artifacts needed for reproduction. Artifact entry points: paper: https://arxiv.org/abs/2409.08264; project: https://microsoft.github.io/WindowsAgentArena; code: https://github.com/microsoft/WindowsAgentArena; data: https://github.com/microsoft/WindowsAgentArena.

Reproduction requires pinning release, device/OS/emulator, dependencies, data split, evaluation scripts, and judge/scorer versions.
