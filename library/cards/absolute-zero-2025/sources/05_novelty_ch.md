论文所针对的既有 RLVR baseline 即使不使用 rationale supervision 或 cold-start distillation，仍从外部提供的问题与 gold answer 分布开始。AZR 改变了这个接口：当前 policy 提出任务，Python environment 验证并补全任务，同一个 policy 再尝试求解，task learnability 与 solver correctness 共同更新 policy。

有三点是具体机制，而不是修辞：

1. **数据分布由系统内部产生。** deduction、abduction 与 induction buffer 从经验证的当前 policy proposal 持续增长，不再依赖固定 RL 任务答案集合。
2. **proposer 获得相对于当前能力的反馈。** 八次当前 policy solver 尝试把观察成功率转成 learnability reward，使 curriculum 与 learner 能力耦合，而不只是按静态难度排序。
3. **一个 programmatic layer 承担多种角色。** executor 检查 proposal 有效性、生成 privileged output、评分 solver terminal，并为 RLVR 提供 grounded environment。

该工作并非分别首创强化学习、self-play、程序执行、PPO 风格 clipping 或 procedural task generation。identity seed、人工任务模板、任务分类、denylist、reward equation 与 optimizer 都由人设计；所有模型还继承预训练数据。因此，“Absolute”描述的是这个 RL 阶段移除了外部任务答案语料，而不是移除了人工选择、既有模型数据或评测数据集。

对推理数据研究而言，方向性变化是从静态 dataset 转向在线、依赖 policy 的 curriculum record。相应地，评估该 recipe 需要演化 buffer、proposal context、solver sample、verifier output、reward、failure 以及模型/检查器版本。当前公开包暴露 seed 与代码，却没有这份 episode ledger，因此 recipe 的新颖性和可检查性高于其数据发布的完整性。
