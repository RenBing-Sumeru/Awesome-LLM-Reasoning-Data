已有 fixed-budget 工作对整题只作一次全局长度决策，而仅规划的 baseline 虽公开分解，却不分配局部份额。Plan-and-Budget 把这两个部分结合：将模型生成的子问题 credits 转换为受调度规则约束的分配，并用任务分数和总 completion-token 成本评测所得 episode。

因此，实用的新意是一个分配接口——`steps`、`credits`、level budget、schedule 和 token accounting——而不是新的 verifier、过程监督数据集或 RL 目标。仓库使该接口足够可检查，可重放其向下取整再分配余数的规则。并不新、或继承自既有工作的部分包括上游 benchmark 数据、任务指标、LLM prompting 和外部模型服务。

对 reasoning-data 研究而言，它是一个方向信号，因为它迫使读者追问归因：E3 的变化可能来自规划、credit 估计、调度、模型/provider 行为、任务 scorer 或总计算量。复用前应先核查已分解数据的来源、split/version 对齐，以及拟部署场景是否需要硬预算而不是 prompt-level 预算约束。
