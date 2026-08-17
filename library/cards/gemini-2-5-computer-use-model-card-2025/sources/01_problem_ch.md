Google DeepMind 于 2025 年 10 月 7 日发布 *Gemini 2.5 Computer Use - Model Card* 及其评测附录。系统基于 Gemini 2.5 Pro（06-2025），增加未具体披露的 UI control 后训练，主要为浏览器交互优化，而不是 OS-level 或 mobile control。

具体 episode 异常清晰：user goal、当前 screenshot 和 recent actions 输入模型；模型输出下一步 UI action 的 function call；客户端执行后返回 function result、当前 URL 与下一张 screenshot。循环以任务完成、error、safety response 或 user decision 结束。该部署 schema 不能证明相同轨迹曾被保存为训练数据。

报告提到 UI-control 后训练和高风险动作确认训练，却没有披露训练 task、demonstration、trajectory、thought、label、reward、verifier、rollout、filter、optimizer、数量或 lineage。评测与部署契约更可见：完整 web trajectory 由三名人类独立判断，多数票定义 success；另有 out-of-model safety service 按步骤评估 proposed action。

本 Card 属于前沿披露台账，因为它区分公开 state-action API、benchmark 证据与不可得的训练记录。完整官方 Card、附录、发布文章、legacy API documentation 和 reference repository 支持 L4；会持续变化的文档与代码不被当作 2025 年 10 月不可变的 environment pin。
