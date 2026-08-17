主来源是 2025 年 arXiv 论文 "Mobile-Agent-v3: Fundamental Agents for GUI Automation" 和官方 X-PLUG/MobileAgent 仓库。它要解决的问题是：如何把 GUI foundation model、云端虚拟环境和轨迹生产循环结合起来，使 GUI agent 不局限于单一手机 benchmark。

这张卡把它视为 agent-environment 与 trajectory surface，不把它当单个 leaderboard 条目，也不把它当完整披露的训练语料。一个数据对象可以是 GUI 任务、截图/状态观察、模型动作、执行结果、自进化轨迹或 benchmark outcome。

反馈契约是 mixed：AndroidWorld 与 OSWorld-Verified 上的环境任务成功和 benchmark 分数，以及自进化框架内部的轨迹筛选/判断。它对 atlas 的价值是把 GUI 评测、反馈收集和后续 post-training 数据显式连起来。
