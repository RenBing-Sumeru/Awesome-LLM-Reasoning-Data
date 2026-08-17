该贡献是一套四层整合工作流，而不是单一新数据集。Atomic-source Tracing via Lineage-Aware Search（ATLAS）把公开 RLVR 记录规范化为最终问答对，按时间用 SHA-1 索引精确提示复用，再以 Sentence-BERT 检索配合作者审查恢复变换后的匹配，并迭代加入候选来源。其预期输出是带出现列表和原子来源归属的谱系字典。

SCA 把每个原子来源视为干预单元。对来源 s，共享 base checkpoint 与在 s 上训练的 checkpoint 进行比较，来源内实例被赋予四类二元正确性转移：00 表示训练前后均失败，01 表示来源特定 RL 后变正确，10 表示退化，11 表示两者都正确。这些是受模型和 checkpoint 条件约束的可学习性标签，不是固定不变的数学质量标签。

分数 Q 组合三个维度：S1 包含答案一致性与可验证性、MCQ 和复用惩罚、SCA 可学习性、多样性与污染等静态属性；S2 用 Math500 Mean@4 表示采样效率；S3 用 Math500 Pass@4 表示能力边界。Q 用于数据集排序，既不是 Math-Verify rollout 奖励，也不是认证单条记录的 judge。

DAPO++ 把审计转化为构造动作：从 DAPO-Math-17k 删除检测到泄漏的记录，再随机加入被 SCA 标为可学习的非 MCQ Stack Exchange 记录。仓库公开最终 17,000 行提示与标准答案文件，但没有公开每条保留或插入记录背后的完整证据链。
