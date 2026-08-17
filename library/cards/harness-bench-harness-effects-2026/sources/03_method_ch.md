输入是一条记录所需的任务材料和元数据：106 个 sandboxed offline tasks，覆盖 8 类，并配套 harness 配置、manifest、prompt、fixture、oracle grader、最终 artifact、执行轨迹、usage statistics、validator outputs、模型结果和 5,194 条 execution trajectories。

流程：定义 workflow tasks；改变 harness 组件；执行模型；收集轨迹和 evaluator 输出；比较不同 harness 变体下的分数、失败和排名变化。

输出是在该契约下评分的 benchmark record 或 evaluation summary：基于最终 artifact、执行轨迹、usage 和 validator outputs 的 outcome/process/security scoring；可确定处使用 deterministic oracle，诊断处使用 LLM rubric。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
