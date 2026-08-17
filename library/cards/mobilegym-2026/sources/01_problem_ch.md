移动 GUI agent 研究所需的不只是截图和动作：在线强化学习需要从同一初始状态复制大量环境实例，可靠评测则需要能看到渲染界面背后状态变化的 terminal predicate。真实应用的账户状态难以重置或分叉，`adb` 或 accessibility API 只能暴露部分状态，发送消息、转账或修改账户还可能产生不可逆后果。MobileGym 用浏览器内实现的 Android-like 环境解决这一基础设施问题，但并不复刻专有应用后端（论文 §1、§3.1）。

公开的研究对象是“模拟器加任务系统”，不是固定轨迹语料。MobileGym-Bench 在 28 个模拟应用上提供 416 个参数化 task template，其中 160 个用于训练、256 个严格不重叠地用于测试。运行时先采样指令变体和参数、向初始 JSON 状态注入 patch，再让 agent 观察截图并执行 GUI 动作，最后记录结构化终局状态、goal checks、诊断项和标量 reward。论文称有限参数空间可产生超过 27,000 个任务实例，尚未计入连续参数范围（论文 §4–§4.2）。

它属于 `environment_agent_trajectory_data`，因为关键数据对象是与环境绑定的 episode：task template 与 seed、初始状态 patch、截图/动作序列、终局状态、程序化检查、终止状态和 reward。它不是离线 demonstration 发布，也不是真机基准，更不能证明模拟器复现了专有服务或 Android 的像素级内部机制。

本 Card 依据 arXiv v2、附录、官方项目页/仓库、release、许可证和当前 RL 代码达到 L4 内容深度。证据边界仍然明确：未核验到论文实验 rollout、论文运行所用的精确 commit、训练后 checkpoint 或完整 reward/checkpoint ledger 的公开发布。
