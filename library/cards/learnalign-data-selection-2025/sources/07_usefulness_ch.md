对 Data Construction and Open Release track，LearnAlign 适合作为 policy-aware RLVR prompt selection recipe：答案需可程序核验，且前期评分成本能够由后续 RLVR 摊销。它说明可审计 subset 不能只有 selected text，还应保留 upstream ID/revision、warmup membership、policy/tokenizer hashes、prompt template、全部 8 条输出、parsed answers、raw rewards、p、V、gradient/projection 配置、row score、rank、keep/reject flag 与 downstream run assignment。

复用等级：**可作参考与重建 recipe；忠实复现仍被 artifact 缺失阻挡**。研究者可依据公式和设置实现受控近似，但没有代码、checker、projection、seeds 与逐行 records，就无法复现论文 subset 或验证 selection decisions。现有 GSM8K 或 DAPO release 不能被描述为 LearnAlign-selected data。

适合的受控对照包括 random selection、learnability-only、pass@8 filtering、更便宜的 embedding/feature similarity、full-rollout 与 one-correct-rollout gradients，以及 static 与 periodic rescoring。应分别报告 selection 和 training compute，包括 rollout tokens 与 gradient cost；subset benchmark accuracy 不能单独归因于 prompt quality。

动态或分阶段 policy 应重新计算 scores，并保留每次 selection snapshot。同时发布 accepted 与 rejected candidates，才能观察 curriculum 如何变化、审计 parser 与分数，并把 subset construction 连接到实际消费它的精确 policy。
