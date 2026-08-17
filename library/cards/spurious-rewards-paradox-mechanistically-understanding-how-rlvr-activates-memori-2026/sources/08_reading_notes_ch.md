1. 定位：Qwen 的 RLVR 涨分可能是捷径检索而非新推理；做能力主张前先比较泄漏组与干净对照。

2. 抓手：选取先错后对样本，联用困惑度、Path Patching、JSD、Logit Lens、NDE；Anchor 信号定位在 L18–20。

3. Artifact：作者只公开分析代码。训练/数据准备依赖 Spurious Rewards，额外 OLMo、LLaMA、Qwen3 checkpoint 尚未公开。

4. 证据：门控抑制在 MATH-500 的 128 个泄漏样本中触发 79 个，准确率由 100.0% 变为 85.16%；在 AIME-2025 与 LiveMathBench 对照中均不触发。

5. 决定：离线审计可疑 checkpoint；标记污染成功前，须核验新鲜对照、gate 误触发和非泄漏行为。

读卡时还要固定 benchmark 版本、chat template、解码温度和 RLVR checkpoint；这些变化都会改变先错后对集合。不要将 L18–20 的定位直接移植到别的架构，应先验证层深、MLP 结构和污染信号是否可比。
