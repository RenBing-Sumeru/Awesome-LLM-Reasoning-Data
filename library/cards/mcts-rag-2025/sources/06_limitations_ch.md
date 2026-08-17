首要审计限制是 release completeness。`Final Solutions.json` 表示 terminal solution node，`Rollout Solutions.json` 表示每个 rollout 的一个节点；二者都不是结构化的全节点 tree archive。递归文本 tree 是可选输出，但仓库没有提交论文运行的 `.tree` 文件。因此，release 不包含报告实验中的每个扩展或拒绝分支、parent-child edge、action decision、Q/N/V/UCT history、selected path、pruning reason 或 terminal status。

retrieval lineage 同样缺失。检索上下文可能出现在生成文本内部，但没有论文运行的 query、document ID 或 URL、rank、timestamp、corpus revision、retrieved passage、reflection decision 或 skip/prune reason ledger。论文的 Bing/LangChain 描述与公共 Cohere/Azure/FAISS 实现没有被对齐。live service、可变 index 和硬编码 GPT-4o query helper 会引入 retrieval 与 API drift；credential、index、dependency pin、模型和服务 revision 的缺失使精确 replay 不可行。

反馈记录并不完整。runtime 代码计算 answer confidence、survival rate、combined score 和 Q/N/V/UCT 值，但核查到的 discriminator 输出持久化 correctness boolean，而不是完整 score vector。没有发布论文运行的 semantic cluster、rejection reason、node value 或 selection ledger。self-consistency 与 likelihood 是相对于模型的信号，因此高置信一致不能证明事实正确。

预算归因仅有聚合证据。仓库能写出 arguments 与聚合 call 或 token 总量，也能打印 elapsed time，但没有提交论文运行的 seed、configuration、逐样本模型调用、生成 token、检索调用、latency、failure、hardware 或 monetary cost。论文运行 temperature 是 unknown，公共脚本或 parser 默认值也与主要 4-rollout 设置不同。

最后，少量 benchmark 输入不能确立更大检索语料或生成输出的 provenance。代码采用 MIT license，ACL 论文采用 CC BY 4.0，但上游 dataset、retrieved document 和衍生 trace 的权利仍取决于各自来源。论文没有报告 decontamination 或 benchmark/pretraining overlap 分析；聚合 benchmark 提升也不能作为已发布 trace dataset 质量高的证据，因为论文运行数据集并未发布。
