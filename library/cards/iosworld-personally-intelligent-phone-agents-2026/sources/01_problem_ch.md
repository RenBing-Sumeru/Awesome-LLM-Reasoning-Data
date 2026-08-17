iOSWorld 是 2026 年 arXiv 预印本，研究 personally intelligent phone agents。论文认为手机 agent 不能只执行孤立指令，还应能利用持久用户身份、历史、偏好和跨 app 状态。

评测面是 iPhone Simulator benchmark，包含 26 个可运行 SwiftUI app、一个共享虚构用户 profile、seeded cross-app data 和 133 个任务。任务分为 single-app、multi-app、memory/personalization 三类；每个任务有 goal、app scope、difficulty label 和 grading rubric。

收录边界：iOSWorld 是 iOS 模拟器 agent benchmark 与轨迹面，不是真实用户部署研究、Android benchmark 或训练配方。它对 atlas 的价值在于把 GUI 交互、app state、个人上下文和 rubric-based scoring 放到同一个数据对象里。
