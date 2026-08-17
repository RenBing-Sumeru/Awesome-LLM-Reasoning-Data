按不同答案筛选可能选中表面变体或多个错误假设，也不是最优多样性目标。论文与仓库文档在 unique-answer 和 embedding-based selection 上存在差异，因此必须记录确切实现谱系。采样 10 个候选也比五 agent 基线增加测试时成本。

Self-consistency 目标由模型产生，不是人类概率。置信仍可能失准，或放大自信但错误的 agent。由于 agent 学会只输出最终答案，作者加入 engagement 奖励；按 `agent`、`agree`、`skeptical` 等词奖励，可能诱发没有实质互动的词汇投机。理论假设同质 agent 与简化更新；实验局限于全连接五 agent 英文 QA。

完整候选池、被拒候选、题目清单、种子、逐轮奖励向量、adapter 和辩论轨迹未作为质量审计语料发布。论文称已检查许可，但仓库中的可复用代码/对话条款未核验。Benchmark 增益不能证明来源或对话质量。

