在 ProcessBench 上，14B Dyve 在 GSM8K、MATH、OlympiadBench 和 OmniMATH 上的 F1 分别为 68.5、58.3、49.0 和 47.2。System-2-only 变体则分别达到 70.0、60.1、50.1 和 49.6，因此自适应模型并不是这组比较中绝对精度最高的设定。它体现的是精度—效率权衡：System 1 在四个领域的步骤占比分别为 27.5%、30.7%、41.0% 和 32.6%，对应报告的平均验证时间为 0.47、0.51、1.25 和 2.05 秒。

数据消融与“过滤有效”这一判断一致：MATH F1 从未过滤 Monte Carlo 数据的 34.7，提高到 consensus filtering 后的 56.0，再提高到 stepwise flagging 后的 58.3。不过，迁移收益并不完全一致。Qwen2.5-14B 经过混合训练后，四项分数从 28.7/27.9/23.7/24.6 变为 51.7/42.3/30.2/23.6，其中 OmniMATH 下降 1.0 分；Qwen3-8B 与 DeepSeek-R1-14B base 则在报告的四个领域均有提升。

在 MATH-500 的 best-of-N 选择中，以 DeepSeek-R1-14B 作为 proposer 时，Dyve 在 N=8 达到 95.5；以 Qwen2.5-MATH-7B-Instruct 作为 proposer 时达到 90.4。论文称所有 outcome 均经过人工核验。附录 A.5 估算两种路径共同的 rollout 生成成本为 1,344 个 A800 GPU-hour，并把约 2,500 美元的 DeepSeek-V3 API 标注成本与“每个人工标签 5 美元”假设下的 585,000 美元作比较。该比较依赖定价假设，且不包含双方共有的 rollout 成本。

这些结果支持训练后 verifier 的实用性，也说明过滤环节有贡献，但它们没有直接测量发布标签的 precision、calibration 或 provenance 质量。公开 release 本身还提供了一个审计信号：当前 156,321 条 row 与论文报告的约 117,000 条轨迹并不一致。
