OmniGUI 要解决的问题是：当智能手机 GUI 的下一步动作依赖同一步的截图、音频、视频和历史动作时，GUI agent 应该如何被评测。主来源是 2026 年 arXiv 报告，以及官方 project、GitHub、Hugging Face 发布。

这张卡的边界是 benchmark / environment harness，不是模型训练配方，也不是闭环自主 rollout benchmark。一个数据对象是 Android 专家演示 episode，拆成 step-level 观测：当前截图、前一动作到当前步骤之间的视频片段、同步设备音频、历史动作、任务目标，以及 ground-truth 动作原语和参数，例如归一化坐标或输入字符串。

反馈契约是和专家轨迹做确定性匹配。Type Match 判断动作原语；Exact Match 还检查参数；episode Success Rate 要求每一步都满足 EM；Goal Progress 是 episode 内 EM 步骤比例。它对 atlas 有价值，因为很多 GUI benchmark 只看静态截图，或把音视频当作任务前参考材料，而 OmniGUI 把瞬时多模态信号放进每一步动作面。
