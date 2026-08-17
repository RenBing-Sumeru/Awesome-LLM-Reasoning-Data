1. **后端 agent 评测：** 运行公开 224 个 tasks，固定容器 runtime、网络和 agent budget，分别报告 build success、service boot 与 API pass，而非只给单一分数。

2. **轨迹监督：** 保存 agent 的仓库探索、Docker 修正、服务日志和 HTTP 失败反馈，构造 deployment-aware process trajectories；终局 reward 由隐藏 API tests 提供。

3. **企业接口任务：** 将内部后端需求转换成外部 contract tests，允许多种实现。若系统依赖付费 SaaS、真实凭据或不可隔离数据库，则需模拟服务，不能把原环境直接放入公开 benchmark。
