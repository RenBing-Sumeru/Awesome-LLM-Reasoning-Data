CodeScout 对本图谱的创新点，并不是 terminal search、patch 解析、F1 或强化学习中的任何一项单独成立。关键在于把轻量仓库定位环境、多粒度程序化终点 verifier、当前策略的多次尝试，以及同时保留成功与零奖励同组轨迹的完整对话发布组合起来。

相对于面向修复的 agent 数据，该任务刻意停在代码编辑和测试执行之前。这样可以降低环境搭建成本并隔离搜索行为，但也缩窄了奖励所认证的内容：命中 gold patch 修改过的位置，不等于产生正确修复。`LocalizationFinish` schema 让文件、class/module、function/entity 三层终点预测可被机器检查，却不声称中间推理逐步有效。

相对于成功筛选的 rejection-sampling 语料，直接 4B/14B artifact 保留负面结果。**8,281 条零奖励行**、两个 configuration 合计 2,317 个 mixed group 和 745 个全零组，公开了同一任务内的差异与重复失败。独立的 1.7B RFT 阶段属于常见的成功筛选，必须分开分析；公开训练 rollout artifact 的特色在于没有把直接 RL 的证据压缩为满分子集。

相对于只描述在线 rollout 却只发布 prompt 或 aggregate curve 的论文，CodeScout 提供完整 terminal conversation 与分解后的终点奖励，从而支持命令级行为分析、奖励分量研究与尝试组对比。但它仍没有达到 replay-grade ledger，因为对话没有连接到精确仓库状态、gold target、策略 checkpoint、随机种子、停止原因或 loss mask。

精确四轮辅助项还让反馈契约可以按组成部分审计，而不是只看到一个不透明总分。研究者可以通过公开字段把定位证据与交互长度 shaping 分离。与此同时，turn bonus 可以在定位错误时独立为正，因而不能被当作更强的 verification，也不能证明四轮搜索一定高效。

对于 **Rollout, Search, and Test-Time Trace Data**，最有价值的概念贡献是：失败与 mixed attempt group 本身就是可发布的研究对象。它们允许研究选择、梯度暴露、verifier 失败和 rollout 预算等问题，而这些问题无法从最终 checkpoint 或 best-only 轨迹回答。论文 benchmark 表现并不能建立这一新意；真正的依据是已发布 schema 与核验过的行/组分布。
