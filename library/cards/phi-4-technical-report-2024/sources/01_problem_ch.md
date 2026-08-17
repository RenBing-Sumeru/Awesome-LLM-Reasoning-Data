本卡的一手来源包括Microsoft Research技术报告MSR-TR-2024-57、arXiv:2412.08905、官方`microsoft/phi-4`模型仓库及其后续官方data summary。微软列出27位作者，并于2024年12月发布报告。Hugging Face仓库可核验MIT许可证权重可下载，但它不是训练数据发布。

报告研究的问题是：如何在没有大幅修改架构的情况下，通过数据构造和课程让14B dense模型获得推理、代码与指令遵循能力。Phi-4在预训练和后训练中持续使用合成数据，同时让过滤后的organic数据既作为直接训练材料，也作为合成生成种子。

对本atlas而言，审计重点是分开四本账：报告对数据披露了什么、模型权重是否可下载、训练记录与生成决策是否可下载，以及评测说明了何种模型行为。Phi-4在前两本账中证据较强，第三本账没有官方语料，第四本账有大量benchmark证据。分数不能补齐来源、许可证、lineage或verifier字段。

已披露数据对象横跨多个规模。模型卡报告9.8T-token训练运行；报告描述约50类广义合成数据集，共约400B未加权源token，约8B SFT token，第一轮250,297条Pivotal Token Search示例，以及第二轮841,842个judge-guided DPO pair。这些都是报告级聚合量，没有公开行模式，也没有到最终模型的对照表。因此Phi-4适合作为`frontier_reports_data_disclosure_ledger`条目，但必须保留`partial`状态与L4级别。
