表 1 报告 GSM8K、SVAMP、MATH-OAI 与 OlympiadBench 上的 greedy Accuracy 和 BoN@16。以 DeepSeek-Math-7B-Base 为底座，SCOP 平均为 68.78/83.97，Critic-CoT (Iter@3) 为 63.38/78.91，greedy 差值 5.40。以 Qwen2.5-7B-Base 为底座，SCOP 为 78.41/87.16，对照为 74.75/84.35，由表计算 greedy 差值 3.66；正文将其写为 3.65。推理时使用批评 self-consistency 后，SCOP 分别升至 69.34/84.19 与 79.06/87.58。这些是作者报告的下游分数，不是轨迹质量标签。

表 2 用 greedy decoding 分离纠正行为。DeepSeek SCOP 从 `Acc@R=53.2` 变为 `Acc@S=57.4`，错误转正确为 7.2%，正确转错误为 3.0%；Qwen 从 71.3 变为 76.6，错误转正确为 11.7%，正确转错误为 6.4%。因此，自我批评能修复部分失败，也会破坏部分原本正确的答案。

图 4 的 on/off-policy 比较显示，在论文模拟中，off-policy 评估准确率先达峰后下降，而 on-policy 准确率继续提升直至收敛。表 7 中，去掉 reward shaping 后，DeepSeek 平均 Accuracy 从 68.78 降至 64.22，Qwen 从 78.41 降至 73.23；用拒绝采样微调替代 PPO 时又分别降至 63.48 与 72.45。这支持组合训练配方，但没有隔离增益究竟来自批评奖励准确性、buffer 新鲜度还是其他 PPO 交互。

采样成本不可忽略。表 6 报告四条批评、每条八次纠正时，SCOP 每个优化步生成 1,924,239 tokens；降为 1×1 后，Qwen 的 GSM8K/MATH-OAI 从 93.1/60.4 降至 87.8/50.3。附录图 6 显示，自我批评在 MATH-OAI 中等难度上的增益最大，而不是最易或最难题。由此可见，所测配方在高采样计算下有利于当前 7B 策略，但基准增益不能证明批评忠实、奖励无偏、数据无污染或制品可复现。
