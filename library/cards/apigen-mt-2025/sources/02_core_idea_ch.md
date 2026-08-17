一句话贡献是：APIGen-MT 先构造并验证可执行的多 action 任务蓝图，再把它实现为模拟的多轮 human-agent-tool episode，最后仅保留成功 episode 用于 behavioral cloning。

Phase 1 在 API 上建立依赖图，从可执行 Retail/Airline API、domain policy/data、PersonaHub persona 与示例中采样路径和 context，并生成包含意图 `q`、ground-truth action `a_gt` 与预期输出 `o_gt` 的蓝图。验证结合 JSON/格式检查、API 名称/参数/类型的可执行检查、state `diff_patch`、转换为 Python unit test 的 policy test，以及由 LLM committee 对 Correctness、Completeness、Satisfaction、Creativity 的评分。失败提案可依据汇总反馈迭代修订；reverse task recombination 会拼接已验证的 action/output 形成更长任务，并重新检查 policy 与语义。

Phase 2 分离三类 actor：模拟 LLM human 逐步透露意图，GPT-4o 以 function-calling test agent 身份执行任务，tau-bench 衍生的可执行 environment 提供工具结果与潜在 state transition。模拟用户采用 N=4 的 Best-of-N self-critique。每个任务最多尝试三次，所有唯一成功运行会被聚合，而失败的 Phase-2 轨迹会被丢弃。

反馈契约包含不同作用范围。格式、执行和 policy 检查淘汰畸形或不合规蓝图；LLM committee 判断任务语义质量；environment 与 expected-output matcher 产生二元 full-episode success `r=1`。这些系统能观察序列化调用、policy-test 行为、预期输出和最终状态效果，却不能证明每个接收对话都自然、committee judgment 已校准或中间推理正确。公开 5k 行缺少全部 verifier output 和 reward 字段，因此无法仅从 transcript 重建构造阶段的监督信号。

相较 APIGen 风格的单轮 function-calling 生成，关键变化是通过模拟用户与可变 environment，把已验证蓝图转换为对话。可把 `tau2-bench-2025` 作为相邻的 agent evaluation/terminal-predicate 阅读对象，把 `magnet-tool-use-2025` 作为相邻的多轮 tool-use data 阅读对象。APIGen-MT 的特定角色是成功筛选训练数据的构造配方与部分发布，而不是新的可重放 benchmark environment。
