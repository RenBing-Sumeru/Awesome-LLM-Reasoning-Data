在测试矩阵中，作者报告题目越容易，TPR 越高，而 TNR 随难度没有一致趋势。更强生成器产生的错误更难检测，验证器生成能力与 balanced accuracy 的相关形式则依赖题目难度。案例分析给出两种机制：验证器可能把难题解错并拒绝正确响应；强生成器也可能在早期犯错，却生成内部一致的轨迹而被验证器接受。

TTS 实验在一个数学题难度切片上报告：固定使用 GPT-4o 验证后，Gemma2-9B 与 Gemma2-27B 的差距从 10.3 个百分点缩小到 2.5 个百分点，即关闭原差距的 75.7%。这是论文在 retained-pool metric 和特定难度范围下的结果，不是通用 verifier quality 或 data quality 的证明。

官方代码仓库提供 verification 与 visualization code；两张标注 MIT 的 Hugging Face cards 公开 candidate traces、labels、sampling metadata、verifier rationales 与 verdicts。它们能支持“已有发布”这一事实，但不能验证标签准确性、来源权利、去污染或完整性。
