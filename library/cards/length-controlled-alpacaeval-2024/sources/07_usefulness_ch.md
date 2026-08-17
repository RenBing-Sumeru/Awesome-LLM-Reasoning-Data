这篇适合作为任何 LLM-as-judge leaderboard 的审计清单，尤其是那些可能奖励表面特征的评测。它给出一个很紧凑的模式：先找出可测量混杂因素，再把 judge preference 建模为该混杂因素的函数，最后报告反事实分数，而不是只报告 raw score。

在 atlas 中复用时，要保留 instruction id、候选回答、参考回答、生成器身份、输出长度、auto-annotator 配置、随机化顺序、raw preference/probability、raw win rate、LC win rate、cache/version 元数据和 leaderboard 日期。这张卡最适合作为 benchmark audit 和 reward/verifier 设计参考，尤其是在把自动评测分数用于模型开发决策之前。
