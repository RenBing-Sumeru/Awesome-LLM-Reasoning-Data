核心贡献是在 UCT 引导的推理树内部放置 adaptive retrieval。系统在每个节点都可以直接回答、继续推理、拆分问题、为当前问题检索、为分解后的子问题检索，或总结先前内容。论文报告的主要设置为 4 个 rollout、最大深度 5、最多两个子问题、并发动作扩展和每次检索取 top 10 文档；论文还研究了 8、12、16 个 rollout。

反馈契约是 mixed，且相对于模型而定义。对某个动作生成的多个 completion 按答案等价性分组；多数 cluster 的频率提供 confidence，该 cluster 内的平均 log-likelihood 提供回传到 Q 和 N 的节点 reward。搜索结束后，语义一致的答案候选被分组；沿轨迹的节点 reward 先相乘，再按答案组累积并归一化，最高分组成为最终选择。gold answer 只在推理结束后用于 benchmark 评分，不在推理期间为搜索分支打分。

该契约不是独立的事实 verifier。模型可能一致地出错，而 likelihood 也可能偏好流畅但缺乏依据的推理。检索会改变后续节点可见的信息，因此，只有保存 query、返回文档、rank、corpus 或 API revision、reflection 决策、节点统计与选择分数，轨迹才可被完整解释。官方 release 提供了可在本地生成部分对象的代码路径，但没有发布论文运行本身的记录。
