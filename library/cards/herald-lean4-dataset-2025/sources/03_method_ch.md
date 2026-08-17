论文支持以下构造与使用 pipeline。

1. **抽取 Mathlib4 对象。** Lean-Jixia 分析 declarations、结构上下文、依赖关系、tactic lines 与 proof states。精确 Mathlib revision 和完整 source declaration manifest 未披露。
2. **安排 statement 翻译顺序。** 构建 dependency DAG，先翻译低层 declaration，再处理依赖它们的 theorem；输入包含 head statements、declaration kind、docstrings、neighbors 和已翻译 dependencies。
3. **检索人工先例。** 对 1,000 个手工标注的 formal statements 做 embedding，并按 cosine similarity 检索最近示例。Embedding model、vector-index version、retrieval code 与逐行 neighbor 均未知。
4. **用专家反馈改进 prompting。** 五名熟悉 Lean 的纯数学博士生进行六轮反馈，形成十二条以上 prompt principles。Appendix 中的 prompts 含省略号，不能作为可执行 job specification。
5. **Statement informalization。** 未披露 LLM 生成自然语言对应物。模型身份、checkpoint、provider terms、decoding、seeds、retries 与 run IDs 均未知。
6. **Tactic proof informalization。** 抽取 tactic lines 与前后 proof states，加入人工编写的 tactic 逻辑解释，逐行翻译并整合成完整 informal proof。Term-style proofs 被排除。
7. **构造 tactic-state statements。** 把局部 hypotheses 与 goals 转为 formal declarations，并用 Lean 编译。相关 states 被随机采样到与 selected originals 相同的数量；similarity rule 与 random seed 未公开。
8. **构造 informal variants。** 生成 equivalence rewrites、abstract substitutions、implicit-condition omissions，以及中文、法文或俄文翻译，再把该分支采样至 original-set 的规模。发布物不含逐行 branch label 与 candidate ledger。
9. **组装公开发布。** 以 Apache-2.0 发布 579,883 条 statement rows 与 44,553 条 proof rows，均只有一个 `train` split。没有 validation/test split，也没有逐行 source revision、generator record、validation log 或 rejection history。
10. **训练 translator。** 将 statement pairs 反向构造为双向任务，与 OpenHermes2.5 混合，并微调 DeepSeek-Prover-V1.5-Base 7B。论文给出 warm-up、epochs、learning rate 与 mixture ratios，但未完整披露 optimizer、batch、hardware、seed 与 checkpoint-selection。
11. **用双层 gate 评测。** 每个 item 以 temperature 0.99 生成 128 个 candidates。Lean REPL 拒绝 severity 为 `error` 的输出；通过者由 InternLM2-Math-Plus-7B back-translate，再由 DeepSeek-V2.5 与输入比较，解析出的 `same` 决定构成 learned semantic gate。

公开的 `herald_translator` 仓库实现 translator inference、Lean checking、back-translation、NLI 与 evaluation configs，但不实现 Mathlib ingestion、dependency scheduling、retrieval-index construction、generation、augmentation、proof integration、sampling 或 release packaging。因此，发布物足以检查公开行并重放部分评测，不能端到端重建 Herald。

关联 Lean test 仓库固定了 Lean 4.11.0、Mathlib commit `20c73142afa995ac9c8fb80a9bb585a55ca38308` 与 REPL commit `adbbfcb9d4e61c12db96c45d227de92f21cc17dd`。这些 pins 给出具体 evaluation substrate，但没有 manifest 能证明每个发布行都由该精确环境生成。
