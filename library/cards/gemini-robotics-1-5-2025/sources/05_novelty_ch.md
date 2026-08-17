Gemini Robotics 1.5 的特点，是把通常分离的三个数据问题连接起来：跨具身动作迁移、动作前显式语言推理，以及带在线 success detection 的长时程 orchestration。因此，它的数据对象比“instruction–action pair”更丰富，可以同时包含感知、具身、sensor state、语言计划或 thought、连续动作、环境反馈、progress 与 failure type。

Motion Transfer 明确引入了 embodiment 轴。报告不把每个机器人仅当作独立 finetuning target，而是追问 action knowledge 能否在 ALOHA、Franka 与 Apollo 之间对齐和复用。Ablation 与 zero-shot task 设计为迁移提供了证据，尽管机制本身没有充分说明。

报告还给出了物理智能体的具体对抗数据配方：从普通任务生成 prompt attack、scene corruption 与环境扰动，再对正确性和安全性做判断。这把安全审计扩展到对话 red teaming 之外，但生成语料和验证过程仍未开放。
