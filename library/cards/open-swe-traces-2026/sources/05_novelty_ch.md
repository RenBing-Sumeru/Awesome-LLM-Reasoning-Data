Open-SWE-Traces 在一个公开 episode schema 中结合四项特征：207,489 条轨迹、九种编程语言、两类 agent harness，以及 thinking/non-thinking 双教师模式。Schema 保留对话角色、工具、模型 patch、参考 patch、源代码库元数据和三值 outcome，使复用者可以同时检查行动过程与终局结果。

最关键的设计选择是发布 unresolved 和 outcome 不可用的 episode，而非只保留成功示范。论文进一步比较 resolved-only 与完整数据训练，把一个 curation 决策直接连接到下游行为。完整性流程还针对 agent 特有捷径——修改测试和查看 git 历史——而不只是执行通用文本去重。

同时要保留“哪些部分并非新贡献”。SWE-rebench-V2 提供可执行任务基底，OpenHands 和 SWE-agent 提供交互 framework，MiniMax-M2.5 与 Qwen3.5 提供教师行为，代码库测试提供 outcome 验证。论文的贡献是对这些组件进行多语言、双模式合成、过滤、标准化、发布与蒸馏研究。规模和 benchmark 表现本身不能证明其数据质量必然高于既有软件 agent 语料。
