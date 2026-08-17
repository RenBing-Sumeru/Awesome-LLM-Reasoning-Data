本文的贡献是一条以文档证据为基础的多智能体流程：把分散的来源陈述转换为递归的数据集谱系图，再用图拓扑选择派生程度较低的数据源。

对每个候选数据集，sourcing agent 定位证据，extracting agents 汇总 Hugging Face README、网页和论文，tracing agents 识别真正用于构造的来源，aggregation agent 合并重复声明并把别名解析为规范的 Hugging Face ID。边关系限定为 Semantic Evolution、CoT Distillation、Synthetic Generation、Structured Fusion 或 Direct Inclusion/Subset。DFS 持续扩展新发现的来源，直到找不到祖先或触及 2020 年前的截止条件。从 83 个选定种子出发，论文报告得到 430 个节点、971 条边的图；随后按出度排序具有下游复用的叶节点，经领域与格式筛选留下 31 个问答源，供多样性导向语料使用。

这里的反馈契约是混合式审计，而非答案正确性奖励。Hugging Face 可用性、规范 ID 解析、发布时间一致性、智能体置信度、支持文本和低置信案例的专家复核共同决定是否保留数据集级边；完整三元组精确匹配用于测量源交集，instruction/input 精确匹配用于检查五个基准，exact-Q 与 MinHash 用于语料去重。这些检查能观察已公开的祖先关系和字面重叠，却看不到隐瞒的来源、释义式污染，也不能判断一条指令的答案是否正确且有训练价值。

相较于只为单个发布物登记来源字段，或逐对扫描样本，本文的方向信号在于把图上的祖先关系变成可复用的构造与审计层。Atlas 中最接近的概念对照是 `bridging-provenance-gap-2025`：后者跨发布物审计来源与权利元数据，本文则推断有向派生路径并将其用于源选择。两者都没有为最终训练记录提供经核验的逐条祖先关系。
