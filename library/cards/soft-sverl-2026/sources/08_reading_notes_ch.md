- 同一参数同时充当策略和验证器；always-yes 坍缩是核心风险。
- J 次重复投票产生 Yes-rate，并非独立真值。
- 正负 replay 使用不同阈值，不确定样本被丢弃。
- Gold+replay 协同训练之外还有独立的 partition-style anti-inflation penalty。
- 代码、buffer、日志、超参数、许可和不可变检查点均不可用。

