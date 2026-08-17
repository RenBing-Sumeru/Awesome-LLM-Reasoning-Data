已有基线主要是闭式题自动打分，或昂贵的独立人类评估；早期 LLM-as-judge 往往只是把 LLM 当自动化工具，而不是把 judge 本身拿来测量。这篇的新意在于改变评测单位：judge 也成为可审计对象，需要通过人类一致性、bias stress tests 和两个互补的偏好评测面来验收。

具体变化是把一个紧凑的多轮 stress test、一个匿名 live preference arena、公开人类 judgment、以及显式 judge bias 分析组合起来。质量信号不只是“GPT-4 可以评分”，而是论文测量了 GPT-4 何时与人类一致、回答顺序和冗长性何时会扭曲结果、哪些缓解规则能降低已知失败。

并不新的部分包括 pairwise human preference、model win rate、prompt-based judging 和 aggregate leaderboard metric。复用前要检查 benchmark 是否进入后续训练数据、公开 MT-Bench 问题是否还能区分当前模型、Arena 投票是否来自目标日期范围、judge prompt 是否与发布实现一致，以及下游是否需要逐条标签而不是 aggregate agreement。
