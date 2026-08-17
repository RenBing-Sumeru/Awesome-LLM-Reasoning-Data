在 GSM8K 上，Table 1 报告选择 1,000 条 prompts 的 pass@1 为 77.5%，选择 2,000 条为 78.3%，而 7,473 条全量训练为 77.0%；100 与 500 条时分别为 74.8% 和 76.4%。这些是在一个模型/设置下由论文报告的单次结果，不是 selected records 内在质量的测量。

从 DAPO-MATH-17K 选择 1,000 条时，Table 2 报告 Qwen2.5-3B 的五 benchmark 平均分为 42.4，全量训练为 44.9；Qwen2.5-7B 分别为 54.6 和 58.9。因此小子集在初始设置中接近但并未普遍达到全量数据。延长训练后，Table 5 报告 3B 子集在 2,000 steps 时的 GSM8K/MATH500/AMC2023 为 83.8/67.8/36.9，而全量 baseline 在 2,174 steps 时为 83.6/65.8/31.0；对应的 7B 对照在不同指标上有得有失。

组件证据方向一致，但范围有限。移除 warmup、learnability 或 gradient similarity 会降低若干报告指标；learnability-only 和 pass@8 filtering 本身仍是强 baselines，而 LearnAlign 在 Table 13 的三个 benchmarks 上更高。加入 K-means feature diversity 没有稳定提升。三个 warmup subsets 得到 GSM8K 79.3–81.2、MATH500 60.2–61.8、AMC2023 28.3–29.5，说明 checkpoint path 存在一定敏感性，而非完全不变。

Qwen2.5-3B 的时间审计报告 selection 共 8h55m：warmup 2h2m、rollouts 2h41m、gradient estimation 4h12m、matrix selection 12.7 秒；之后 selected-subset training 为 2.4 小时，全量训练为 42.3 小时。硬件只写为 single GPU。由于没有官方代码、selected subsets、run logs 或 gradients，无法独立复现或做逐记录检查。
