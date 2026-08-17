一句话概括其贡献：使用 405B instruction-tuned teacher、两条互补 augmentation 分支和 answer-level selection，把 GSM8K/MATH training seed 扩展为准确含 13,972,791 行的开放 SFT 发布，并测量 format、teacher strength、filtering、diversity 和 scale 如何影响 student。

两条构造分支是：

- **Solution augmentation：** 保留原始 GSM8K 或 MATH 问题，采样大量 Llama-3.1-405B-Instruct 替代解答。当前官方 recipe 对每个原始 GSM8K 问题请求 64 个 solution，对每个原始 MATH 问题请求 512 个。
- **Question-solution augmentation：** 使用 five-shot prompt 生成相关问题；当前 recipe 对每个 GSM8K seed 生成 10 个新题，对每个 MATH seed 生成 80 个，再以 temperature 0.7 为每个新题采样 32 个 solution。

Answer-level feedback contract 随分支不同：

| 问题类型 | Reference answer | 筛选信号 | 无法观测的失败 |
|---|---|---|---|
| 原始 GSM8K/MATH | 来源 ground-truth answer | 抽取最终答案一致，加上格式/长度规则 | 中间推理无效但最终答案碰巧正确 |
| 增强问题 | 32 个 teacher solution 中最常见的表面答案 | 从非 null 抽取中选择 top answer；被选 minimum vote threshold 为 **0** | 没有最低共识要求，等价形式可能分票，重复错误答案可能胜出 |
| 新题污染 | 四个具名 benchmark test set | Top-5 embedding retrieval 加双向 405B paraphrase judgment | Judge false positive/false negative，以及与未列 benchmark 的重叠 |

因此，“majority vote”指抽取表面形式的 mode，而不是正确性证明。当前聚合代码在中间结果中记录 `majority_votes` 和 `total_votes`，排除 null extraction，并选择 `Counter(...).most_common(1)`；公开四字段记录省略这些诊断。阈值为 0 意味着纳入规则不要求任何固定最低同意票数。

最接近的概念基线是规模更小的开放 teacher-distillation 数据和单分支 solution augmentation。OpenMathInstruct-2 通过加入约 592K 个合成问题，并把 question diversity 与多解答结合，改变了规模和来源多样性。它并未单独提出 SFT、chain-of-thought distillation、nucleus sampling、final-answer checking、majority aggregation 或 model-judge decontamination。

它给出的方向信号是：数学 SFT utility 由表示形式、teacher、unique-question coverage 和 pair count 共同决定。该发布也展示了一条审计边界：内容丰富的论文级 pipeline 最终可能压缩成四个字符串，丢失评估该契约所需的投票、拒绝候选和 selection path。
