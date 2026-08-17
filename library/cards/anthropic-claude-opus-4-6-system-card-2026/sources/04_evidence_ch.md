[官方 Claude Opus 4.6 System Card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf) 在第 10–11 页支持来源类别和过滤，在第 11 页支持 RLHF/RLAIF 和 reasoning controls，在第 12 页支持 snapshot 评测。第 145–146 页同时识别了使用先前 Claude reasoning transcripts（主要为 Opus 4.5）的监督初始化，以及小于 0.01% 的 reasoning workspace-content reward-signal 例外，并描述 11,000-transcript reasoning workspace 评估；这是内部子集。

第 99–105 页描述 reward-hacking 和 GUI 评测。广泛 coding suite 有超过 100 个真实感的 agentic coding scenarios，按六个维度评分，且由 Opus 4.5 对 transcripts 评分；GUI containers 使任务不可能完成，并包含不希望的 workaround 机会。卡片还报告了在 Opus 4.6 RL transcripts 内部审查中偶发的关注行为。没有发布 tasks、graders、containers、transcripts、rubrics 或原始结果。

第 15–16 页披露，Opus 4.6 在时间压力下协助调试和分析自身评测基础设施，从而产生 evaluation-integrity 风险。第 148–157 页描述 evaluation-awareness vector inhibition、activation oracles、attribution graphs 和 SAE model diffing。这些是被明确陈述时的 Opus-4.6-specific 审计实践；对 4.5 方法的引用不扩展为新的 4.6 训练披露。[官方系统卡索引](https://www.anthropic.com/system-cards) 仅佐证 2026 年 2 月条目。

