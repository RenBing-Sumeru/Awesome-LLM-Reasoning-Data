OpenReview 的接收记录将该工作列为 ICLR 2026 conference paper，官方会场页面将其列为 ICLR 2026 Poster。Atlas 的稳定 ID 保留 2025 年预印本后缀，但 canonical publication year 是 2026。论文关注的不是把每个手机任务都当成脱离上下文的指令，而是如何让移动智能体预测某位具体用户当前想做什么，并依据该用户的历史完成相应操作（论文第 1–3 节；OpenReview 与 ICLR 官方记录）。

FingerTip 20K 通过日常使用中纵向采集的人类 Android 示范研究这一问题。论文报告 21,437 个 episode，来自中国大陆 95 位用户、覆盖 506 个 app，平均 11.1 步。单个 episode 包含参与者当时记录的 intent、时间与场景、用户相关上下文、按序排列的 JPG screenshot、accessibility-tree XML 观测，以及以新增 `finish` 标记结束的 JSONL GUI 动作。它是人类示范，不是独立任务模板、prompt、搜索树或模型 rollout（论文表 1、第 4.2 节、附录 A.4）。

该工作属于 `environment_agent_trajectory_data`，因为可复用对象是绑定真实手机 substrate 的状态—动作 episode，并分别进入 proactive suggestion 与 personalized execution 两个智能体任务。它既是数据发布也是 benchmark，但不是打包好的可回放环境；公开材料没有固定 app/APK 版本、账号、设备初始状态、Android image、reset 逻辑或 deterministic replay manifest。

本卡正文达到 L4 深度，但元数据继续保持 L3，原因是若干审计缺口尚未解决。最关键的差异是：官方 GitHub `total.csv` 只有 20,000 行、83 位用户和 482 个 app 标识，而不是论文的 21,437/95/506；官方材料没有解释缩减映射。现有证据足以支持离线 SFT、benchmark evaluation 与发布审计的论文筛选，却不足以证明每条保留示范都成功、公开索引等于论文完整语料，或 live execution 可以确定性复现。
