核心贡献是把 top-down agent-level metric 和 bottom-up span-level evaluation 结合起来。bottom-up judge 检查聚焦的 span，输出 metric score 与 rationale；top-down metric 检查跨 descendants 才出现的行为，例如 plan quality、tool coverage、重复调用。

相较 outcome-only benchmark 和 monolithic LLM-as-judge，它先分解长 trace 再判断。数据对象是一个 trace span 及其上下文、分数、rationale 和映射后的错误类别。方向标签是基于轨迹数据的 localized agent failure diagnosis。
