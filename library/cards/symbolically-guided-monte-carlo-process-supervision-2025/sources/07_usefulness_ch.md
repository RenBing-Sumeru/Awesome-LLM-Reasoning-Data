对本 track 而言，该 Card 是记录搜索生成训练数据的一份具体模板：应保存前缀、completion 预算、completer 模型、terminal predicate、硬标签、PRM 概率、聚合规则、接收阈值、被拒候选以及计算成本。它可支持以下受控比较：答案可达标签与形式步骤验证、全正 rejection sampling 与较软筛选、概率乘积与经校准或长度归一化的轨迹价值。

已发布步骤标签可用于 PRM/过程监督实验，SFT 和 DPO 数据可在其 CC BY-NC-SA 4.0 元数据所允许的非商业研究范围内使用。不过，复用仍有条件：训练前需要核验上游来源条款、重建样本谱系、执行污染检查，并修复及固定代码版本。这些 artifact 不应作为评测集，因为它们是由 benchmark 训练问题形成、且只提供 train split 的衍生数据。

当前最安全的复用等级是**研究与审计参考，可在满足条件后训练复用**，而不是开箱即用的端到端配方。它尤其适合在自行保留原始候选池和失败续写的前提下做消融，因为官方发布没有这些对象。没有证据支持把它用作 RLVR、online RL 或测试时推理数据；有证据的用途仅限 PRM/reward modeling、过程监督、SFT 和 DPO preference learning。
