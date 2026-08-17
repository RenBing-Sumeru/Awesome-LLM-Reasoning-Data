最强的证据来自 oracle 的 before/after 比较，因为新增 benchmark 暴露比例是已知的。五种 detector metric 都未能随这些比例稳定变化。即使 MMLU 与 BBH test 被 100% 加入，方法也不能可靠检出，说明带 answer augmentation 的指令微调暴露存在 false-negative 路径。反过来，在同一 benchmark 的 train split 上微调后，新增比例为 0% 的 test split 也可能发生指标变化，形成由同分布迁移造成的 test-set contamination false positive。

Min-K% 尤其能说明可靠性问题：已知新增污染后，所有受测 split 的值都下降，与预期方向相反。这并不证明原 benchmark 数据是干净的，也不能证明 Min-K% 在所有场景中总会失败；它只说明该统计量及其解释没有稳健迁移到此受控 SFT 设置。

五种方法之间的一致性同样很弱。非对角 Spearman correlation 范围为 `-0.198` 到 `0.320`。论文承认，在对齐 p-value 与其他 metric direction 时采用了 “slight statistical liberty”。因此，这些相关性只能说明所选聚合下各实现没有相互印证，不能当作任一 detector sensitivity 或 specificity 的校准估计。

四模型、八 benchmark 的表格给出了现代闭源与开源权重模型的描述性输出，但这些模型真实的历史训练暴露未知。较高的 WPQ 或 Local Order accuracy、较低的 Token Overlap p-value、Min-K summary 或 Canonical Order p-value 都不能独立证明污染。论文对某些真实模型 split 的“可能污染”判断仍是方法依赖的假设，不是 ground-truth label。

论文没有任何结果证明这些数据适合模型训练。benchmark performance 上升可能来自 memorization、generalization 或其他训练变化；detector performance 变化也可能来自 prompt artifact、likelihood calibration、distribution shift、顺序或 judge variance。证据支持的是一个负面审计结论——现有 probe 不一致且脆弱——而不是把公开的 1,650 条 probe 记录称作经验证的高质量训练数据。
