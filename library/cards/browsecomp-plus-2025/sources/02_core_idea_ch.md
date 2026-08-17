核心贡献是构建一个基于固定语料的 BrowseComp 派生 benchmark，把三个问题分开：environment 是否检索到人类标注的 evidence、agent 是否引用这些 evidence document ID，以及 semantic judge 是否接受最终答案。固定 search substrate 可以从检索对比中移除 live-web drift，但不能消除 model-weight contamination，也不能使标签自动变得穷尽。

benchmark record 组合了四类 data object。第一类是带 answer 的 830 个 test query；第二类是包含 100,195 篇网页文档的 corpus；第三类是人类 evidence qrels、gold-document label 与挖掘的 hard negative：evidence 支持答案所需的一个或多个 clue，gold document 在语义上包含 final answer，hard negative 则是经过标注与去重后未被保留为 positive 的抓取结果；第四类是部分公开的完整 agent episode。公开 run inventory 只有 BM25+GPT-5、BM25+o3、Qwen3-Embedding-8B+GPT-5 与 Qwen3-Embedding-8B+o3；这些文件是否各自覆盖全部 830 个查询，以及其成功/失败分布，尚未得到穷尽核验。

feedback contract 是 mixed。terminal validity 采用程序化规则：`status` 必须为 `completed` 且必须存在 final answer。retrieval 依据人类 qrels 计算 Recall@k 与 nDCG@k。citation recall 将 numeric cited document ID 与 evidence qrels 匹配，但不检查 sentence-level entailment。final-answer accuracy 需要 LLM semantic-equivalence judge：正式论文结果使用 GPT-4.1，而当前公开代码默认使用 Qwen/Qwen3-32B。经证据确认的 release 不包含 pairwise preference、process reward、learned reward model 或 optimizer。

相对 BrowseComp，变化并不是发布另一套 1,266 个问题，也不是替换原卡的 scorer 描述；变化在于围绕保留的 830-query subset 增加 controlled environment、document supervision、construction ledger 与部分 episode observability。该边界支持本卡的 category 选择与 `related: [browsecomp-2025]`，同时把 `training_use` 严格限制为 `evaluation`。
