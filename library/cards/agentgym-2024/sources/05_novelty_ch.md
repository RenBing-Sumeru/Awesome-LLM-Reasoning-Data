既有基线分成两类：evaluation-only agent suite，以及只探索较窄或单一环境的训练方法。AgentGym 的变化是把统一交互框架、benchmark suite、发布轨迹和可训练 checkpoint/method 组合到同一系统中。

方向信号是环境反馈与数据构造之间的闭环：同一平台可以评测 agent、收集轨迹，并用多轮反馈训练或改进 agent。质量信号包括 ACL 2025 正式发表、官方项目发布、明确的任务/环境数量、公开代码，以及 AgentEval 和 AgentTraj-L 等命名工件。

不新的部分包括 ReAct prompting、behavioral cloning、reinforcement learning 思路，以及许多导入环境，如 web、文字游戏、具身、工具使用、编程或数据库任务。复用前应检查原始环境许可证、数据 lineage、训练/评测 split 边界、reward false positive、最大轮数策略和公开任务污染。
