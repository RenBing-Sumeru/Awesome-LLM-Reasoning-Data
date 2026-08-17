核心贡献是把 Docker 环境构造本身变成由执行结果约束的智能体监督数据：四类专门化 LLM agent 反复检索仓库上下文、编写 Dockerfile、处理 evaluation script、分析测试失败并修复产物，直到构建与测试契约成功或运行停止。

共享状态包括仓库版本与 issue 上下文、检索得到的依赖/CI/构建/测试信息、当前 Dockerfile 与 evaluation-script 产物、近期 agent 调用轨迹、历史日志和结构化失败摘要。动作包括浏览仓库、编辑文件、执行 shell/构建/测试命令、诊断和修复；Docker 执行结果成为下一轮观察。loop controller 监控近期 agent 组合与失败特征，连续数轮没有改进时强制改变组合；success memory 则跨任务检索已经验证的 `(Dockerfile, eval script)` 对作为示例。生成模型及版本、prompt、检索索引、相似度规则、监控窗口、停滞阈值和干预策略均未披露。

反馈契约需要拆成两部分。训练筛选采用程序化、环境落地的判定：只有 Docker 构建与任务特定测试成功的实例进入 SFT 整理阶段。附录中的一条代表性轨迹以 `OMNIGRIL_EXIT_CODE=0` 和 `is_finish: true` 结束，但官方没有发布覆盖所有任务的机器可读 terminal-predicate manifest。另一部分是论文分析使用 GPT-5.1 按阶段、错误码和严重性标注错误事件；这些 judgment 标签没有被描述为训练 reward。论文也没有报告标量奖励、偏好对、process-reward target 或 RL 目标。

文中最接近的系统承担不同角色：Docker 交互底座源自 SWE-Factory，而混合训练实验中的通用 SWE/代码轨迹来自 Nex Agent-SFT。DockSmith 的特有对象是环境构造交互及其经执行筛选后的 SFT 表示。与静态 PR 或 issue-patch 记录相比，它保留动作和观察；与可完整重放的 episode 发布相比，它仍有明显缺口，因为公开行是按 agent 拆分的 fragment，且没有不可变 episode/environment manifest。
