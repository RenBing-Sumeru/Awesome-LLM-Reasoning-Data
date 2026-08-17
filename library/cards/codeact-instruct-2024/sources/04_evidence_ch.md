1. 在同为 Mistral 7B backbone 时，CodeActAgent 的 MINT 域内与域外成功率分别为 57.4 和 32.4，而 Mistral Instruct 只有 18.8 和 9.7；在域外 M3ToolEval 上，前者为 12.2，同规模 instruction baseline 为 0.0。这组受控比较支持多轮轨迹对可执行智能体行为的训练价值。

2. 论文报告，相对同 backbone 的 AgentInstruct 与 FireAct 变体，CodeActAgent 的提升分别为 24% 和 119%；通用能力大体保留，Mistral 版本在 MMLU、HumanEval、GSM8K 与 MT-Bench 上分别为 59.1、34.7、58.0 和 8.2。这说明收益能超出源任务，但最佳训练还混入 69,230 条通用对话，不能把全部提升都归因于 CodeActInstruct。
