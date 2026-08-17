目标论文的 pipeline 如下：

1. **输入。** Comp-Math-24-25 由 30 道 AIME 2024、30 道 AIME 2025、62 道 HMMT 2024 年 11 月、68 道 HMMT 2024 年 2 月和 66 道 HMMT 2025 年 2 月题目组成。排除证明题和按估计准确率给予部分分数的题目后，共有 256 道评测题。
2. **候选生成与表示。** QwQ-32B 或 DeepSeek-R1-0528 以 temperature 0.6 独立采样解答，主要比较为每题 64 个候选。`Ans(Y)` 抽取最终答案，`Summary(Y)` 表示长解答。推理模型的输出天然包含 thinking 之后的 solution；QwQ 的摘要则依据 Appendix A.1 prompt 由 Qwen2.5-32B-Instruct 重新生成。论文称预实验未发现完整轨迹相对摘要具有显著收益。
3. **选择。** QwQ-32B 或 DeepSeek-R1-0528 通过 prompt-only 方式充当自身的 GenSelect verifier。单次调用在 context 限制允许的组大小内联合比较候选，生成比较推理，并以 `Judgment: [IDX]` 结尾。更大的候选池进入 N 叉淘汰赛，每一轮胜者成为下一轮候选。
4. **聚合与结果。** Table 3 评估一次或八次 QwQ 选择，重复时使用 majority voting。最终设置把 64 个候选按 \(N=8\) 分组，运行两轮淘汰赛，在随机排列下重复 32 次，再对这些运行所选出的答案做多数投票。
5. **评测。** AIME 类题目使用抽取答案的正确性；HMMT 使用论文引用的 LLM-judge 设置，因此整体 verification contract 是 mixed。Pass@64 是 oracle 上界，不是可部署的 selector。

最终报告的 decoding 设置为最大 32K 输出 token、temperature 0.6、top-p 0.95。预算消融比较 \(2N\) 次解答生成加 majority voting，与 \(N\) 次解答生成加 \(N\) 次 GenSelect generation；这只能近似对齐 generation-call 数量，不能证明 token 或 latency 相等，而且选择阶段必须等候候选生成完成。论文没有报告目标候选池的 decontamination、精确 prompt 版本哈希、随机 seed、judge output 或已发布的执行 manifest。

相关 OpenMathReasoning 的构建是另一条 pipeline：先对带答案标签的解答池生成摘要；每道题构造八个不同的候选组，每组包含 2–16 条摘要，且至少有一个正确和一个错误候选；由 QwQ-32B 做选择；删除选择了错误候选的样本；再由 Qwen2.5-32B-Instruct 清洗接受的比较轨迹。约一百万次 generation 最终过滤成 565,620 条公开记录。公开的九字段 schema 在 `problem` 内保留完整候选摘要组和未选摘要，在 `generated_solution` 内保留 rationale 与可解析索引；它没有独立的 chosen-index 列，也没有逐候选 correctness-label vector。
