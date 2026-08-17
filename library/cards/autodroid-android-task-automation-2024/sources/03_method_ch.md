1. 输入：Android app、自然语言任务、当前 GUI tree/截图状态、历史动作，以及离线探索得到的 app memory。
2. 离线探索：AutoDroid 随机探索 app，记录 UI Transition Graph，并让 LLM 总结 UI state 和 UI element 功能，形成 memory table。
3. 在线提示：当前 GUI 被转成带 element ID 和受限 action 格式的简化 HTML；系统按任务相似度检索相关 memory。
4. 执行：LLM 生成 click/input/swipe/completion 动作，executor 检查格式和风险；风险动作可要求用户确认。
5. 输出：动作序列、action accuracy、task completion、成本统计和可选微调数据。复现依赖 app 版本、Android VM snapshot、探索策略、LLM 版本、prompt、embedding model 和任务成功检测器。
