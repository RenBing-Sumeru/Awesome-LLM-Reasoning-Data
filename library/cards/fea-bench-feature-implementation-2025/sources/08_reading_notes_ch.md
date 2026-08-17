1. **一句话定位：** FEA-Bench 从 83 个仓库构造 1,401 个真实、可执行的新功能实现任务。
2. **方法抓手：** PR 规则筛选、feature 意图审计、提取 F2P/P2P、base/gold 双执行。
3. **数据抓手：** 记录含需求、commit、gold patch、环境与 tests；公开版部分源码需从上游获取。
4. **证据锚点：** 多模型在该集上显著弱于 bug-fix benchmark，但 agent 配置仍影响归因。
5. **复用决定：** 适合 feature-driven SWE 训练/评测；使用前需审计需求完整性、环境和许可证。
