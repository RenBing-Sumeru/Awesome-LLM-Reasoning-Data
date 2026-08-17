本报告把常见多模态模型的输出端点从答案改成跨时间的物理动作对象。当前图像和语言指令进入蒸馏后的 VLA backbone，local decoder 输出 action chunks。其独特披露在于连接了 internet-scale multimodal data、专家 teleoperation、action fine-tuning、per-task specialization 和多机器人 embodiment 评测的完整 lifecycle。

Reasoning-enhanced variant 增加了明确的未来轨迹 intermediate：先预测未来约 1 秒的左右臂运动，再生成低层控制。它比笼统声称策略会“推理”更具体，因为给出了可视化的 supervised intermediate。但这仍是部分披露，因为 relabelling generator、坐标、loss、覆盖率和验证都未公开。

每任务 2,000–5,000 demos 的 specialization recipe，以及 5/20/100 demos 的 adaptation study，使数据量而非仅模型规模成为报告的一部分。不过 demonstration curation、失败数据、sampling 和 rights 均不可用，success/progress 也是评测 rubric，而不是已披露的 RL feedback contract。

ERQA 是真实开放的 benchmark release，但其 400 条 answer-level item 不能替代时间密集的机器人动作语料。复用前，构建者仍需分别核验 action schema、硬件和相机版本、task/scene overlap、distillation、trajectory label、optimizer 设置、scorer reliability 和 license。
