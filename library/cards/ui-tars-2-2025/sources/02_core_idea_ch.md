核心构造是围绕 continual pre-training（CT）、supervised fine-tuning（SFT）和 reinforcement learning（RL）形成迭代式数据飞轮。流程从 Seed-thinking-1.6 出发，由当前 RL 策略生成新的环境交互 episode；验证函数把较高质量 episode 送入 SFT，把较低质量 episode 送入 CT，随后重新执行 CT→SFT→RL。报告没有披露验证函数、路由阈值、各分支产量或逐条路由决定。

episode 抽象采用 ReAct：每一步交错包含推理轨迹、动作和观测。动作既包括鼠标、键盘、滚动、PyAutoGUI 或 ADB 操作，也包括终端、文件、软件开发及其他工具的 SDK 函数。Working Memory 以较高保真度保留近期步骤，Episodic Memory 则压缩更早的意图与结果；具体上下文策略和记忆序列化格式均为 unknown。

环境本身就是数据对象的一部分。云端虚拟机覆盖 Windows、Ubuntu 和 Android；浏览器与游戏沙箱提供视觉观测和部分运行时状态；统一 SDK 负责分配、初始化、交互、截图或录屏、评估与资源释放。论文称虚拟机集群达到数千实例和数千 QPS，但未发布虚拟机镜像、依赖锁定文件、浏览器构建版本、重置脚本或 session 日志。

反馈契约按领域变化：游戏使用确定性函数和二元正确性；GUI-Browsing 使用参考答案判定；GUI-General 让 UI-TARS-2 基于完整文本历史和最后五张截图生成 outcome reward。论文明确游戏 JSON 包含标量奖励、终止标志、游戏版本和验证校验和，但没有说明所有 GUI episode 都采用该模式，也没有发布相应记录。
