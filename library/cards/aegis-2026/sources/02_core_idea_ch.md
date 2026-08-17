一句话贡献是：Aegis 把确定性成功的 MAS 运行转化为经 evaluator 确认失败的 episode，将预先规划的 agent/error 干预作为 episode-level attribution label，并把这些标签用于 SFT、结构化 GRPO reward、contrastive learning 与 benchmark evaluation。

核心机制把 intervention 与 verification 分开。adaptive LLM manipulator 读取 task 与 agent role，选择 prompt injection 或 response corruption，并从 14 种 MAST 派生 mode 中创建唯一的 target-agent/error-mode pair 计划；这些 mode 分为 specification issue、inter-agent misalignment 与 task-verification failure 三类。受扰动 MAS 继续正常执行；只有 task-specific evaluator 观察到原本成功的任务变成失败时，计划标签才进入语料。DyLAN 还接受 post-hoc label refinement，但其流程披露不足，无法独立审计。

反馈契约是 **mixed**。Math 使用归一化 numeric/LaTeX comparison；HumanEval 在 timeout 下执行 test；SciBench 使用考虑单位的 numeric tolerance；MMLU-Pro 抽取 A–J 选项；GAIA 则先抽取 answer，再由 GPT-4o-mini 进行 semantic judgment。这些检查按照 benchmark-specific rule 观察 terminal answer behavior；它们不会直接验证每个 intermediate turn，也不能证明每个 injected error 都是必要原因，更不能排除 evaluator 的 false positive 与 false negative。

在 GRPO 中，反馈从构造阶段的 terminal failure 转为 output-level scalar reward。prediction 与 gold JSON 被解析为 agent/error pair：完全匹配得到 full credit；agent 或 error 单侧正确可获得不可重复的 partial credit；malformed JSON、duplicate、false positive 与 excess output 会被惩罚；最终分数在优化前归一化（论文第 5.2 节、Appendix C.2）。该 reward 检查结构化归因，不检查模型是否逐 turn 重建因果链。

论文内部最接近的评测对照是作为 out-of-distribution attribution benchmark 的 Who&When。Aegis-Bench 与 train/validation 来自相同六类 source task，而 Who&When 测试对自然呈现失败的迁移。关键差异是：Aegis 标签由受控 intervention 与被保留的 terminal failure 生成；这种设计能扩展标签规模，但不能为 emergent 或 multi-cause failure 提供反事实 causal ground truth。
