假阴性审计报告称，在 226K 个被 Prime 拒绝的回答对中，按照双裁判规则有 87K 条、即 38.5% 实际正确；95K 道题中有 40K 道、即 42.1% 至少包含一个被漏掉的正确答案。200 条人工抽查支持该“共识正例子集”具有较高精度，但样本小、只检查正例，而且同时暴露出 3 个错误源 ground truth。

论文离线重新判断 GRPO rollout 后发现，截至训练结束，Qwen2.5-7B 的 46.7% prompt 与 Qwen2.5-Math-7B 的 50.5% prompt 至少遇到一条假阴性 rollout；假阴性平均约占 rollout 的 20%。这些结果支持一个固定规则验证器会随策略答案多样化而变陈旧的判断。

HardVerify-Math 上报告的验证器对比有利于 TinyV，采用 add-on 奖励的 GRPO 平均下游 benchmark 结果也高于 Prime。但提升并不一致：表格中，Qwen2.5-7B 的 AMC 准确率以及 Qwen2.5-Math-7B 的 Olympiad 准确率都低于对应的 Prime 奖励设置。运行时间为 TinyV 每步 143.23 秒、Prime 每步 135.04 秒，约增加 6%。

这些证据说明该方案在所报告构建与 RL 设置下有用，不能证明数据内在质量。论文没有报告 source-disjoint held-out TinyV 的 precision、recall、false-positive rate、calibration 或 confusion matrix。下游策略准确率不能替代这些验证器诊断；尤其是 TinyV 假阳性会直接给错误答案创造正奖励。
