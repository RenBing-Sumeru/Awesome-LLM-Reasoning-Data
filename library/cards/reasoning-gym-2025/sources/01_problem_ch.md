本卡的主要来源是 NeurIPS 2025 Spotlight 论文及附录（arXiv:2505.24760；OpenReview `GqYSunGmp7`）和官方 `open-thought/reasoning-gym` 仓库。论文处理 RL with verifiable rewards（RLVR）的一项构造瓶颈：固定的人工撰写或网络抓取问答集无法自然提供持续扩展的任务流、可控难度，也无法为每个新生成实例绑定可执行奖励（论文 §1–2；附录 A.1–A.3）。

Reasoning Gym 将 100 多个任务专用 Python generator 与 verifier 打包到同一框架，覆盖代数、算法、算术、认知、代码、游戏、几何、图、归纳和逻辑。该框架不是一个标准固定语料库。每个生成项包含 `question`、oracle `answer` 与任务专用 `metadata`；RL 或评测系统再加入模型回答，并从该任务 verifier 获得答案级标量分数。可复现身份还必须包含代码/软件包版本、generator 配置、seed、项目 index、虚拟规模或重播种状态、混合权重、curriculum 状态和 scorer 依赖。

本工作的判断边界很窄。这些主要是带自动 outcome 反馈的单轮文本环境，而不是多轮智能体世界、多模态任务、人类偏好数据或过程标签。通过 verifier 不会给推理步骤打标，也不能证明 rationale 忠实。论文也没有发布固定的接受/拒绝 rollout 语料；公开可复用 artifact 是可执行的构造与奖励 substrate。

该对象归入 `data_construction_open_release_recipes`，因为它公开了 prompt 如何生成、混合、评分和随训练调整。其 L4 价值来自明确的记录形状、任务注册表、附录配置、RL scaffold、实验证据和发布审计。下游分数证明该环境可用于 RLVR 和评测，但不能认证每个 generator、verifier 或生成项。
