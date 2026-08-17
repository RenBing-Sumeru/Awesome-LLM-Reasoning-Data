GAIA 用 466 个现实 assistant 问题评测工具使用、多模态、网页浏览和推理的组合能力。 主来源是arXiv 论文、ICLR/OpenReview 记录和 Hugging Face GAIA benchmark 页面。

它回答的具体问题是：AI assistant 能否解决表述简单、但需要稳定编排工具而不只是参数知识的现实问题。决策边界是隐藏答案 assistant evaluation，不是公开 state-action 轨迹语料。

数据对象或评测面是问题、可选文件或多模态输入、level 元数据和最终答案目标；发布对象不是 state-action supervision，其中 300 个答案保留给 leaderboard 使用。它对 atlas 的价值在于把反馈契约说清楚：官方答案集、答案归一化和隐藏答案 leaderboard policy 下的 final-answer correctness。
