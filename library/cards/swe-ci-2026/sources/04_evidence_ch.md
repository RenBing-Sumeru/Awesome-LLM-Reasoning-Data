论文评测了来自 8 个提供方的 20 个模型，并报告消耗超过 10 billion tokens。大多数模型的 zero-regression rate 低于 0.25，只有 2 个 Claude Opus 模型超过 0.5。在 20 个模型中，有 12 个的回归频率与轮数呈正相关，另有 11 个的回归幅度与轮数呈负相关。这些结果支持“即使局部 patch 改善了测试，持续正确仍然困难”的结论。

代码风格证据指向同一问题：20 个模型中有 15 个在 Pylint 上胜过 human oracle code，但全部 20 个在更深层的 MI maintainability 指标上落后。多数模型解决的任务少于 50%，最大增益通常出现在第 1–4 轮。这些是评测结果，并不能证明 EvoScore 完整测量了 maintainability；结论依赖 target-test 覆盖、确定性执行、完整 episode 留存，以及对语义失败和初始化、依赖、超时、API 或容器失败的正确区分。
