权威出版物是 43 页的 **ICLR 2025** 正式接收 proceedings 论文，发布日期为 2025-05-01，并有官方 supplement 与 OpenReview 记录。本卡以 proceedings 版本的最终结果为准，因为 arXiv:2410.10878v2 仍保留较早的分数。官方 Herald statement/proof 数据集、translator model、code/evaluation repository 与 Lean 4.11.0 test environment 构成发布证据。

Herald 处理的是 Lean 4 自然语言—形式语言平行数据稀缺问题。其源数据是 Mathlib4，其中 declaration 与 proof 已经形式化；但可用于 autoformalization 的监督还需要易读的自然语言对应物。因此，构造任务不仅是抽取形式对象，还要为 LLM 提供足够的库上下文，并明确区分 Lean 能够检查的内容与仍需数学判断的内容。

公开发布由两个彼此独立、仅含 train split 的数据集组成：

| 发布对象 | 精确行数 | 公开字段 |
|---|---:|---|
| `Herald_statements` | 579,883 | `id`、`informal_statement`、`formal_statement` |
| `Herald_proofs` | 44,553 | `id`、`name`、`formal_theorem`、`informal_theorem`、`formal_proof`、`informal_proof`、`commented_proof`、`header` |

Statement rows 是命题配对，不是 proof trace。公开的形式语言示例可包含 import 或上下文，以及以 `:= sorry` 结尾的 theorem declaration；编译这种 declaration 能检查 elaboration，却不能证明该命题。Proof rows 更丰富：它们保留完整 tactic proof、形式与非形式 theorem、informal proof、commented proof、name 和 header。论文常把规模四舍五入写成 580K statements，以及 44K 或 45K proofs；审计发布物时应使用上表的精确行数。

核心反馈契约是 mixed。Lean 可以在固定环境中检查形式语法、elaboration、类型与完整形式证明，但无法判断一条自然语言句子是否与某个可编译的形式 declaration 等义。Herald 的评测 pipeline 用 learned back-translation 与自然语言推断补充这一语义层，但 Table 4 显示该判断层并不可靠：在 ProofNet 人工审计中，151 个 Herald 输出通过 validation pipeline，专家只将其中 101 个标为完全正确，另有 24 个 minor errors 与 26 个 major errors。

本 Card 只归入 **Data Construction and Open Release Recipes**，因为主要贡献是 pipeline 与 release surface：按依赖关系抽取 Mathlib、从人工示例检索、LLM informalization、tactic-state 与语言增强、proof annotation、采样，以及 translator 的监督微调。它不归为 programmatically verifiable outcome data：statement row 可以带 `sorry` 完成 elaboration，而自然语言与形式语言的等价性仍依赖 judgment。它也不是 benchmark Card；supplement 中的 evaluation JSONL 只是构造 corpus 的次要评测材料。编译通过或 benchmark Pass@128 都不能单独证明数据质量。

L4 证据边界包括接收版论文及 appendix、官方 supplement、HF 精确 schema 与计数、固定的 dataset/model/code HEAD，以及关联的 Lean runtime；但不包括端到端 corpus 重建。informalizer identity、完整 prompt、准确 Mathlib source revision、逐条 branch 与 rejection history、construction implementation 均缺失。论文所链 Lean-Jixia URL 在 2026-07-23 返回 404，本卡没有擅自替换为未核验 successor。因此，L4 表示双语、证据完备的审阅表面，同时保留 semantic validation、lineage、contamination 与 reproducibility 的不完整状态。
