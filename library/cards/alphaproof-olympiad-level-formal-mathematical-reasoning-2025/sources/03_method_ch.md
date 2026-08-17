训练先在约 300B token 的代码与数学文本上进行 next-token 预训练，再用约 300K 条 Mathlib state–tactic pair 做 SFT。一个以人工和合成数据迭代改进的 Gemini-based formalization model，将约一百万道非形式问题自动形式化为约八千万个有效 Lean 陈述。matchmaker 为分布式 actor 分配陈述、自适应预算以及证明/否证角色；由 proof network 引导的 AND–OR 树搜索在 Lean 中采样并验证 tactic。

Proof、disproof 和 timeout 提供环境反馈。learner 按 10% Mathlib SFT pair 与 90% actor 生成 proof/disproof replay 的固定比例采样，以 tactic cross-entropy 训练 policy，并用 return 训练 value head；失败尝试被排除。TTRL 使用 variant generator 构造相关形式变体，并以聚焦 RL 适配目标问题。最终证明由 Lean 命令行工具独立复核，并限制为三个公认的内置公理。实际发布的 replay 内容仍不可得。
