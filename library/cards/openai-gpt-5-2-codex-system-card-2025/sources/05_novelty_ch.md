早期 Codex 披露已经说明模型在编码任务上进行 reinforcement learning，并使用合成或扰动的安全环境，但没有公开一个具体、类似并发编辑的状态干预。本报告提高了披露粒度：user model 在 RL 期间修改同一个持续变化的工作区，而保留这些修改被明确为正向强化条件。因此，新的数据对象不只是 prompt-response pair；它还包含工作区状态、另一参与者的编辑、编码 agent 后续动作和 episode-level 保留判断。

报告还把该训练披露与内部 PR 评测严格分开。后者包含人工编写的 prompts、tests 和 hints、PR 前仓库状态、命令行与 Python 动作，以及 hidden-test 成功条件。这一区分很重要，因为编码智能体工作中常会默认 executable tests 就是训练 reward；本报告只支持它们作为评测 verifier，而训练检测器仍为 unknown。

Reinforcement learning、hidden tests、context compaction、sandboxes 和 safety training 本身都不是新组件。真正的方向信号，是把并发用户工作明确视为 RL 安全目标，并披露多个 environment-level 评测 predicate。复用之前仍需核验 user-model policy、冲突类型、保留检测器、奖励交互、仓库权利、轨迹保留、split 成员关系和版本化环境 stack。
