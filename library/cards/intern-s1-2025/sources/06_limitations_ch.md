CPT 披露仍停留在聚合层面。报告没有发布来源清单、各来源 token 数、领域混合权重、采集日期、页面或文档谱系、parser 决策、许可信息，也没有保留/拒绝记录。它提到 private multimodal collections 与匿名真实用户查询，却未说明治理、同意或再分发条款。论文报告了 page-level deduplication，但没有公开审计基准重叠或来源级污染。

离线后训练没有给出 best-of-N 的 N、响应生成器身份、解码参数、评分阈值、准确记录数或最终混合比例。在线 RL 报告 1,000 多项任务、每项任务生成 100,000 多个候选，并最终保留 20,000 多个混合 RL 样本，却没有任务/样本清单或任务到 verifier 的映射。因此，候选到保留记录的大幅压缩无法独立重建。

奖励层只能部分审计。CompassVerifier 旨在减少规则 verifier 的 false negative，但没有 Intern-S1 专属校准或 false-positive/false-negative 分析；Mixture-of-Rewards 也没有披露各任务权重或标量归一化。POLAR-7B、随机选择的 reference-trajectory generator 和环境反馈又引入学习式或不透明依赖。混合过滤会删除全对/全错组和问题响应，但被拒样本未开放，无法分析筛选偏差。

已发布权重和 Apache-2.0 仓库支持推理，不等于训练可复现。完整 Internbootcamp 环境、训练数据、奖励代码、来源权利、split manifest 和去污染证据仍为 unknown。论文报告的基准提升不应被视为数据质量证明。
