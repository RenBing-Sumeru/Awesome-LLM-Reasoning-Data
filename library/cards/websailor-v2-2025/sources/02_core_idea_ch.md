WebSailor-V2 的核心变化，是把 topology-aware 合成任务生成与 simulator-to-live-web post-training loop 结合起来。V2 围绕 seed entity 扩展刻意稠密且含环的连接，用 random walk 采样 connected subgraph，通过 Weisfeiler-Leman 检查结构非同构，并让问题焦点分布到不同 orbit-node 角色。最终稿明确列出 semantic ambiguity、可信 distractor noise，以及针对 bridge 或 cut vertex 的 structural constraint 三类不确定性机制（论文 §§3.1–3.4）。

所得对象不只是 QA 行。SFT 样本是一个成功 ReAct 解答，包含反复出现的 thought、action、observation 和 final answer；RL 样本则是当前策略按相同交互格式生成的 episode，环境为离线 Wikipedia 工具或受管真实工具服务。Search、Visit、Google Scholar、Python interpreter 和 Final Answer 共同定义 action surface（论文 §2；Appendix B）。

反馈契约是最大的未决边界。定制 GRPO 目标使用每条 episode 的 reward `R_i` 和 leave-one-out group-relative advantage，但论文没有定义 `R_i` 的计算方式，也没有给出 rule、judge、答案等价测试或校准方案。benchmark accuracy 使用 LLM judge，不等于训练 reward 也使用同一机制。因此 Card 记录 `verification_contract: unknown`，且不把 `training_use` 扩大到 RLVR。

相对 WebSailor-V1，V2 改变了图密度和采样方式，扩展了不确定性类型，从 72B dense model 换为 30B-A3B MoE，把 context 从 32k 提高到 128k、ReAct 上限提高到 100，并增加离线/真实双环境。V1 的 20 行 QA 样例、推理代码和 WebSailor checkpoint 都是 V1 artifact，不能用来填补 V2 的发布缺口。
