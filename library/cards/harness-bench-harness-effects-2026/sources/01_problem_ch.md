Harness-Bench 衡量 harness 选择如何改变真实智能体工作流中的模型表现。 主来源是arXiv 2605.27922、harness-bench.ai 和 Qihoo360/harness-bench 仓库。

它回答的具体问题是：当 harness、oracle、runner、rubric 或 workflow scaffold 改变时，关于智能体的 benchmark 结论是否稳定。决策边界是harness-effects benchmark 和 workflow diagnosis，不是单一新任务族或模型训练数据集。

数据对象或评测面是106 个 sandboxed offline tasks，覆盖 8 类，并配套 harness 配置、manifest、prompt、fixture、oracle grader、最终 artifact、执行轨迹、usage statistics、validator outputs、模型结果和 5,194 条 execution trajectories。它对 atlas 的价值在于把反馈契约说清楚：基于最终 artifact、执行轨迹、usage 和 validator outputs 的 outcome/process/security scoring；可确定处使用 deterministic oracle，诊断处使用 LLM rubric。
