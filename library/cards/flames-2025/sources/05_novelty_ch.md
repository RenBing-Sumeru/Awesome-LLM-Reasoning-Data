既有工作基线是碎片化比较：MetaMathQA、OpenMathInstruct-2、OrcaMath、MMIQC、ScaleQuest 等提出了有用 agent，却使用不同 problem generator、solution teacher、student、filter 和 evaluation condition。FLAMES 把分析单位从“哪篇论文发布的数据得分最高”改为“其余 scaffold 固定时，哪个 pipeline factor 改变 student behavior”。

该 scaffold 中有两个新 agent mechanism。Taxonomy-Based Key Concepts 不依赖单道 seed problem，而是把整理后的 topic taxonomy 扩展为 concept，再扩展为 problem。Distraction Insertion 在保持原答案不变的同时插入 irrelevant detail，目标是增强对误导性上下文的 robustness。最终 record 类型——problem 加 teacher solution——并不新；新的数据贡献是从受控比较中选出的明确 mixture：50% Suggester-Editor、20% IQC、20% Taxonomy Key Concepts、10% Distraction Insertion。

质量控制研究也是方向信号：它实测了 coverage-versus-verification trade-off，并记录一个看似合理的 solvability judge 会拒绝 30.2% 的人工 MATH500。不过 exact deduplication、self-consistency、learned solvability judgment、reward-model reranking、teacher distillation 与 full-parameter SFT 都是已有组件。FLAMES 主要是 factorized experimental integration 加两个定向 agent，并不是新的 mathematical verifier。

复用前需要获得当前缺失的记录与实现、完整继承 prompt、taxonomy 与 seed lineage、accepted/rejected candidates、answer extraction rules、artifact licenses、稳定 model revisions，以及独立于 Qwen2.5-Math-7B-Instruct 的 correctness audit。没有这些对象时，该论文是很强的 recipe/audit reference，却不是可直接复用的开放数据集。
