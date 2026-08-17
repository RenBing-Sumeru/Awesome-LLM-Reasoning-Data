**方法与反馈限制。** FineWeb-Edu 与 Ask-LLM 分数只是教育价值和推理相关性的 proxy，可能接收表达可信但内容错误的文本，也可能拒绝稀有、简短或高度领域化的样本。positive-influence threshold 依赖所选 probe、checkpoint 与近似方法；具有延迟收益或域外收益的记录可能被删除。Ask-LLM 模型与 prompts、semantic-deduplication 模型与阈值、sample-level influence 分布均未披露。

**数据与发布限制。** 附录 Table 5 列出 1.8T source tokens，论文将其约写为 2T；重采样使两个预训练阶段各消耗 2T，再加两个 100B 中训练阶段，SFT 前累计 exposure 为 4.2T，而不是 4.2T 唯一 token。组合语料、抽样 ID、随机种子、分片、probe 记录、被拒样本、influence 日志和准确上游 revision 均未发布。第二中训练阶段包含八个 benchmark 训练集，但没有端到端 decontamination 或 overlap 报告。FAIR Noncommercial 条款覆盖 Meta 发布的 research materials，不能替代所有上游数据集的异构许可。

**复现与实验限制。** 在固定 commit `f518dc7e402876fc694a827385ed25de31242905` 中，仓库提供最小训练和评测代码，却没有 hierarchical filtering、leave-one-out、AutoMixer 或 subsampling 实现。示例预训练脚本使用 480k steps、cosine scheduling、学习率 `5e-4` 和 1k warmup，而附录 Table 4 报告 500k steps、linear decay、学习率 `4e-3` 和 2k warmup。仓库也没有 tagged release。Benchmark 提升不是对入选数据的独立因果验证，部分比较仍存在架构与优化器混杂。这些发布缺口是 Card 作者根据官方仓库做出的审计结论，不是论文作者明确列出的限制。
