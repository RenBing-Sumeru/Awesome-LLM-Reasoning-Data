核心贡献是一套 step-level 智能手机 GUI benchmark：每个决策步都可以接收静态视觉状态、同步音频、短视频片段和历史动作。论文口径是 29 个应用、709 个专家演示 episode、2,579 个 action steps；当前官方 GitHub 和 Hugging Face 数据卡报告的是过滤后的 708 个 episode、2,572 个 steps。

机制是按五个 HCI 维度设计任务：Localization、Semantic Understanding、Cross-modal Discrimination、Temporal Reasoning、Instant Response。每个 episode 还按客观信息可得性标注 AV-Critical、AV-Supportive、AV-Present，区分非视觉信号是必要、有帮助，还是只是存在。

最近对照包括 Android in the Wild、GUI-Odyssey、AndroidWorld、Mind2Web、OSWorld、ScreenSpot、GUI-World、VideoGUI 和 VideoWebArena。OmniGUI 的方向信号不是规模更大，而是把“每一步全模态输入到坐标/字符串动作”的反馈契约做出来。成功谓词是与专家动作一致，不是自然语言答案质量。
