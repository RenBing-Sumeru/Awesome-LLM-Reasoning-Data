1. **功能开发 agent 评测：** 固定仓库镜像、上下文检索和工具预算，让 agent 根据 feature request 实现代码，按 F2P/P2P 运行结果报告 resolve rate。

2. **SFT/RLVR 数据：** 将需求、base tree、gold diff 和 tests 转成训练样本；采样 agent 轨迹后，用新增功能测试与回归失败构造分层奖励。

3. **企业任务整理：** 复用 feature-PR 筛选规则，从内部历史中提取新增组件任务。若需求依赖产品判断、UI 验收或无法程序测试，应加入人工 rubric，而不能把现有 unit-test contract 视为完整验收。
