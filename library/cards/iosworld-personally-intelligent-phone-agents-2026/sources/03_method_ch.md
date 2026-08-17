1. 输入：`tasks.json`、26 个 SwiftUI app build、seeded Jordan Avery 用户状态、simulator/device 配置、agent backend，以及可选 screenshot-only、vision+XML 或 MCP/tool-use 模式。
2. 流程：准备 Xcode 与 iOS simulator，bootstrap apps，按 task id 或 full suite 运行，记录 screenshots/events/actions，并用 task rubrics 评估最终 trajectory。
3. 输出：结果目录包含 `trajectory.json`、`events.jsonl`、逐步截图、planned/executed actions 和 rubric evaluation。
4. 反馈契约：run 结束后按 rubric criteria 打分；任务分数是满足 criteria 数除以总 criteria，只有全部 criteria 满足才计为 pass。
5. 复现边界：必须固定 repo commit、Xcode version、iOS simulator runtime、device type、app seed data、Appium/XCUITest setup、agent model/API version、observation mode、judge provider/model、parallel-worker policy，以及是否跳过或重跑 scoring。
