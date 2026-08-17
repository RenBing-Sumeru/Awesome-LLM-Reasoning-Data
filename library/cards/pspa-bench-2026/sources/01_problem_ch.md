PSPA-Bench 是 2026 年 arXiv 论文提出的个性化智能手机 GUI agent benchmark，主来源是 2026-03-31 发布的 arXiv:2603.29318；arXiv HTML 标记 license 为 CC BY 4.0，并给出 anonymous.4open.science artifact 链接。

它要解决的问题是：现有手机 GUI agent 基准多评测通用任务完成，而真实手机使用高度依赖用户偏好、历史行为和工作流。PSPA-Bench 的边界是 personalized GUI-agent evaluation；它不是普通 Android 自动化基准，不是真实用户日志发布，也不是训练 recipe。

评测对象是由 Task Decomposition Graph（TDG）支撑的个性化 GUI 任务。一个任务实例包含 persona/user context、模板实例化后的个性化指令、GUI 状态、动作、执行轨迹，以及带 fixed node 和 flexible preference-sensitive node 的 TDG path。它对 atlas 的价值在于反馈契约不只看二值成功，而是同时度量任务进度和偏好满足。
