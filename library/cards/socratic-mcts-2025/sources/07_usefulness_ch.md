Socratic-MCTS 将 Rollout, Search, and Test-Time Trace Data 分类扩展到纯文本数学与代码之外。它提供了具体 schema：action 是 subquestion，state 含 subanswer，value 来自加权内部一致性，预算由 MCTS iteration 与 rollout 数量表示。该工作可用于比较语义树搜索、平坦 best-of-N 与仅靠 prompt 的分解。

可复用视觉搜索记录应包含图像标识与许可证、benchmark 条目与 split、模型/版本、root answer 与置信度、置信估计器、search-gate 决策、parent node、候选 subquestion、独立 subanswer、transition phrase、终止原因、UCT 分量、八个 rollout completion、解析选项、启发式权重、一致性 value、回传统计、direct-exit 状态、iteration 数、最终答案和 ground-truth evaluation。Ground-truth label 必须与内部 value signal 分开。缺少发布日志时，该论文是评测配方，而非轨迹数据源。
