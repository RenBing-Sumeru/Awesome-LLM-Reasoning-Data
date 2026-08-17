Primary source: the arXiv paper "Mobile-Agent: Autonomous Multi-Modal Mobile Device Agent with Visual Perception" (2024), accepted to the ICLR 2024 Workshop on Large Language Model Agents, plus the official X-PLUG/MobileAgent repository. The problem is how a multimodal agent can operate real mobile apps from screenshots without relying on system XML files or app-specific APIs.

This belongs here as a mobile GUI-agent environment and evaluation surface, not as a general desktop OS benchmark or a reusable RL training dataset. A data object is a task instruction, phone screenshot or visual observation, predicted operation, execution trace, and Mobile-Eval outcome.

The feedback contract is task-level and trajectory-level evaluation on Mobile-Eval, including success rate, progress score, relative efficiency, and completion rate. It is useful to the atlas because it exposes visual perception, action grounding, and mobile-environment drift as first-class audit risks.
