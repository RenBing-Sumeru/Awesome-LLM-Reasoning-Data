CMCTS 把扩展限制在预定义提示组成的四个互斥动作集合中。understanding 用于提取并组织问题，reflection 检查先前推理，coding 调用 SymPy 等计算辅助，summary 复核路径并输出 boxed 最终答案。初始化从 understanding 开始；summary 用于终止路径，或在达到深度上限时被强制采用；偏序规则会避免连续使用同类动作、要求至少一次 reflection，并按深度和先前步骤限制动作。

选择阶段使用 UCT。在 expansion 和 simulation 中，预训练 Qwen2.5-Math-PRM 通过归一化 positive 与 negative logits，为候选状态—动作对给出 Q 估计，并为状态给出 V 估计。节点 reward 组合 Q 与 V 后回传。多次 MCTS iteration 产生候选轨迹；最终答案由答案频次决定，频次并列时用 terminal reward 裁决。CMCTS-RULE 不使用 PRM，CMCTS-PRM 不使用偏序规则，完整 CMCTS 同时使用二者。

相对 Native-MCTS，主要贡献是结构化动作空间，并在学习型过程反馈之外加入显式转移约束。它属于 Rollout, Search, and Test-Time Trace Data，因为可复用对象是整棵树及其带分数备选分支。只看最终链无法知道哪些动作不可用、哪些分支被剪枝，以及 PRM 与规则如何交互。
