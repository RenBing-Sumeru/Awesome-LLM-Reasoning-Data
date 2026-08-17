主要贡献是围绕 GUI-Owl 这个 GUI 自动化视觉语言基础模型，构建一个带自进化循环的 GUI-agent 框架，在云端 GUI 环境中生产并筛选轨迹。核心机制是把感知/动作规划、可执行环境和反馈驱动的数据生成耦合起来。

评测面包括移动端和桌面 GUI 任务，论文重点报告 AndroidWorld 与 OSWorld-Verified。反馈契约是环境成功或 benchmark scoring，内部轨迹 judgment 用于数据生产，但不是公开通用 verifier。

最接近的对比是 Mobile-Agent v1、SeeClick/ScreenSpot 类 GUI grounding、AndroidWorld 和 OSWorld。方向标签是 GUI-agent feedback flywheel：模型、环境、轨迹数据和 verifier 信号都属于对象的一部分。
