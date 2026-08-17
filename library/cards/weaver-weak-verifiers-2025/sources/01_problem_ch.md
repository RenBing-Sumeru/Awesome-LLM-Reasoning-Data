重复采样把“生成覆盖”与“选择成功”分开。对一个具有 K 个候选的查询，Pass@K 只判断候选中是否存在正确答案，而最终成功率还要求验证策略确实选中正确候选；二者之差就是 generation-verification gap。论文研究的场景是：正确回答往往已经生成，但单个 reward model、LM judge、多数投票或无权集成仍不能稳定识别它。

现实约束在于通用 verifier 异构且较弱。Reward model 输出尺度和训练损失不一致的连续分数，LM judge 输出二值判断，而且单个 verifier 的准确率会随任务与候选分布变化。有监督加权可以利用这些差异，却需要带标签的 query-response；对每个候选调用数十个 verifier 又成本很高。Weaver 因而研究：能否仅依据无标签候选上的一致性统计估计 verifier 可靠性，用于回答选择，并进一步压缩该集成。

对本 Atlas 而言，主要对象不是单独的 benchmark 分数，而是一条重复采样决策记录：benchmark query、候选回答、各 verifier 的分数或投票、归一化与阈值、拟合的 verifier 错误参数、后验正确性分数和最终选择。其主要边界是测试时选择与 verifier distillation，而不是生成模型的 post-training。
