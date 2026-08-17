核心贡献是一条反事实构建规则：把终局结果转成决定性智能体与决定性步骤标签。对于原本失败的轨迹，DeepSeek-R1 在连续步骤上提出最小侵入式纠正，任务环境回放修改后的 episode，最早使失败转为成功的已测试纠正提供标签。对于原本成功的轨迹，系统采样 `K` 个注入点，由 DeepSeek-R1 破坏一个动作并回放，保留第一个使成功转为失败的变异。两个分支的并集构成 `D_tracer`（论文第 4.1 节与 Algorithm 1）。

因此，一条标注对象连接任务、带角色标记的轨迹、被归因的智能体与步骤、归因理由，以及构建期间的反事实干预和二元回放结果。公开的七列 parquet 保留轨迹与归因字段，却删除了成对的原始/纠正或原始/注入记录、evaluator trace、干预文本、拒绝历史、来源 framework 与 split。

反馈契约分两层。DeepSeek-R1 能观察完整轨迹、任务 ground truth 与环境反馈，并提出纠正或变异；这是 learned judgment，不是 verification。任务特定 evaluator `Omega` 观察回放结果并返回二元成功/失败。成功翻转只表明该干预在此次回放中可以改变被测结果，不能证明归因原因唯一、只改变了一个语义因素，也不能证明 evaluator 等价于真实部署成功。

与只标注失败症状或让 LLM 事后解释的 failure analysis 相比，AgenTracer 用可执行的结果翻转筛选归因目标，再训练专用 tracer。Atlas 中可与 AgentDebug 的结构化失败轨迹及 Who&When Pro 的归因评测对读。真正有区别的数据思想，不是分别使用 LLM judge、环境回放或 GRPO，而是把反事实回放结果转成 agent/step supervision。
