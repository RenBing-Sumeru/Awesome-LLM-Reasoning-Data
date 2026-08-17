**任务构造。** Annotator 围绕固定 system state 设计长程场景，其中预置联系人、消息、邮件、日历事件和文件；fixture 来自 LLM 合成或互联网。复杂度来自跨应用组合 subgoal、视觉提取、跨 step 记忆、算术/逻辑、隐式时间/地点以及严格输出格式。Agent-user 变体移除一个必要事实并检查设备没有泄漏；MCP 变体从 Amap、GitHub、Jina AI、StockStar、arXiv 五类服务中选取工具，再加入消费返回内容的 GUI 操作（论文 §3.3）。

**人工验证。** Validator 启动任务环境、手工执行动作，并运行同一 task evaluator；得分 1 表示可解。得分 0 的任务最多重试五次，持续失败则返回设计阶段修改初始化、指令或 evaluator。论文没有公开 validator 身份、agreement、attempt log、被拒版本，也没有 train/test split。

**环境与重置。** Release 在 privileged Docker-in-Docker 中运行 rooted Android Virtual Device、application backend 与 orchestration/evaluation API。Mattermost 和 Mastodon 使用自托管 PostgreSQL/文件状态，并从捕获的 backend directory 恢复；AVD 从预定 snapshot 启动。修改后的 Mail 与 Taodian 暴露 callback record，本地 Android 应用则通过 ADB 检查。因此复现必须同时固定设备与 backend 状态，不能只有 APK 或 task text（论文 §3.2、附录 B）。

**Episode 执行。** Agent 观察截图，选择 click、double-tap、long-press、drag、文本输入、scroll、navigation、answer、wait、status、`ask_user` 或 `mcp_call`。Planner-executor baseline 中，通用 LMM 描述目标元素，UI-Ins-7B 预测坐标；用户问题发送给带隐藏任务上下文的 GPT-4.1，MCP 调用返回结构化结果。论文统一设置 temperature 0.0、最多 50 个动作；每任务 seed、retry、token budget 和外部服务 revision 未披露（论文 §4.1–§4.3）。

**验证与输出。** Episode 终止或耗尽预算后，任务特定 evaluator 执行答案匹配、database query、local-storage inspection 或 callback check，并返回二元 score 与 reason。当前 trajectory log 序列化 task goal、step、模型 prediction、parsed action、可选 user response/tool call、token usage、result，以及可选截图视频 frame index。公开 `site/trajs` 是按模型组织的论文后发布；所检查的 Seed-2.0-Pro bundle 有 161 个任务，同时保留 score-1 与 score-0 episode。

Replay 必须固定 ACL/arXiv 版本、Git commit、Docker image digest、AVD snapshot、backend-data snapshot、task/evaluator code、Android/app 版本、模型/scaffold prompt、MCP schema/endpoint、GPT-4.1 user-agent 版本、随机 seed 和 credential policy。当前仓库没有 tag 或 GitHub Release；2026 年 4 月针对 Mattermost session 过期的修复直接说明 evaluator 有效性依赖可变 snapshot 状态。
