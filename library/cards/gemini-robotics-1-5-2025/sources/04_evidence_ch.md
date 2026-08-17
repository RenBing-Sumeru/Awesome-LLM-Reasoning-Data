通用 VLA 评测覆盖 230 个任务，报告 task-specific progress 的均值与标准误，附录另有 success-rate 视图。泛化按 visual、instruction、action、task 四个轴组织。同一个通用评测 checkpoint 控制 ALOHA、Franka 与 Apollo，不做 embodiment-specific post-training；早期具身专用 checkpoint 使用更少数据，因此报告明确提醒这不是 apples-to-apples 对比。

跨具身附录披露 10 个 Franka-to-ALOHA 任务，以及 11 个 ALOHA/humanoid-to-Franka 任务。Motion Transfer ablation 定性支持“多机器人数据有帮助、MT 配方进一步放大迁移”，同时报告指出 humanoid 的收益较弱，可能源于更大的具身差距。原始 trial 和 item-level split 未发布。

ER 1.5 在 15 个学术 embodied-reasoning benchmark 上评测，覆盖 pointing、image QA、video QA、progress estimation 与 success detection。文本 VQA 由 Gemini 2.5 Flash 打分，因而依赖模型 judge。论文报告 embodied-reasoning 表现通常随 thinking budget 增大而提升，每个绘图点平均三次运行。只出现在被注释 TeX 中的精确 token-budget 数值不在本 Card 中作为已发表证据。

完整物理 agent 评测包含 ALOHA 与双臂 Franka 上的 8 个长时程任务。在任务专用 point rubric 下，thinking VLA 单独运行的报告 progress 最高为 44%，完整 agent 则经常接近 80%。这些平台结果不共享同一训练状态：ALOHA 使用 pre-training checkpoint，Franka 为长时程成功接受了额外 post-training。

Failure analysis 区分 planning、success-detection、action 三类失败。Flash orchestrator 分别报告 25.5%、6%、13%，总计 44.5%；ER 1.5 orchestrator 分别为 9%、4%、9%，总计 22%。这些是作者报告的 subtask-level 汇总，没有开放分母或原始 episode。

MuJoCo 与真实场景对齐，并用于超过 90% 的开发评测 episode。报告把 simulation 作为迭代加速器，同时仍要求真实机器人评测。这个百分比不描述训练语料，模拟排名一致也不能证明真实世界 failure distribution。
