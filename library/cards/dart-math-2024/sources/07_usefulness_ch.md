对本次分配的 Data Construction and Open Release Recipes track，DART-Math 是研究“固定生成预算如何变成训练分布”的可复用蓝图。受控复现实验可以固定 prompt、生成器、verifier、最终保留规模和 SFT 超参数，仅改变三种分配：原始预算相同的 VRT、接受数量相同的 Uniform，以及难度成比例的 Prop2Diff。研究者应同时报告原始合成计算量与最终样本量，因为论文固定约 590k 最终样本，并不等于对齐报告 DART 运行所花费的约 1.5 亿次原始试验。

最终 `query`/`response` 数据在完成上游许可证、重叠与 snapshot 审查后，可直接用于答案级数学 SFT。pool 与 query-info 表更适合构造研究，可用于重新分配实验、生成器相关难度研究、checker 审计，以及覆盖率与重复响应数的分析。由于没有经过验证的步骤标签，它们不能支持 process supervision 声明。

更强的复用协议应固定来源与发布 revision；保留所有原始候选、抽取答案、checker 决策和重试计数；用第二个符号 checker 或人工审查分层样本；比较多个生成器；并发布语义重叠结果。Prop2Diff 应实现为确定性脚本，把目标计算、取整、原始试验上限与随机种子全部版本化，而不是由复用者根据文字手工重建。

复用等级：通过许可证与 snapshot 检查后，可谨慎用于 SFT 与构造策略实验；当前可作为审计和复现参考。不能把这些 rationale 当成过程正确标签，benchmark 表现也不能单独消除污染、沿袭或 verifier 稳健性风险。
