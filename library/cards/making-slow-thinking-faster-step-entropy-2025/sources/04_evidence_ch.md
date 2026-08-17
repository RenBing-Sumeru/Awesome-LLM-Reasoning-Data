官方 [ICLR 2026 海报记录](https://iclr.cc/virtual/2026/poster/10008526)、[OpenReview 记录](https://openreview.net/forum?id=cGLqQfS5wH) 和 [arXiv v2 论文](https://arxiv.org/abs/2508.03346) 核验了题名、作者、录用状态与公开配方。作者关联的 [代码仓库](https://github.com/staymylove/COT_Compresstion_via_Step_entropy) 核验了生成、掩码、SFT 和 GRPO 的代码表面，而非可下载的论文对应轨迹数据集。

论文报告，在其受控实验中低熵剪枝至 80% 仍保持稳定，而高熵剪枝和随机剪枝会退化。它以 DeepSeek-R1 7B/14B 和 Qwen3-8B 评估静态剪枝，并报告数学基准和部分 MMLU 领域结果。这些是数据、选择器、过滤、SFT、GRPO 与推理配置耦合流水线的报告结果；它们并未证明数据可独立复用的质量，也没有隔离每个组成部分的因果影响。

