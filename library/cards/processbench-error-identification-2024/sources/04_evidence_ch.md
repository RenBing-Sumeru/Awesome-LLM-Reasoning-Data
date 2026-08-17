第一层证据是 benchmark 本身的规模和标注协议：3,400 条测试样本、4 个数学子集、专家最早错误 label、最多 5 人中达到 3 人一致才保留。论文报告整体约 30% 样本因无法达成一致而丢弃，这既是质量控制证据，也是选择偏差边界。

构造结果直接说明 final-answer reward 的盲区。对最终答案正确的抽样解答，论文报告的过程错误比例随题目难度上升：GSM8K 为 3.5%，MATH 为 18.8%，OlympiadBench 为 32.2%，Omni-MATH 为 51.8%。这些比例只在它的专家标注、抽样协议和步骤切分下成立，不能外推成所有模型/所有数学题的普遍错误率。

评测证据显示，现有 PRM 在难题子集上明显退化；prompted critic model 和作者用 PRM800K 微调的 PRM 表现更强。论文主表平均 F1 包括：Qwen2.5-Math-7B-PRM800K 56.5，Qwen2.5-72B-Instruct critic 61.2，QwQ-32B-Preview 71.5，GPT-4o-0806 61.9，o1-mini 87.9。所有分数都依赖 prompt、PRM threshold、majority voting、模型版本和 split 组成。
