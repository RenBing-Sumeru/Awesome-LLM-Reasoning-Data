1. 输入：日常任务指令、Android emulator 配置、屏幕图像和/或 view-hierarchy observation、历史动作，以及 agent policy。
2. 环境：B-MoCA 在准备好的环境中随机化图标位置、图标大小、壁纸、语言、dark mode、设备类型等配置。
3. 动作接口：agent 可使用连续 dual-gesture、离散 UI/location action、导航按钮，以及面向 LLM/MLLM prompt 的文本动作。
4. 反馈：rule-based success detector 通过 ADB/Appium 类接口检查 app data 和 UI 属性；episode 由成功或失败策略终止。
5. 输出：131 个任务或若干挑战任务上的 success rate、跨环境比较，以及用 human demonstration 训练的 imitation baseline。复现依赖 release 版本、emulator image、app 版本、随机化配置、detector 代码、prompt、模型 API 版本和 demonstration split。
