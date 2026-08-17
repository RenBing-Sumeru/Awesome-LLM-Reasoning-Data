报告描述了三阶段的智能体 SFT 合成流水线：先建立真实与合成工具 specification 仓库，再针对采样的工具集合生成 agents 和带 rubric 的 tasks，最后生成调用工具的 trajectories。报告称从 GitHub 仓库获取了 3,000+ 个真实 MCP 工具，并合成了 20,000+ 个工具。该系统将可扩展模拟与面向 coding 和 software engineering 的定向真实执行环境结合。

其联合 RL 框架结合了可验证奖励与 self-critique。已披露的约定包括可执行测试、确定性指令检查、LLM judges、hack-check、faithfulness reward model、safety judges，以及使用多类 rubric 做 pairwise ranking 的 K2 critic。报告给出的是阶段级接口，而不是已发布的数据对象或完整 verification 工件。
