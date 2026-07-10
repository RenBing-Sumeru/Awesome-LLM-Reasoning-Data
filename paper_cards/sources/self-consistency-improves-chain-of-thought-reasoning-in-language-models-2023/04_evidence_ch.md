论文报告了 GSM8K、SVAMP、AQuA、StrategyQA、ARC-challenge 等任务上的明显提升。它说明一个事实：对很多推理题，单条链不如多条链投票稳。

证据边界也清楚。多数投票只能放大“常见答案”，不能保证正确。如果模型经常犯同一种错，self-consistency 会把错答案选得更自信。
