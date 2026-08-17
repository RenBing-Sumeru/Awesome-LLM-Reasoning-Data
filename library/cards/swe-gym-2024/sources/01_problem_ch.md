SWE-Gym 处理的问题不同于只做 SWE-bench 打分的论文：真实软件工程智能体能否借助可执行仓库任务和可验证 outcome 被训练，而不仅是被评测？主来源是 arXiv:2412.21139，论文于 2025-06-06 更新到 v2，并被 ICML 2025 接收。

论文将 SWE-Gym 定义为包含 2,438 个真实 Python task instance 的环境。每个实例包含代码库、可执行 runtime environment、unit tests 和自然语言任务。官方仓库描述为来自 11 个 Python 仓库的 2.4K 任务环境，并提供 234 实例的 Lite split。

判断边界是仓库级环境中的 SWE agent 与 verifier 训练/评测。可复用对象包括 task instance、可执行环境、unit-test outcome、采样 agent trajectory、fine-tuning data 和 verifier-training signal。

评测边界：SWE-Gym 应被视为环境与 trajectory/verifier 数据来源。除非记录 agent scaffold、base model、trajectory 来源、verifier、compute budget 和 evaluation split，否则不要把它在 SWE-bench Verified/Lite 上的下游分数单独当作证据。
