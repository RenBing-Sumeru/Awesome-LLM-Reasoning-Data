对于 **Data Construction and Open Release Recipes** track，rStar-Math 既可作为模块化 recipe，也可作为发布审计案例。

1. **重建 search-to-SFT baseline。** 实现题目/参考答案读取、逐步 policy 生成、累积 Python 执行、terminal answer 等价检查、MCTS 反向传播和按 Q 排序的正确轨迹提取。论文默认预算与已检查公开配置应先视为两个不同变体，直到差异得到解释。
2. **构造 process-preference 数据。** 只在同时有正确与错误结果的搜索树上形成共享前缀比较，并保留每个候选的 terminal reachability、Q、margin、编辑距离、policy/checker 版本与搜索预算。这些字段用于诊断学习到的偏好反映局部推理，还是搜索运气。
3. **比较反馈契约。** 在生成和推理预算匹配时，对 runtime filtering、terminal checking、直接 Q regression 与 PPM pairwise ranking 做消融。应报告 false accept/reject，不能把代码可执行或 benchmark accuracy 当作 verifier calibration。
4. **设计更强的开放发布。** 发布 canonical prompt manifest、来源/许可映射、原始搜索树拓扑、访问次数、Q-value、执行日志、拒绝分支、轮次/seed/预算字段、筛选 ledger、checkpoints 与不可变配置。现有扁平 schema 恰好显示了缺少这些字段会丢失什么。
5. **审计迭代反馈循环。** 跟踪 policy 更新是否改变被探索的分支，以及 PPM 偏好是否保留早期轮次的捷径；同时显式记录 train/evaluation overlap 与来源题目对 benchmark 的复用。

已核验的代码与数据使该工作适合作为 recipe 和 artifact 检查起点。复用等级为 **partial/conditional**：公开 SFT 与 PPM 记录可直接加载，可用于 policy SFT 和 pairwise reward/process-model 训练；但在来源级许可衔接、去污染证据和逐条 lineage 补齐前，不适合高保证训练复用。现有发布不足以做树级复现，报告分数应作为集成系统证据，而不是数据质量证书。
