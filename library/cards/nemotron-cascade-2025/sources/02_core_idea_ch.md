
一句话概括其贡献：把联合多领域 RL 改为固定级联，并让每个阶段使用专门的数据、rollout 预算与反馈契约。两阶段 SFT 之后，报告顺序为 RLHF -> IF-RL -> Math RL -> Code RL -> SWE RL。训练先处理通用对齐，再进入更窄的可验证领域；需要更长推理或仓库上下文时，再扩展回答或输入预算。

反馈对象随阶段变化。RLHF 由 Qwen2.5-CascadeRL-RM-72B 给出标量分数；IF-RL 检查明确的指令约束，并动态移除无法提供梯度的提示；Math RL 用 AceMath 验证器给出二元答案奖励，同时加入语言切换惩罚；Code RL 执行生成程序，只有通过全部测试才奖励；SWE RL 不执行补丁，而是把 Unidiff 词法相似度与 Kimi-Dev-72B 对人工补丁的语义比较结合起来。

这种分阶段设计正是它进入 `frontier_reports_data_disclosure_ledger` 的原因。与只发布权重的报告相比，它公开了更多反馈链条，并提供 SFT、RLHF、IF-RL、Math RL 与 Code RL 之后的 8B 检查点。重要比较并不是 Cascade RL 是否发明了新优化器——它在 verl 中使用严格 on-policy GRPO——而是领域分离能否让配方与失败面更容易审计。
