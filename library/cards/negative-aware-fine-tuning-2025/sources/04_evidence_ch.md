在相同数据、基础设施和主要超参数下，表 1 报告 7B 模型在六个数学 benchmark 上 NFT 平均 51.7，RFT 为 48.3，DAPO 为 51.2。32B 模型中 NFT 为 59.2，RFT 为 52.8，DAPO 为 59.9。论文对 7B 训练曲线报告 3–4 次独立实验，并显示去掉负数据学习会降低验证表现。ablation 支持提高困难题权重，也显示过强负例惩罚会损害性能；默认 clip 为 1.0。

论文的理论结果只在严格 on-policy、指定权重和二元 reward 假设下证明与 GRPO 梯度等价；超出该边界的经验接近是实验结果，而非一般等价定理。benchmark 结果支持 optimizer recipe，但不能证明每条 negative trace 都有信息或标签正确。官方权重与代码提高了可复现性，但原始在线轨迹与 verifier provenance 仍不完整。
