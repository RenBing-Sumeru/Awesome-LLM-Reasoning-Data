主来源是 2024 年 arXiv 论文 "Mobile-Agent: Autonomous Multi-Modal Mobile Device Agent with Visual Perception"，ICLR 2024 Large Language Model Agents Workshop 收录版本，以及官方 X-PLUG/MobileAgent 仓库。它要解决的问题是：多模态智能体如何只看手机截图，在不依赖系统 XML 文件或特定 app API 的情况下操作真实移动应用。

这张卡收它作为 mobile GUI-agent 环境和评测面，不把它当通用桌面 OS benchmark，也不把它当可直接复用的 RL 训练集。一个数据对象包括任务指令、手机截图或视觉观察、预测操作、执行轨迹和 Mobile-Eval 结果。

反馈契约是 Mobile-Eval 上的任务级和轨迹级评测，包括 success rate、progress score、relative efficiency 和 completion rate。它对 atlas 的价值是把视觉感知、动作 grounding 和移动环境漂移都放进可审计范围。
