各 detector family 并非全部由本文首次提出：Min-K%、Canonical Order、Token Completion Overlap 与 Word Perturbation Quiz 都改编自先前工作。论文自身提出的探索性方法是 Local Order，用来检测模型对 dataset adjacency 的记忆。更广义的创新在实验设计：五种异构 probe contract 被放在同一框架下，跨四个现代模型和八个 benchmark 比较，而不是各自在隔离设置中验证。

对数据构造而言，受控 instruction-tuning oracle 是更重要的贡献。它保留 benchmark question，以生成的 chain-of-thought 替换 answer，改变已知新增比例并打包连续样例，从而测试一种不同于原样 pretraining text 的污染形式。before/after 设计让 detector directionality 可被检查，尽管它无法证明 base checkpoint 是干净的。

对本 track 而言，该工作可作为 audit-failure recipe：它展示 benchmark row 如何变成 perturbation quiz、completion pair、likelihood record 或 ordered shard，也揭示审计转换过程必须保留哪些生成物与中间 artifact。与其给出 leaderboard 式 detector 宣称，更有价值的负结果是：这些被广泛接受的方法既不能追踪已知暴露，也不能彼此一致。

创新边界必须保持收敛。这不是通用污染检测器、逐实例 membership ground truth、干净 benchmark release，也不是完整的 oracle-training package。Local Order 本身存在可能重复 true successor 的实现缺陷，oracle 也只控制 newly added exposure。它的贡献是 comparative stress test 与部分公开的 construction recipe。
