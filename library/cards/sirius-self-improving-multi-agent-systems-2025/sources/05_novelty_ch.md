SiriuS 并不是单独首次提出 supervised fine-tuning、terminal-reward filtering、Actor-Critic feedback 或 bootstrapped reasoning。STaR 已经对成功的 single-agent rationale 迭代；CoMM/COMM 提供 prompted multi-agent collaboration baseline；TextGrad 用 natural-language feedback 优化 prompt；DSPy/MIPROv2 搜索 instruction 与 demonstration。论文真正有辨识度的对象是 **role-specific experience-library lifecycle**：把 terminal selection、one-role repair 与 downstream replay 组合起来。

相对 STaR，SiriuS 把一次 joint interaction 转换为多条带条件的 target，而不是一条 reasoning trace。相对 CoMM，它训练独立 role policy，而不只依赖 prompt-time collaboration。相对 TextGrad 与 DSPy，它从筛选后的 output 训练权重，而不是优化 prompt 或 demonstration。这些是有意义的设计差异，但也使论文报告的性能提升不能被干净归因于 data selection alone。

failure-repair 的边界也比“从失败学习”更窄。外部 critic 使用正确答案，只重新生成一个 selected role，rephrase 会移除 correction reference，之后重跑 successor，且只有 terminally correct repair 才进入 SFT。这样可以在扩大覆盖的同时保持 success-only training library，但会删除部分 failure provenance，也没有解决 system-level credit heuristic。

因此，对本 track 最稳妥的 novelty claim 是流程贡献：SiriuS 说明如何在 collaborative QA、learned-judgment Actor-Critic 与 utility-based game 中，把异构 terminal signal 转成 per-role SFT record。它没有提供 verified step label、causal credit assignment algorithm、open trajectory corpus 或新 optimizer。

可执行复用应通过以下具体检查：

1. 固定 final-paper artifact、repository SHA、provider model ID、prompt、upstream dataset revision 与 custom split row ID；不得默默混用 supplement 与持续演化的 repository。
2. 重建每个 role 的 task 与精确 predecessor message，验证每条保留 record 都映射到一个 terminally successful source episode，从而检查 direct-success rule。
3. 保留 original failure、selected-role index、critic feedback、regenerated/rephrased response、successor replay、parser output 与 final result；任何没有恢复 correctness 的 repair 都必须拒绝。
4. 分开统计 case episode 与 role record，公开 per-role/per-iteration cardinality，并确认报告的 1,890 个 QA case 没有被误称为 SFT row。
5. 用 formatting variant 对 answer parser 做 unit test，并在 learned Judgment decision 影响 library 前审计 false acceptance/rejection。
6. 即使 unrepaired failure 不进入 SFT，也要在 audit ledger 中保留它们和 correction provenance；报告 retry、selection bias、deduplication 与 seed。
7. 分别核验 code、每个 upstream source、derived trajectory 与 fine-tuned model 的 license；repository 的 MIT software license 本身不足以覆盖这些对象。
8. 在 task、backbone version、inference budget 与 training access 匹配的条件下，与 Single-Agent、STaR、CoMM、TextGrad、DSPy 比较。benchmark performance 是 outcome measure，不是 retained intermediate reasoning 正确性的证明。

仅凭公开的五行 input sample 无法完成这些检查。可复用实现必须先公开或重新生成缺失的 experience library 及其 lineage。
