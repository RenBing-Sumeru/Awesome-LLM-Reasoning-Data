先前基线是 Android 移动 agent 评测、web/mobile GUI grounding，或个人状态有限的孤立 app 任务。iOSWorld 改变的是任务世界：持久虚构用户和跨 app 数据成为评测对象的一部分。

方向信号是 controlled simulation 下的 personalization：任务可要求 agent 从交易、消息、旅行记录、社交关系、金融活动中推断，而不暴露真实用户数据。质量信号是开源发布 apps、seeded data、tasks、rubrics 和执行工具。

不新的部分包括 simulator automation、GUI action trace、rubric judging 和 screenshot/XML observation。复用前要检查 Apache-2.0 仓库范围、第三方 app/data 依赖、judge 可复现性、macOS/Xcode 约束，以及 synthetic personal data 是否能代表目标部署风险。
