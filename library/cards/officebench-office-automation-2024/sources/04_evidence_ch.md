可信证据来自官方任务发布、数据 schema 和评分契约，而不是仅看榜单数字。本地已审计规模是：本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验。行级证据是一条记录，包含 office tasks, app states, document/spreadsheet/email artifacts, actions, and evaluator outputs、模型输出或轨迹，以及来自 OfficeBench evaluator and multi-application task success checks 的验证或裁判结果。

聚合分数只能在官方设置内解释。证据边界包括：Pin public/private split, task version, 运行时镜像, 和评测器版本，再比较结果.；复用前必须核验产物层面的许可证和再分发条款。；公开任务和轨迹可能泄漏进未来训练数据。补充审计备注：full data availability, sample-only risk, synthetic data license, and evaluator reuse terms 需要审计。如果使用 裁判或 rubric，裁判提示、模型和版本是证据的一部分；如果使用程序化检查，检查器和运行时是证据的一部分。
