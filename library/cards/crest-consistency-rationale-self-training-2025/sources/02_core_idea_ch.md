CREST 为每条生成 rationale 构造两种标签。原题答案分数 `z` 是二元值:模型读取问题与该 rationale 后,以贪心解码给出选项;若它等于数据集标签,则 `z=1`。对于原题预测正确的候选,方法再提出 `F` 个 yes/no 问题,每个原题选项对应一个。只有标签选项的正确回答是 yes,其余选项都应回答 no;`z_tilde` 是这 `F` 个判断中与标签一致的数量。

每题 16 条 rationale 是候选 trace,不是 16 道独立问题,也不是对最终答案做 16 次投票。聚合前的评分对象还具有选项粒度:ReClor 通常产生四个二元结果,CommonsenseQA 产生五个,ARC 大多为四个,也有少量五选项记录。公开实现只在 `z=1` 过滤后计算这些探针,因此原题预测错误的 rationale 只有 `z`,没有 `z_tilde`。

SFT 与 DPO 对这些标签执行不同转换。SFT 在 `z=1` 且 `z_tilde >= F-t` 时保留 `(question, rationale, gold answer)`;`t=0` 要求所有选项探针都正确,更大的 `t` 则会有意接纳已知漏判。DPO 首先构造 `P_z`:同一题中 `z=1` 的 rationale 优于 `z=0` 的 rationale。随后单独构造 `P_z_tilde`:只有两条 rationale 都满足 `z=1` 且一方的 `z_tilde` 严格更高时才形成偏好;同分不配对。

最终 DPO 数据流随机混合两个池。论文举例:若 `lambda=0.4` 且需要 10,000 对,则从 `P_z_tilde` 抽取 4,000 对、从 `P_z` 抽取 6,000 对;总对数由最大训练步数乘 batch size 决定。因此,`z_tilde` 是由标签派生的标量奖励与排序信号,不是学习式 reward model、形式化 verifier 或步骤级过程标签。
