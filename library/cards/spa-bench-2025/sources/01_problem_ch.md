规范来源是 ICLR 2025 Spotlight 论文。SPA-Bench 用 340 个中英双语 Android 任务评测 smartphone agent，其中 300 个 single-app、40 个 cross-app，并在英文与中文之间均分：英文与中文 single-app 各 150 条，cross-app 各 20 条。论文报告 39 个英文 app 与 29 个中文 app；仓库则按另一口径统计 66 个 distinct app，包括 52 个 third-party、7 个 Google 和 7 个 system app。这些是不同统计视角，不能合并为一个数字。

具体问题是，mobile task 不能只用文本 instruction 或最终 action label 完整表示。agent 通过 screenshot，以及部分系统提供的 XML、accessibility、OCR、icon 或 marked-screen 表示与动态 Android app 交互；它们执行 tap、swipe、type、navigation，并自行声明完成。成功取决于 device/app/account state、action history、可见 UI、外部服务、termination 行为，以及能解释灵活终态的 evaluator。

公开 task row 包含 task ID、app scope、language、description、difficulty、human golden-step count；single-app task 还包含 final key component 与 package/activity，cross-app row 则增加 category 和有序 app list。仓库还发布 40 个逐任务 JSON，记录有序 app-specific subtask 与 `history`/`memory` 字段。人类 annotator 创建了相邻 screenshot 之间只有 1 个 action 的 reference trajectory，但这些 demonstration 不在审计 release 中。

一条完整 executed episode 应包含有序 screenshot、可选 action data、`log.json` 或 `error.json`、step 与 golden-step ratio、finish/exit signal、execution time、API cost、success/failure/error label、evaluator detail 和 termination reason。framework 可在本地写出该 schema，但仓库没有发布人类 screenshot trajectory、论文 agent trace/result、rerun ledger 或成败 trajectory corpus。

因此，SPA-Bench 同时属于 `environment_agent_trajectory_data` 与 `benchmarks_evaluation_surfaces`：它定义 ADB-connected state/action/observation 环境和混合 OCR/GPT-4o outcome contract。已展示用途仅为 evaluation 与 diagnostic audit。项目未发布 SPA-Bench SFT/RL run、optimizer、reward stream 或 trained checkpoint。
