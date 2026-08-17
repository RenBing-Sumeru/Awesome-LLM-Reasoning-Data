核心价值是一个具体的客户端执行 agent contract。模型观察 `goal + screenshot + recent actions`，提出 normalized-coordinate 或其他 UI `function_call`，外部执行后再接收 `function_result + URL + screenshot`。Legacy API 的 13 个浏览器动作覆盖导航、点击、输入、滚动、hover、组合键、等待与 drag-and-drop；坐标动作使用归一化到 0–999 的整数。

必须按层区分反馈。Online-Mind2Web 与 WebVoyager 由三名独立人类 judge 判断整条 trajectory，并围绕指令遵循、任务完成和答案正确性进行多数票。部署阶段使用逐步 out-of-model safety gating，并对选定高风险动作要求用户确认。报告没有把任何一个契约认定为 UI 后训练 reward、verifier 或 terminal predicate；这些均未知。

与 `openai-operator-system-card-2025` 相比，该报告提供另一种专有 computer-use 披露，包含公开 legacy function schema、部分 Android 环境 pin 和 Browserbase 匹配比较。其方向价值是把 task、state、action、observation、整轨 judge、安全门控与 live environment 视为不同的数据/反馈对象。
