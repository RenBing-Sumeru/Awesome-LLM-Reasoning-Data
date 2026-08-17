1. **公开评测：** 使用 500 条 public set，在固定 swe-agent、镜像和 pass@1 协议下比较模型，并按语言、任务类型和难度报告 resolution rate。

2. **训练轨迹构造：** 对内部或可访问全量实例运行 agent；失败时逐步提供定位/测试 hints，保留 action、feedback 和终局 tests，形成 verifier-grounded trajectories。

3. **数据工厂复用：** 将四阶段 pipeline 应用于新的开源或企业 PR。若许可证不允许再分发、CI 依赖私有服务或 issue 与 PR 无明确关联，则只能内部使用，不能直接加入公开 benchmark。
