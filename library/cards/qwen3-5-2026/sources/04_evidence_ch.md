官方发布页与 Qwen 自有 model card 直接支持本 Card 记录的高层主张：Qwen3.5 是原生多模态模型，检查点经历 pre-training 与 post-training，RL 被描述为在逐步复杂化任务分布和百万规模智能体环境上扩展，异步基础设施则支持大规模智能体脚手架与环境编排。模型仓库还独立确认权重和配置以 Apache-2.0 发布，并标明该检查点总参数 397B、激活参数 17B。

明确涵盖 Qwen3.5 的官方 `QwenLM/Qwen3.6` 仓库，证明现在存在持续维护的信息与发布入口，并提供官方 BibTeX。该仓库包含发布信息、benchmark 图片、quickstart 材料与部署项目链接，但没有提供训练 task suite、环境实现、trajectory corpus、reward function、verifier、rollout router 实现或 item-level provenance；本 Card 也不据此声称这些工件已发布。

Benchmark 表格与 agentic-use 示例展示的是被评估或可部署的模型行为，不是 training-data quality。它们不能验证 task provenance、environment correctness、reward reliability、contamination control 或训练/评估分离。同样，“million-agent environments”是系统规模表述，不代表发布了一百万个可复用环境，也不代表发布了任何可回放 episode。

本条目未核验到官方技术论文、arXiv 记录、DOI、训练数据、RL 训练代码、轨迹、reward/verifier 或可复用环境工件。这只描述所检查的公开工件，并不推断 Qwen 内部是否存在这些材料。
