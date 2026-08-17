对本图谱而言，其区别性贡献是为多轮智能体 RL 明确给出工具环境转移与掩码归因契约。v1 将原子工具执行与 ToolEnv 的状态/奖励/下一状态管理分开，并把动作/损失掩码和优势掩码置于归因中心。因此，它支持比较智能体生成 token 与环境 token 的边界以及最终答案反馈。本卡还记录了一项关键披露经验：框架演化必须受版本约束。当前仓库的 GSPO/StepPO、GAE/token-GAE、GiGPO、Qwen3-4B、ALFWorld、WebShop、Paper Search 和 step-level AgentEnv 都是后续事实，不是 v1 证据。

