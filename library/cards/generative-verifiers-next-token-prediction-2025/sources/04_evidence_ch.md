论文在固定候选 generator 的条件下评估 verifier，因此主指标是 Best-of-N 选择后成功解题的比例，而非候选生成本身的 pass rate。Figure 1 对 Last Letter 与 Word Sorting 的 Gemma-2B verifier 取平均并报告 Best-of-32；在 GSM8K 上训练的 Gemma-2 9B verifier 则以 Best-of-16 评测 GSM8K、以 Best-of-32 评测 MATH500。标题结果分别为：算法任务平均从 5.0% 到 45.3%，GSM8K 从 73.0% 到 93.4%，以及 GSM 训练 verifier 向 MATH500 迁移时从 28.0% 到 44.6%。不同 verifier 使用同一批候选解。（Figure 1）

比较对象包括判别式 outcome RM、DPO verifier、self-consistency，以及作为 LLM-as-a-Judge 的 Gemini 1.0 Pro。Figure C.1 中，Direct GenRM 与判别式 RM 相当或略好，并强于 DPO；更大增益来自带多数投票的 GenRM-CoT。在四个 MMLU 数学子集上，Table C.1 报告 Disc-RM 与 GenRM-CoT 分别为：elementary mathematics 90.6% 与 91.1%，high-school mathematics 74.8% 与 76.1%，college mathematics 53.0% 与 56.1%，abstract algebra 50.0% 与 53.5%。

消融实验收紧了因果结论。在论文默认范围内，联合正确解生成 SFT 改善验证；但 Figure C.2 表明生成数据混合过多会降低 verifier 表现，图示 GSM8K 设置中 lambda=1/4 最好。Reference-guided rationale generation 明显强于无参考合成；论文还报告了增加理由样本、增加训练候选解及扩大 Gemma verifier 模型带来的增益。论文同时明确指出，合成 GSM8K 理由可能含有错误。

上述均为作者报告，尚非独立复现。证据支持的是所测字符串操作与数学任务上的 verifier 架构和采样流程，不能证明每条公开 critique 都正确、`Yes` 分数跨领域校准良好，或 32 次投票彼此独立。Artifact 检查确认 GSM8K 训练对象确实存在，但 benchmark 表现不能替代许可证完整性、去污染或逐条数据质量审计。
