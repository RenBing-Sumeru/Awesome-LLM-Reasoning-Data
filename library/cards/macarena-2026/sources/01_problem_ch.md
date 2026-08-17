本卡的主要来源是2026-06-04提交的arXiv:2606.06560v1，并辅以在commit `dcdc7d366da12641578ab90f085d69db91651c58`上检查的MacPaw官方仓库，以及2026-07-20检查的官方Hugging Face VM bucket。论文与官方artifact均说明该文被ICML 2026的Second Workshop on Agents in the Wild: Safety, Security, and Beyond（AIWILD）接收；尚未核实到paper-specific OpenReview或proceedings条目。

MacArena处理的是computer-use-agent评测中的具体基础设施缺口：macOS任务集合需要在线环境来暴露完整桌面状态、鼠标/键盘action、reset逻辑与可执行终态评估，而不只是任务文本或静态截图。发布包含**50个应用上的421项任务**，由**221项OSWorld-derived任务、151项macOSWorld-derived任务和49项MacArena-specific任务**组成；49项自定义任务覆盖五类和20个应用。

一条任务对象包含ID、自然语言`instruction`、初始化`pre_command`或结构化`config`、task-specific `evaluator`，以及source/application/category和可选delay、upload、proxy或drift-control字段。runtime episode再加入全桌面screenshot、可选accessibility tree或terminal output、鼠标/键盘action、终止声明、最终evaluator score，以及本地写入的trace/result artifact。官方runner能够生成这些记录，但**尚未确认论文所报告rollout的规范化公开语料或不可变manifest**。

MacArena归入`environment_agent_trajectory_data`，因为VM状态、observation/action loop、reset政策、terminal predicate与evaluator共同定义交互episode；它也属于`benchmarks_evaluation_surfaces`，因为任务成功由程序化检查最终VM状态计算。双语正文达到待人工审核的L4内容深度，但canonical metadata保持`L3_summary_ready`；已有证据只支持evaluation与audit，不支持声称已发布训练轨迹。
