核心贡献是一个持续维护的 creative-writing benchmark 页面，包含 judge-based scores，以及 repetition 和 overused model-like phrasing 的诊断列。机制是让模型按 prompts 生成 prose，再由 judge 评分并在 leaderboard 上比较。

最近的参照物是 human-preference writing evaluations 和 general chat leaderboards。这里的变化是 domain-specific creative-writing surface，并用 style-proxy columns 暴露重复和公式化输出。

反馈契约是 LLM-judge contract，因此含义取决于 prompt set、judge model、rubric、generation settings 和 leaderboard snapshot。
