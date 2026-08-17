在人类评测任务上，成功率从 SIMA 1 的 33% 提升到 SIMA 2 的 65%；自动评测任务从 30% 提升到 66%。同超时人类分别为 76% 和 78%，无超时人类两类均为 86%。但人类比较受短 agent 超时和代表性子集限制。

在 held-out 环境上，SIMA 2 相对 SIMA 1 在 ASKA 提升 12 个百分点，在 MineDojo 提升 13 个百分点。MineDojo 覆盖 50 任务×15 种子=750 个 task-seed 配置；SIMA 2 在 50 类中成功 26 类，SIMA 1 为 2 类。这证明环境级迁移，但不能证明 base Gemini 没接触过公开游戏或 Minecraft 内容。

具身后训练没有统一保留基础推理：相对 base Gemini，SFT/SFT+RL 在 LiveCodeBench 为 -4.0%/-8.4%，AIME 为 -25.5%/-15.4%，GPQA Diamond 为 -16.3%/-19.5%。ASKA 与 Genie 3 自改进展示较大精选增益，但任务数、代数和统计不确定性未公开。
