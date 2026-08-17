InfiniteBench 是 2024 年发布的 ACL 2024 long paper / arXiv 论文，用来评估 LLM 在 100K token 以上上下文中的处理能力。它针对的缺口是：早期公开长上下文 benchmark 多停留在约 10K token，而新模型已经宣称支持更长窗口。

评测面包含 12 个任务，覆盖 retrieval、code、math、novels、dialogue 等长上下文场景。官方 artifact 以 JSONL 类记录暴露 context、input、answer，有些任务还包含 options；仓库表格给出每个任务的样本数和平均输入/输出 token。

收录边界：它是长上下文处理的评测 benchmark，不是训练语料、记忆架构或检索系统。它对 atlas 的价值在于把“长上下文能力”落到可版本化的长输入对象和任务级 metric 上。
