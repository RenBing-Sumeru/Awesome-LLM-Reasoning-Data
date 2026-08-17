报告未发布真实 MCP 来源列表、合成工具、tool-set samples、agents、tasks、rubrics、personas、trajectories、simulator states、真实 sandbox images、executable tests、RL prompts 与 rollouts、preference records 或拒绝候选。它也未说明来源版本、每阶段混合权重与数量、采样设置、prompts、生成器 checkpoints、人工评审细节、保留率、train/validation splits 或污染结果。

verification 质量无法被独立确立。LLM judges、hack checks、faithfulness judges、safety judges 和 self-critic 都只在高层被描述；其 prompts、模型版本、校准、错误率、聚合规则和 reward-hacking 评估均不可得。报告本身承认 simulation-fidelity 的限制，并称不清晰的工具或困难推理可能导致过多 tokens、输出截断或不完整 tool calls；不必要的工具使用也可能降低性能。

Modified MIT 适用于官方 code 和 weights，却未必适用于报告所述的 GitHub-derived、pre-training-derived、开放、内部或合成数据材料。尽管流水线叙事较为详细，这些证据缺口仍使本 Card 只能是 partial。
