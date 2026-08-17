一句话贡献是：把 evaluation harness 本身作为一等变量，而不是隐藏的后台设施。

核心机制是在不同 harness 设置下运行可比 agent workflow，收集轨迹和评分输出，并测量排名或分数如何变化。被评分对象是106 个 sandboxed offline tasks，覆盖 8 类，并配套 harness 配置、manifest、prompt、fixture、oracle grader、最终 artifact、执行轨迹、usage statistics、validator outputs、模型结果和 5,194 条 execution trajectories，反馈契约是基于最终 artifact、执行轨迹、usage 和 validator outputs 的 outcome/process/security scoring；可确定处使用 deterministic oracle，诊断处使用 LLM rubric。

最近对比对象是只报告单一分数、没有隔离 runner、oracle、prompt、rubric 和环境效应的 agent benchmark。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
