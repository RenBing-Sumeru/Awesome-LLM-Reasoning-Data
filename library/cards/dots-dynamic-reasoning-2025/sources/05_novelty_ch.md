DOTS 把**推理操作的选择**本身变成数据构造目标。它不只收集 solver 的最终 CoT，也不只是从多个无约束回答中挑选最佳答案，而是在一个小型、可解释的组合动作空间中搜索，并产生以 solver 为条件的轨迹标签。planner 学习在 solver 完成答案前，如何把问题路由到分析、求解和可选验证模块。

它与固定 prompting 和一般 test-time scaling 的关键差别在于结构。搜索决定是否改写或分解问题、使用 CoT 还是 PoT，以及是否调用 Self-Verification。重复的真值评分估计轨迹价值，而短路径 tie-break 会避免在成功率相同时无必要地选择更多模块。最终监督位于答案级和轨迹级；DOTS 不提供逐步骤正确性标签、学习式 process reward model 或独立训练的 verifier。

公开发布还具有并不常见的负面证据属性：已检查的原始 JSON 保留失败对话、预测答案、动作路径标识和二值分数。因此，研究者可以在 final-only SFT corpus 之外分析被拒绝的推理行为与 evaluator 敏感性。不过，不应把该发布描述为完整 search log：明确的累积分数、候选保留/剪枝快照、剪枝原因与最终选中 SFT 记录仍然缺失或未经核验。

其新颖性也受固定动作语法与 outcome evaluator 限制。12 条候选是人工定义的组合，不是学习得到的开放式工具；最优标签特定于 task-solving LLM 与答案 checker；GPT-4o 提供的是选择完成后的解释，而不是选择 reward。本工作的贡献因而是一套具体的 solver 条件化搜索与蒸馏配方，不是动态推理路径在语义上最优的普遍证明。
