核验对象为 2025 年 10 月 10 日修订的 arXiv:2508.03501v2 以及官方 OpenReview 页面。会议记录仅写明“Submitted to ICLR 2026”；尚未核验到接收决定或正式论文集记录。论文研究的问题是：当软件工程 agent 需要进行数十轮仓库交互、上下文最长达到 131k token，而反馈主要在提交补丁后才出现时，如何训练一个 72B agent。

Atlas 所关心的对象不只是任务 prompt 或最终 patch。一条训练 episode 从 GitHub issue 和沙箱化仓库快照开始，随后包含模型推理/命令动作与环境 observation（stdout、stderr、exit code）的有序序列，最终形成提交后的仓库状态、验证结果、长度惩罚与标量奖励。隐藏状态包括文件、源代码和运行进程。因此该工作直接属于 `environment_agent_trajectory_data`：state、action、observation、环境反馈、terminal predicate、失败样本保留方式和 replay 元数据共同决定记录可支持怎样的学习。

公开底座是 SWE-rebench：21,336 个任务，来自约 3,400 个 Python 仓库；公开字段包括 issue 文本、仓库与环境设置 commit、gold patch、test patch、测试列表、安装元数据、质量元数据和逐仓库许可名称。论文通过正确性、复杂度、LLM 质量和 50 次重复测试确定性过滤得到 7,249 个训练任务，但没有发布所选 instance manifest 或逐条过滤决定。上游 SWE-bench 执行 fork 与一个宣布包含 7,500 个预构建任务 container 的 registry 已公开；两者都不是论文专属轨迹语料。

因此，本 Card 的收录边界是构造 recipe 与训练报告，而不是可复用数据发布。论文描述了 6,548 条成功 RFT trajectory 与在线 RL rollout group，但任务 manifest、RFT/RL trajectory、失败的 RFT 尝试、reward、提交 patch、checkpoint、内部 JAX 训练代码和不可变 replay bundle 均不可获得。本 Card 通过论文、附录、OpenReview 状态、固定版本的上游数据、执行 fork 和 container 公告完成 L4 内容审计，但不把 accepted metadata 的 `L3_summary_ready` 升级。
