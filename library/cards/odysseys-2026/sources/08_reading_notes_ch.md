- 先读第 3–4 节，理解 200 个任务的构造、1,225 条 rubric 契约、OSWorld 执行循环和 Gemini 逐 rubric judge；附录提供筛选、人工一致性和 200 步扩展细节。

- 明确对象边界：公开任务/rubric/配置记录不等于 2,380 条来源历史、696 条保留 journey 或完整模型轨迹；`training_use` 仅为 evaluation。

- 审计评分器输入与排除规则。原生 OSWorld evaluator 为 `infeasible`，rubric 权重缺失；缺少数值型 `result.txt` 的运行默认被跳过，除非显式纳入 incomplete。

- 把所有实时网页分数视为有版本的观察。应记录起始 URL、站点状态、VM/浏览器/OSWorld 修订、网络身份、重置行为、judge 快照、全部失败运行、隐私保护和 VM 安全控制。
