Temperature sampling 均匀分配，beam search 集中到最高分候选，DVTS 使用固定子树，REBASE 按 solution-level PRM softmax 分配。DORA 的具体变化是候选数量修正：当许多语义相似候选已经代表同一方向时，它会折扣其中高质量候选，从而无需硬聚类即可近似方向级分配。

其贡献是有条件的资源分配理论与一个基于 PRM/embedding 的实践搜索规则。它不是新推理数据集、新 PRM、新 embedding model、新多数投票规则，也不是任意测试时搜索的普适最优性证明。方向抽象之所以有用，正因为它建立了审计目标：相似度、uniqueness、取整与分数校准是否真的对应所声称的搜索行为。

