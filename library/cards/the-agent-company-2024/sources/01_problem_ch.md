本卡片以 NeurIPS 2025 Datasets and Benchmarks Track 的正式论文为主要文本；arXiv 记录显示论文在 2024 年 12 月 18 日首次公开，因此稳定 id 与元数据年份继续使用 2024。官方项目页、benchmark 仓库、1.0.0 release、环境备份仓库与 experiments 仓库提供可执行和记录级证据。必须区分这两个日期，因为论文内容与 baseline 在 arXiv v1 到正式版本之间发生了变化。

TheAgentCompany 研究通用计算机使用智能体能否完成具有实际后果的多步工作任务，其中状态分散在代码、文件、终端进程、Web 应用与社交交互中。静态问答或单轮工具 benchmark 无法暴露这条完整反馈边界。智能体在 Docker 化 Linux workspace 和自托管 intranet 中工作，后者包含 GitLab、ownCloud、Plane 与 RocketChat；其中 41 个任务还使用基于 Sotopia 的模拟同事。

benchmark release 包含 175 个经人工整理的任务。每条任务记录包含 `task.md` 中的英文意图、`checkpoints.md` 中的加权 checkpoint、任务特定 evaluator、初始化/结束逻辑、依赖与 container 配置。一次评测 episode 将 task id 与有序 observation、action、环境转移和通信事件、截图、evaluator/checkpoint 结果及终态绑定起来。官方 experiment run 发布逐任务 result JSON、逐步截图和压缩 trajectory JSON。这些轨迹由被评测模型与 harness 生成，不是人工示范，也不是经作者编写的训练轨迹语料。

因此该工作直接属于 `environment_agent_trajectory_data`：环境本身构成 verifier 的一部分，反馈附着于 checkpoint 和完整 episode，官方成功、部分得分与零分日志使失败行为可审计。本卡片不把公开日志称为训练数据，不推断 train/dev/test split，也不把 benchmark 分数外推为工作自动化结论。当前证据足以按 L4 深度描述任务对象、环境、评测契约、构造流程、发布 run 结构与版本化结果；experiment-log 权利、不可变 run/image manifest、去污染、任务级 lineage、judge 校准及隐私/同意仍未解决。
