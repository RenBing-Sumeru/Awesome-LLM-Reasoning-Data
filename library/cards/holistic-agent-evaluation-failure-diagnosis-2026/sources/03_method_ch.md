1. 输入：TRAIL 的层级 OpenTelemetry trace，包括 GAIA 的 multi-agent Open Deep Research trace 和 SWE-bench 的 single-agent CodeAct trace。
2. Bottom-up scoring：用 rubric-like metric 评估单个 LLM/tool span，输出 categorical score 和自然语言 rationale。
3. Top-down scoring：在 descendant spans 上评估 agent-level 行为，覆盖不能归因到单一局部调用的问题。
4. 传播与映射：把失败 span 信号向上聚合，并用 LLM-based mapper 将框架输出映射到 TRAIL category taxonomy。
5. 输出：预测失败 span、错误类别、rationale、trace-level score，以及 localization/categorization metrics。

论文说明 bottom-up 和 top-down metric 使用 GPT-5.4 作为 judge。复现必须固定 TRAIL version、trace ID、span schema、judge model/version、rubric prompt、mapper prompt、context-window handling 和 aggregation policy。
