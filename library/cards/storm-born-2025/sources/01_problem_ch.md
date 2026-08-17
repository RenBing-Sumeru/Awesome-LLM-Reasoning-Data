权威出版记录是 Findings of ACL 2025 的 21 页论文，页码 23938–23958，DOI 为 `10.18653/v1/2025.findings-acl.1227`；其 appendix 提供主要 agent prompt、资源说明、对比样例与 derivation-evaluation rubric。本卡还审计了 2026 年 7 月 21 日的官方 repository commit `1d3f0743717ccec23472692eb4e13d56f833bb2d`。作者名遵循 PDF，其中使用 `Jierui Zhang` 与 `Kun Xie`；ACL HTML 对这两人的显示不同。

STORM-BORN 面向从技术文档中抽取的长自然语言数学推导与证明。它试图填补两类数据之间的空白：短数值文字题的 terminal answer 易检查，但 reasoning 可能较浅；形式定理证明 corpus 可机器验证，但使用 proof language。这里的数据对象改为保留 formula、approximation、dependency、heuristic cue 与多步 prose，因此其正确性需要阅读来源与数学判断，不能只比较答案字符串。

最终公开对象比论文描述的 2,000 对 construction pool 更小、更具体。`data/storm-born.jsonl` 精确包含 100 个 unique row，来自 28 个不同 source identifier。每行有 `paper`、`question` 与 `whole_label`：粗粒度来源名或 arXiv ID、自包含 derivation/proof question，以及长自然语言／LaTeX 推导。行内不含原始 formula record、page/equation evidence、agent output、human decision、revision history 或 quality score。

Repository 还发布随机的 73-row train split 与 27-row test split，二者无 question overlap 且精确组成全部 100 道题。四选一文件提供 `paper`、`question`、`A`–`D` 与 `ground-truth`：一个文件覆盖 100 题，另两个内容逐字节相同的文件覆盖 27 题 test subset。所宣传的 blank-format artifact 当前只有 `[]`。Train/test 并非 source-document-disjoint：test 的 18 个 source identifier 中有 17 个也出现在 train。

它直接属于 `data_construction_open_release_recipes`，因为论文明确给出 document filter、六个 specialized agent、source-answer retrieval、context enrichment、expert selection、derived evaluation format 与下游 SFT study。其规范 `L3_summary_ready`／`partial` 状态必须保留。2,000 条生成池、top-500/fullset ablation data、rejected item、paper-selection manifest、精确 human protocol、逐行 evidence 与有效 release license 均缺失，因此当前 artifact 只能支持有边界的复用，而非完整可审计复现。
