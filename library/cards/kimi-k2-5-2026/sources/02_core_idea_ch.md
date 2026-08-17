Kimi K2.5 在 Kimi K2 的基础上加入原生多模态训练、zero-vision SFT、联合文本—视觉 RL 和 Agent Swarm。它以 K2 的 MoE 语言模型为基础，增加 MoonViT-3D 与 MLP projector，并采用早期视觉/文本联合训练，而不是后期视觉适配。报告称在视觉编码器、联合预训练和长上下文阶段处理了约 15T 混合视觉和文本 token。

zero-vision SFT 使用纯文本 SFT 激活视觉推理与工具使用，并将图像操作表示为程序化 IPython action。随后联合 RL 覆盖文本和视觉能力。反馈混合包括可验证 outcome reward、token-budget reward、GRM、任务专属视觉 reward function，以及用于合成视觉谜题的 Kimi K2 LLM verifier。

Agent Swarm 增加了 Parallel-Agent RL（PARL）：可训练 orchestrator 分解工作并创建冻结 subagent，其轨迹被视为环境观察。这是一份已披露的协同与反馈契约，而不是对底层 agent 任务、工具、subagent 或 RL 环境的发布。
