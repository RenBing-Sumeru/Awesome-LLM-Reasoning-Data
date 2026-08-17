核心贡献是从**针对特定 solver 搜索得到的最优推理轨迹**中训练 planner，而不是为所有问题预设一种推理配方。DOTS 定义了三个有序动作层：

1. 分析层：query rewriting、query decomposition 或 Empty；
2. 求解层：CoT 或 PoT；
3. 验证层：Self-Verification 或 Empty。

三层的笛卡尔积包含 \(3 \times 2 \times 2 = 12\) 条轨迹。公开仓库把这些动作命名为 `query_rewriting`、`planning`、`CoT`、`programming_solver`、`verifier` 和空字符串，并在第四个终止位置加入 `direct_answering`。这些是动作路径，不是逐步骤正确性标注。

对每个问题和 solver，搜索会多次采样所有当前有效路径。任务特定的答案抽取与检查产生二值成功信号，候选路径再按累积成功率排序。每轮搜索后只保留更小的 top set，并在分数相同时偏向更短路径。随后，GPT-4o 解释为什么所选路径合适。external planner 预测解释和路径，而 solver 保持冻结；internalized planner 则用一个 Llama-3-8B-Instruct 同时预测解释、路径、solver 推理过程与答案。

反馈契约包含两个必须分开的部分。selector 使用程序化 outcome supervision：MATH 使用 simple-eval，Game of 24 使用标准 checker，其他报告任务采用精确字符串匹配。Self-Verification 只是候选轨迹内部的可选动作：同一个 solver 生成自然语言的正确性判断，并可能据此重试。它不是独立 verifier，不能与评估轨迹成功率的真值 evaluator 混为一谈。

公开发布保留原始 trial 对话、轨迹标识、预测答案、二值分数以及可观察到的失败样本，而不只发布最终入选的 SFT 目标，因此具有较强的审计价值。但它没有提供可文档化重建的累积分数表、每轮剪枝后的候选集合、剪枝原因、重试/停止日志、随机种子或最终处理后的 planner 样本。本 Card 因而把原始 rollout 证据与最终训练数据视为两个不同 artifact。
