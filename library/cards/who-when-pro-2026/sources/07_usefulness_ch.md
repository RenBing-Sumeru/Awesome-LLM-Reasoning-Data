Who&When Pro 当前最安全的用途，是作为阅读/审计参考，以及失败归因基准的设计规范。它给出了具体目标 schema：任务、完整 episode、责任组件、决定性步骤、错误模式和终局 outcome，并区分了经常被混在一起的三种信号：环境成功、干预 provenance 与 judge 的诊断预测。

对于数据集构造，warm-start recipe 提供了一份有用清单：保留成功 seed 及其任务 evaluator 输出；记录每个前缀 action 与 observation；记录选定 mode 和 injection slot；保存自适应 prompt 与错误 action；冻结静态内容和有状态环境版本；无论下游成功与否都保留 continuation；并附上每项 filter、retry、abort、人工修正和 evaluator 决策。完整发布应当让成功 anchor 和被拒绝失败都可查询，而不应只发布能够诱发失败的干预。

对于评测研究，论文支持在精确 Step 与宽松 Step@k 下比较 all-at-once、step-by-step 和 binary-search 诊断；测试 answer-visible 与 answer-hidden prompt；按模态、topology、轨迹长度、框架和错误 family 分层；同时度量组件定位与根因分类。结果提醒读者：终局参考答案可能改善 outcome checking，却损害 process diagnosis。

对于 post-training，论文只提出动机但没有实证展示诊断输出 SFT、失败条件检索、reward-model training 或 self-evolution。这些用途当前受阻，因为公开基准记录为 0、没有数据许可证、来源任务污染为 unknown、成功与被拒绝轨迹缺失，而且构造标签存在可测量的人工分歧。在版本化发布和权利审查使数据对象可检查之前，不应把 `training_use` 扩展到 evaluation 与 audit 之外。

未来复用 gate 应要求：row hash 与来源 ID；完整成功/自然/注入/被拒绝数量；grouped split；evaluator prompt/版本；人工标签与修正；API/model/framework commit；静态 cache 与有状态 snapshot；预测文件；代码/数据许可证；隐私/脱敏规则；以及解决当前矛盾的 paper-to-release manifest。
