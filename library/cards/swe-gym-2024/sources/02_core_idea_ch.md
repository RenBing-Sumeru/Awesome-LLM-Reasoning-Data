一句话贡献：SWE-Gym 把真实 Python 仓库任务转成面向软件工程智能体和 verifier 的开放训练环境，并展示该环境采样出的轨迹可以提升开源权重 SWE agent。

核心机制是构建带测试的可执行任务实例，采样 agent-environment interaction trajectories，用成功或过滤后的轨迹微调 agent，并训练 verifier 在推理时选择更有希望的解。官方 README 特别展示了 OpenHands 和 MoatlessTools 两类实验。

数据对象比 benchmark row 更丰富。它包括任务、仓库状态、runtime environment、测试、动作或生成 patch、执行反馈、终端成功标签和 trajectory-level metadata。反馈契约可用于 SFT、rejection-sampling fine-tuning、verifier training 和 best-of-N selection。

类别理由：SWE-Gym 属于 environment/trajectory data，同时也触及 benchmark/evaluation surface。最接近的比较对象包括作为下游测试的 SWE-bench Lite/Verified、面向 SWE 数据规模化构造的 SWE-smith，以及产生可执行修复轨迹的 agent scaffold。
