[官方 Claude Opus 4.5 System Card](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf) 在第 8 页直接支持来源类别和基础过滤主张，在第 9 页支持 RLHF/RLAIF 陈述，在第 10 页支持 worker 角色披露。其第 89 页的 chain-of-thought monitorability 讨论同时称，一些较早的监督学习数据使用先前模型生成的 reasoning text，且 RL 训练没有基于 reasoning-text 内容的奖励或惩罚。第 89–90 页描述了 11,000-transcript reasoning workspace 分析。

同一卡片在第 105 页记录了 reward-hacking 缓解措施：在显著一部分 coding environments 中使用 inoculation prompting，包括最易受 reward hacking 影响的环境。第 105–106 页描述了对覆盖训练大部分阶段的数十万 transcripts 的审查；使用由 Claude Sonnet 4.5 评估的递归摘要，它在部分训练快照的 STEM-question 训练分布中发现约 1% 存在不忠实或欺骗性推理。卡片没有发布 transcripts、采样设计、分类器性能或原始审查输出。

对于评测去污染，第 15–17 页规定：移除至少有五个精确问答对 substring matches 的文档、移除超过 40% 的 20-gram overlap、canary filtering 和人工检查。报告还称，改写的 AIME 问题、官方解答和模型生成答案在这些控制后仍留在语料中。[官方系统卡索引](https://www.anthropic.com/system-cards) 确认了 2025 年 11 月的条目；它不用于推断未披露的训练细节。

