Model Card 报告了截至 2025 年 7 月、预算并不统一的能力结果：HLE 为 34.8%，IMO 2025 为 60.7% 且达到铜牌档，AIME 2025 为 99.2%，LiveCodeBench v6 为 87.6%。协议说明比较不包含额外 tool call，大多数较小 benchmark 的 Gemini 结果是在多次 trial 上平均。关键区别是：IMO 2025 使用 **pass@1**，其他 matharena.ai 结果使用 **best-of-32**。因此，60.7% 的 IMO 与 99.2% 的 AIME 不能被当作相同采样预算下的结果；best-of-32 也不能证明训练 rollout 数或部署分支预算。

Card 还报告了细致的前沿安全 aggregate。自主 cyber offense 结果为 easy 73/76、medium 13/13、hard 3/13；key-skills 结果为 easy 6/8、medium 17/28、hard 4/12，其中 Deep Think 在 hard key-skills task 上最多使用 50 次尝试。RE-Bench 在七个任务中的五个上报告平均 normalized score 0.96，每个任务至少 20 次尝试，总预算 32 小时。Deceptive-alignment 评测中，模型解决 3/11 个 situational-awareness challenge 和 1/4 个 stealth challenge。Card 认为相应 cyber、ML R&D 与 deceptive-alignment critical capability level 未达到；CBRN Uplift Level 1 达到 early-warning threshold，需要进一步评测。

这些安全结果带有版本条件：FSF 评测使用的是 **preliminary Deep Think implementation**，其 thinking prompt 和 serving configuration 与实际部署给用户的版本略有不同。Google 表示不认为差异会实质改变评估，但没有发布 equivalence study。8 月 app 模型也被描述为 IMO 金牌档模型的更快变体；后者在 IMO 上会推理数小时。报告称人工检查与 Gemini 2.5 Pro triage 没有发现无效的 reward-hacked RE-Bench 实验，但 sampling rate、transcript、adjudication rule 与 false-negative estimate 均未公开。

上述数字都是厂商报告的 aggregate，并非独立复现。它们只支持对被评测配置的主张，不能证明训练数据质量、reward 有效性，也不能证明 app、preliminary FSF 和 IMO 版本等价。
