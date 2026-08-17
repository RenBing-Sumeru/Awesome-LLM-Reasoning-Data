对数据策展而言，有用的贡献是把来源挖掘、指令筛选、任务生成和奖励路由连成一条端到端链路。报告不只声称使用了科学数据与 RL，还具体描述了 page-level parser 升级、domain-level agent 决策、由强 LLM 标签蒸馏 classifier、类别/难度分层、best-of-N 响应选择、通过率过滤，以及不同任务类别到 CompassVerifier、规则、环境反馈或 POLAR-7B 的映射。

在优化器层，报告还记录了一个具体的 MoE 失效边界。作者称，当 FP8 推理与训练激活不同专家时，token-level importance-ratio clipping 不可靠，因此其 OREAL 变体去掉 token-level reward model，并加入 KL-Cov 熵控制。这使数据过滤与奖励粒度直接关联到训练系统稳定性，而不是被当成可互换的实现细节。

这些组成并非全部新颖：Intern-S1 从 Qwen3 与 InternViT 出发，复用 InternVL3/SOPHIA 数据管线和多个公开 RL 数据集，也依赖已有的 CompassVerifier 与 POLAR-7B。真正的方向信号是它们在科学 CPT、离线指令筛选和 1,000 多任务在线 RL 中的整合，而不是训练数据已经开放或获得独立验证。
