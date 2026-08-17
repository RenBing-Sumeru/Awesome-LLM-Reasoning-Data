Base training 只按大类披露 web、code 与数学/科学来源。代码处理包括更新的托管站点快照、含代码网页、Software Heritage 文件修复、语言/质量采样和模糊去重。Mid-training 加入自然长文档、合成长程依赖序列、少量 MRCR-like 数据，以及约 1,000 万个 issue–PR 对；过滤后约含 160B unique tokens。代码库身份、commit、保留数量和权利状态没有逐项列出。

SFT 分三类。General Chat 使用多语言、可配置的角色扮演数据，并经过自动和人工审查；Reasoning 使用可验证逻辑题、rejection sampling 与难度过滤；Coding & Agent 使用执行环境中的轨迹，错误片段可以保留在上下文中但从 loss 中掩码。披露的最大上下文为 202,752 token，但 SFT 样本数与 token 数未知。

Reasoning RL 大致均衡混合数学、科学、代码与 tool-integrated reasoning 四个领域。按领域或来源配置的 judge/evaluation system 输出 binary outcome reward。报告给出 on-policy group size 32、batch size 32、beta=2、epsilon-low=0.2、epsilon-high=0.28，并在无 KL 的情况下建立于 GRPO 与 IcePop。Judge 身份、校准与各来源 reward 语义没有开放。

Agentic RL 采用全异步设计。Rollout 与 learner 设备解耦，Multi-Task Rollout Orchestrator 路由异构 HTTP 任务服务。TITO 记录精确 token ID、rollout log probability、模型权重版本与元数据。只有模型生成 token 进入 loss，但环境 observation 仍决定状态转移与 reward。Direct double-sided importance sampling 掩码超出范围的 ratio，同时丢弃陈旧、噪声或环境崩溃轨迹。

训练环境包括：跨数千代码库与九种语言的 10K+ RepoLaunch SWE 环境；从真实 seed 或网页 grounded synthesis 构造的数千 Harbor terminal 环境；基于 2M+ 去重网页的 Web Knowledge Graph 搜索流程；以及 HTML 幻灯片生成环境。它们不能与 OpenHands、Terminus-2、Claude Code、MCP-Atlas、CC-Bench-V2 等评测 scaffold 混为一谈。类似地，vLLM、SGLang、Transformers、KTransformers、xLLM 是部署工具，不是数据构造器。
