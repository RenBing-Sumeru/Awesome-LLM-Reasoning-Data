既有仓库基准通常从公开 issue 出发，再用来自 issue 或 pull request 上下文的仓库测试判断补丁。TensorBench 改为针对编译器代码库构造功能新增请求，并允许任何行为上足够的补丁通过，不要求模仿 canonical reference patch。因此比较单位是修改后的仓库状态，而不是补丁相似度。

真正变化的是反馈接口。Scorch 既有随机化测试充当回归保持 oracle，覆盖形状、稀疏率、格式与编译器路径；被测智能体则为新请求行为提供测试。fresh-container grader 将最终验证与智能体在 live workspace 中采取的操作隔离开。release 设计还把任务记录和终局结果与结构化 trajectory、diff artifact、失败模式和事后对抗审计配对。

并非所有组件都是新的。Docker 执行、仓库智能体、pytest 评分、工具日志、LLM 辅助任务编写和基于测试的代码基准都早于 TensorBench。其贡献在于围绕困难编译器功能工作组织这些组件，并显式分析回归保持、自写测试、补丁规模和工具调用画像。

对 reasoning-data 研究而言，值得延续的方向是保存完整 episode 并审计验证器，而不是只保存榜单分数。复用前仍须确认 benchmark repository、镜像 digest、精确 trajectories、predictions、reports 和许可证都可访问且已固定；还需要为代表性子集增加独立 hidden tests 或维护者测试，因为当前终止谓词可能奖励“实现与测试彼此一致、但功能不完整”的结果。

