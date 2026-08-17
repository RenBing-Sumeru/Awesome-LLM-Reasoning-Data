《CMCTS: A Constrained Monte Carlo Tree Search Framework for Mathematical Reasoning in Large Language Model》（arXiv:2502.11169）研究基础 LLM 的长链数学搜索：无约束 MCTS 扩展可能产生冗余状态或不合理顺序，Native MCTS 让模型从宽泛空间提出动作，并可能依赖模型自身进行评估。论文考察能否在不更新 policy model 的情况下，用预定义动作词表、偏序规则和 process reward model 提高状态多样性并引导搜索。

数据对象是数学搜索树，而不只是最终 chain of thought：问题、状态文本、所选动作及动作类型、父子边、访问次数、Q 与 V 估计、偏序可用性、扩展与 simulation 路径、终止事件、回传 reward、候选轨迹、投票数和基于 reward 的平局裁决。当前官方 arXiv v2 描述四个动作子集：understanding、reflection、coding 和 summary。论文与仓库给出了实现 recipe，但完整树、PRM 分数、拒绝状态和实验 lineage 的版本化发布尚未确认。
