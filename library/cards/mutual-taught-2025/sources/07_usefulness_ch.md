对于 `data_construction_open_release_recipes` 赛道，Mutual-Taught 最有价值的用途是定义动态偏好谱系。它表明，一条偏好记录可能只在特定迭代、策略 pair 与打分 RM 的条件下成立。下游 schema 应保存提示、当前与上一策略 ID、全部采样候选、chosen/rejected 构造、当前 RM ID 与分数、checkpoint 选择结果、奖励差与标准差、筛选决策、self-training 或 policy-comparison 来源，以及策略/RM 训练步骤。缺少这些字段，就无法重放或审计论文所称的协同适配。

具体研究用途包括：

- 实现交替执行 on-policy DPO 与 Bradley–Terry 奖励训练的 RM 刷新基线；
- 在提示量和生成预算匹配时，对比混合 self-training/policy-comparison 数据与单独使用任一来源；
- 用人类标签、规则 verifier、留出 judge 或校准模型集成替代循环 RM 门控，以测量伪标签错误；
- 比较 LQF、HQS 与 DST，同时报告策略结果与 RM 校准，而不是只报单个 benchmark 分数；
- 用独立偏好审计 checkpoint 选择和 early stopping，不再依赖训练策略的同一个 RM；
- 研究刷新频率、基础 RM 重初始化、长度控制和提示复用如何影响漂移与灾难性遗忘。

安全复现应先建立不可变提示划分和独立留出的 `D_MS`，固定 Llama/FsfairX 模型修订版及 tokenizer/chat-template 版本，记录全部随机种子和生成 token 数，并同时保存接受与拒绝 pair。报告应包含各分数差区间的 pair 产率、人类偏好准确率、RM 校准、奖励分数膨胀、响应长度、judge 分歧和下游任务质量。还应加入冻结 RM 的 iterative DPO、新增人类标注的 RM 刷新、规则锚定刷新作为对照；否则无法把协同适配与额外生成、checkpoint 选择或针对特定 judge 的优化分离。

实际复用等级是：**仅适合作为阅读/审计参考；可执行训练复用在 artifact 核验前受阻**。ACL 论文足以重建预期模块与设置，其迭代退化负结果也有助于设计停止审计；但它不足以精确复现运行或复用公开数据集。论文链接的官方仓库没有可验证的 Mutual-Taught 专用实现或不可变 release，动态训练记录、checkpoint、split manifest、伪标签审计和许可证也都缺失。

不应把这篇论文改写成“合成偏好普遍可以替代人类”“RM 分数就是校准后的正确率”，或“AlpacaEval/RewardBench 更高就证明数据更好”。它在 Atlas 中最强的用途，是作为一个受控案例，追问策略与反馈模型共同定义下一轮训练分布时必须记录哪些信息。
