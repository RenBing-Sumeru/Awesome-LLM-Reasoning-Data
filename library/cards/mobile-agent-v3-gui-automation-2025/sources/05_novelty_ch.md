已有工作包括移动视觉 agent、GUI grounding model 和独立 GUI benchmark。Mobile-Agent-v3 的变化在于把 GUI 自动化的系统边界改成 foundation model + executable environment + data flywheel。

方向信号不只是 AndroidWorld 或 OSWorld 分数更高，而是 GUI-agent 的训练和评测应共享 state/action trace、环境反馈和轨迹质量过滤。质量信号是官方 arXiv 论文和公开 MobileAgent 系列仓库提供了模型与框架入口。

不新的部分包括用 VLM 做 GUI 感知、执行浏览器/移动/桌面动作，以及 benchmark success metric。复用前要检查模型/数据 license、仓库 revision、环境可用性、benchmark split、轨迹过滤规则，以及是否依赖私有云服务。
