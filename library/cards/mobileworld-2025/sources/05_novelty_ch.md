AndroidWorld 通过 emulator reset 与确定性检查建立可复现移动评测；MobileWorld 对 evaluation surface 做出四个具体改变：20 个应用上的 201 个任务、更长且更常跨应用的 workflow、必须询问用户才能消除的显式歧义，以及 GUI 加 MCP 执行。App stack 增加自托管 Mattermost、Mastodon 与电商替代应用，使 backend state 可重置并直接检查（论文表 1、表 5）。

新的数据对象是 hybrid episode。一个 step 可以承载截图与 GUI action、simulated-user 问答，或 MCP request/structured response；这些事件进入同一 history，最终由 mobile-state predicate 判定。这使模型推理、用户反馈、外部工具和环境验证之间的边界可被检查，而不是分别评分。

Verifier 设计是系统集成，而非单一新算法：每个任务分别使用 exact/regex answer check、SQL/backend query、ADB storage inspection 或 app callback。Planner-grounder framework 同样把通用 LMM 与 UI-Ins-7B 组合，并扩展 action schema。这些组件使基准成立，但任务难、模型分低本身不是数据质量创新的证明。

复用前应把 task manifest/evaluator 与 AndroidWorld、OSWorld-MCP 对照，检查 user-agent 隐藏信息不会从 device state 泄漏，并对外部 MCP 漂移做 stress test。当前 trajectory release 因同时保留成功和失败而有研究价值，但它晚于论文；没有版本映射时不能视为 ACL 实验的精确语料。
