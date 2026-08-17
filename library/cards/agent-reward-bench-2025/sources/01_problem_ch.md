已确认的正式发表记录是 *AgentRewardBench: Evaluating Automatic Evaluations of Web Agent Trajectories*，发表于 Conference on Language Modeling (COLM) 2025。本卡片以 arXiv:2504.08942v2、官方项目页、GitHub revision `f838338886d723d40b586309465a38277803d9e6` 和 Hugging Face revision `b6d17e646009d6cb63d5dd7be78807b680693f61` 为证据边界。

论文研究自动 evaluator 能否判断网页智能体是否真正完成任务。特定任务的 rule 可执行且成本低，却可能漏掉语义上有效的成功；专家复核更丰富，但速度慢、成本高；LLM judge 更灵活，其 false positive 与 false negative 行为却缺少系统刻画。这个问题会影响 benchmark 成绩报告和 trajectory 选择，因为两者都可能依赖同一成功信号；不过论文自身只评估这些信号，没有训练 policy 或 reward model。

可复用的评估表面包含 1,302 条已完成 trajectory，由四种 LLM backbone 在 AssistantBench、VisualWebArena、WebArena、WorkArena 与 WorkArena++ 的 351 个任务上生成。每条 trajectory 都是完整 episode，包括 goal、有序 observation、agent reasoning 与 action、URL、accessibility-tree 表示、screenshot 引用、error 和 episode summary。发布把每个 episode 与专家标签、存储的 environment reward、截图及自动 evaluator 输出连接起来，使反馈层可以逐记录审计。

论文与 release 对该对象的描述并不完全相同。论文报告 3,906 个 binary annotation，即 1,302 条轨迹各有 success、side effect 与 repetition 三个标签；固定版本的 `annotations.csv` 则有 1,408 行、对应 1,302 个唯一 trajectory key，其中 106 个 key 有双重标注，并额外包含一个四级 optimality 字段。Hugging Face release 包含 1,302 个 cleaned trajectory JSON、1,302 个 episode screenshot directory，以及每条轨迹 15 组 evaluator 输出。这些版本差异本身就是审计对象，不能被省略。

对 `environment_agent_trajectory_data` 而言，该论文把 observation、action、环境派生反馈、专家判断、judge 输出、terminal label 与 replay metadata 放入同一离线语料，因此具有明确价值。已接受的 `curation_level` 仍为 `L3_summary_ready`，status 仍为 `partial`：许可证、上游权利、确定性重放、去污染、隐私复核与标注差异调和都未解决。
