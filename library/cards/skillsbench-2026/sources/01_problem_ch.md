一手来源线索是 https://arxiv.org/abs/2602.12670。公开语境是 arXiv，年份为 2026。它要解决的问题是为 task, model output, skill label, checker/judge result, and score. 提供可复用的评测面。

边界是 evaluation 与 audit：不能把它直接读成训练配方、模型普遍可靠性的证明，或可直接迁移的 reward 信号，除非官方来源单独披露 scorer、split、license 和 artifact 版本。一个 benchmark instance 应围绕 task input、expected answer 或 rubric、model output、scoring metadata 和 aggregate reporting policy 来理解。
