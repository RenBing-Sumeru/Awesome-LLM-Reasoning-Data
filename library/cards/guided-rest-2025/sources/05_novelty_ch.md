论文在数据层面的新意，是特权信息在流水线的哪个位置进入，以及部署前如何被移除或转换。

- Behavior cloning 直接模仿最优路径；SoS 模仿符号搜索轨迹；ReST 过滤策略的成功样本；稀疏奖励 PPO 根据终局结果更新策略。Guided-ReST 则用最优路径在失败自搜索中选择并改写一个恢复点，再蒸馏完成后的轨迹。
- Countdown 定义了明确的节点级变换：用下一个最优子目标替换一个已探索子节点的运算与结果状态，删除不一致后缀，再重新采样。保留轨迹同时含失败策略上下文和局部 oracle 介入。
- 当代码任务难以定义细粒度子目标时，代码自修复给出 episode-level 对应形式。参考程序通过反馈引导生成，但可训练视图会把它替换为 dummy marker，并只对最后一次回复计算损失。因此，特权字段改变了采样目标，却不会以真实程序形式留在学习器输入中。
- 引导会在连续失败点反复使用，而不是只提供一段 demonstration 或一次强教师续写。这种重复的 guide-policy 交互，是作者相对最接近 guide-model 数据生成工作的主要区别。
- Guided-ReST SFT 与 operation-level PPO 是两个独立组件。动作分组和稠密奖励负结果对后续优化有意义，但不会改变 SFT 记录的来源或遮蔽契约。

单独看，self-training、结果筛选、树搜索轨迹、execution feedback、PPO 和 teacher-student distillation 都不是本文新创。对 reasoning data 研究真正有方向意义的是三视图契约：特权构造视图、改写或遮蔽后的训练视图、无辅助推理视图。复用时必须保留变换与介入 provenance，而不能把两个任务都压缩成泛化的 `teacher-generated` 标签。
