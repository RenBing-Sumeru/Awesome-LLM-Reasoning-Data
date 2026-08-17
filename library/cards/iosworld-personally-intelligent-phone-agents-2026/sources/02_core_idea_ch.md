核心贡献是一个可复现的 native-iOS benchmark，让 agent 在持久虚构用户数据上行动，而不是面对空白手机。关键机制是发布可运行 app、seeded user state、任务、rubrics、agent runners，以及本地 Mac 或 EC2 Mac 执行工具。

数据对象是包含 goal、apps、category、difficulty、rubric criteria 的 task record，加上 screenshots、planned/executed actions、events 和最终 rubric evaluation 组成的 trajectory。反馈契约是混合式：每个任务分数为 `n_satisfied / n_criteria`，pass rate 统计所有 criteria 都满足的任务；仓库 README 说明默认 judge 使用 OpenAI。

最接近的对比是 AndroidWorld、OSWorld 类 computer-use benchmark 和 mobile GUI grounding 数据集。iOSWorld 的区别是 native iOS、跨 app 个人上下文，以及可选 vision+XML observation。
