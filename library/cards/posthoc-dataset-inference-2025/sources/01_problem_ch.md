ICML 2025 官方论文研究的问题是：当数据所有者没有预留可信且分布匹配的非成员集合时，如何检验某个 LLM 是否用过一组可疑文本。传统 dataset inference 会比较可疑数据与已知非成员数据上的目标模型 membership feature；即便只有轻微的话题、日期或文档差异，也可能被误判为成员信号。在一个含 1,400 篇文章的单作者语料上，原始方法对已知非成员文章仍给出 0.001 到 0.002 的 p-value。

该工作属于 `data_construction_open_release_recipes`，因为其核心 artifact 是“构造缺失参考集”的配方。一次审计从可疑文档开始，先分段并打乱，在一个序列分区上训练 generator，再用另一分区中的共享 prefix 构造“自然 suffix—合成 suffix”配对；随后统计比较目标模型 membership feature 与两个 classifier 的概率。

该方法不能建立记录级 lineage，不能识别精确训练 checkpoint 或日期，也不能裁决所有权与侵权。其结论是一个受 generator、目标模型访问方式、feature extractor、classifier、split 和显著性阈值共同约束的集合级假设检验。论文、附录、代码与发布的 Pile 衍生 archive 足以支持详细 Card，但 immutable version、数据许可证、checkpoint 和论文运行配置仍缺失，因此保持 `partial` 与 `L3_summary_ready`，不升级 curation state。
