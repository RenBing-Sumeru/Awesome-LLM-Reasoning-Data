论文消融支持 Llama-3.1-based student-training protocol 下的特定构造选择，不能把它们转写成普遍数据质量规则。

| 实验 | 条件与作者报告结果 | 支持的解释 |
|---|---|---|
| Solution format | OpenMath CoT 平均 237.0 token、MATH validation 为 **44.5 ± 0.8**；Llama CoT 平均 331.3 token、得分 **40.6 ± 0.6**（表 1） | 更冗长的 instruction formatting 可能损害该 SFT 设置 |
| Teacher strength | 在匹配 coverage 下，405B-Instruct teacher data 的 MATH validation 为 **37.9 ± 0.6**，Llama-3.1-8B-Base teacher data 为 **30.1 ± 0.6**（表 2） | 强 off-policy teacher data 可超过弱 on-policy generation |
| Quality/reasoning filter | 405B binary judge 和 Nemotron-4-340B-Reward filter 删除约 6%–12%，但没有实质改善 SFT accuracy（表 3；附录 B） | 在这些条件下，被测试过滤器不足以证明拒绝成本合理 |
| 人为答案噪声 | 数据规模达到 256K 及以上时，加入最高 20% 的故意错误数据，作者报告的退化很小或没有（图 5） | 较大 SFT mixture 可容忍一定 final-answer noise；这不证明任意 reasoning error 都安全 |
| Question diversity | 固定 256K pair，把 unique question 从 1K 增加到 6.5K，使 MATH validation 提高 **10.5 分**（图 6） | Unique task coverage 独立于 pair count 发挥作用 |
| Majority threshold | 比较 0、8、16、24，作者选择 **0**（附录 C.1，表 9） | 在被测试 student 上，更强表面共识要求没有带来收益，但保留记录可能只有很弱同意 |

论文还直接记录一种反馈失败：部分 solution 的中间步骤错误，但最终答案正确。对 20 个 flagged example 的人工检查估计约 60% 确实错误。这支持 answer-level 分类，也说明 final-answer matching 或 majority proxy 不能被改称为 process supervision。

最终模型方面，使用完整发布训练的 OpenMath2-Llama3.1-8B 在 GSM8K、MATH、AMC 2023、AIME 2024 和 Omni-MATH 上分别报告 91.7、67.8、16/40、3/30 和 22.0（表 4）。MATH 比 Llama-3.1-8B-Instruct 的 51.9 高 15.9 分。使用 5M subset 训练的 OpenMath2-Llama3.1-70B 在 MATH 上报告 71.9，但只改善部分 benchmark；作者推测，在 8B validation 设置上调优的选择可能不能迁移到 70B。

这些模型结果由作者报告，本卡未独立复现。它们展示完整 data/training/evaluation package 的行为，不能证明逐条正确性、rationale validity、无污染或 license 完整性。

去污染证据同样有边界。原始过滤器针对四个具名 test set，从约 569K 个 MATH-derived synthetic question 中删除约 50K。Omni-MATH 在训练后才发布，没有被纳入；作者随后发现约 **1.4%** 的 Omni-MATH test question 存在于 training data。该结果直接说明，即使过滤机制很实质，也可能在原始范围之外留下 benchmark-specific overlap。

发布证据在论文四舍五入处给出准确数字：固定版本 HF card 与 dataset-server manifest 都报告 13,972,791 个 train row，并有重叠的 1M/2M/5M downsampled subset。论文表 5 把 unique question 总数四舍五入为 607.3K；公开 artifact 没有准确整数 unique-question manifest。
