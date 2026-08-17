最重要的证据冲突尚未解决：官方 GitHub README 声称 **SWE-Bench Verified 80.2%**，而官方 Hugging Face 评测附件记录 **75.80**。发布没有解释 checkpoint、harness、model-level instruction、上下文策略、run 聚合或日期差异。README 还描述了使用覆盖 model-level instruction、四次运行平均的内部 Claude Code harness，但 raw patch、日志、种子和逐次结果均不可用。

发布报告数十万 RL 环境、超过 20 万软件环境，以及树结构样本合并带来的约 40× 训练加速。这些都是作者主张，没有公开环境清单、计数定义、ablation 细节、基线硬件或独立复现。

其他结果同样依赖 harness：BrowseComp 的 76.3 使用“超过 30% 上下文就清空历史”的策略；Terminal Bench 2 修改部分 Dockerfile 并重试空响应；内部 VIBE-Pro、RISE、GDPval-MM、Finance Modeling 任务和输出均封闭。公开 229B FP8 checkpoint 只能验证可推理，不能验证所述训练管线。
