部署循环如下：

1. **状态输入：** user goal/prompt、当前 screenshot 与 recent action history。
2. **策略输出：** 自回归 function call，包含 action name 与参数；适用时坐标归一化为 0–999。
3. **客户端执行：** 由开发者的 browser/mobile harness 执行动作，而不是模型直接改变环境。
4. **观察：** 客户端返回 `function_result`、当前 URL 与新 screenshot。
5. **迭代与安全：** 循环继续；外部逐步 safety service 可禁止动作或要求用户确认。任务完成、error、safety response 或用户选择终止部署。

Online-Mind2Web 排除 `search` 与 `navigate`，使用 Anchor actuation、API defaults、temperature 1、`include_thoughts=True`、autoregressive pass@1，并为每个任务生成一条 trajectory。WebVoyager 在修改日期并移除不可行任务后沿用相同采样和人类评测流程。每条完整 trajectory 由三名人类判断，多数票定义 success。这些是评测设置，不是训练 sampling 或 reward 证据。

AndroidWorld 排除八个浏览器函数，加入 `open_app`、`long_press_at` 和 `go_home`。环境为 Pixel 6 emulator、Android 13/API 33、screenshot-only、无 accessibility tree；maximum steps 与 random seed 保持未给出数值的 benchmark defaults。复现还需固定 Anchor、Browserbase、browser/Chrome/Playwright、站点、viewport、OS/emulator image、app version、locale、reset、timeout 与 repository commit。

训练 pipeline 除“Gemini 2.5 Pro 加未说明的 UI-control 与 safety-confirmation 后训练”外无法重建。训练 reward、verifier、terminal rule、rollout count、temperature、task generator、filtering、optimizer、curriculum、compute 与 checkpoint mapping 全部未知。
