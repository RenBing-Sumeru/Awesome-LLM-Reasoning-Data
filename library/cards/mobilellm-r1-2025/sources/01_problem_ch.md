ICLR 2026 正式论文研究：在容量和 token 预算受限时，如何让 140M、359M 与 949M 参数模型获得可用的数学、代码、科学和通用推理行为。它关注的不只是列出哪些公共语料，而是如何构建 capability probe、估计各来源的边际贡献、随模型学习进程调整数据混合，并安排预训练、知识蒸馏、通用指令微调和推理 SFT 的顺序。

Atlas 中的数据对象是分阶段构建配方。概念上的一条记录是来源文本或 prompt-response 对话，并关联来源、能力域、筛选分数、代表子集成员关系、各 checkpoint 的 influence estimate、混合权重和训练阶段；但这些过程字段大多只在论文中描述，并未逐记录发布。

该工作属于 `data_construction_open_release_recipes`，因为它公开来源表、混合比例、阶段预算、checkpoint 和最小训练代码。它没有发布冻结的组合语料、完整数据筛选实现或统一正确性 verifier。双语 Card 已达到 `L4_chinese_review_ready`，可用于配方检查与发布缺口审计，但不能视为可精确重放的数据发布。（论文 §§2-4、附录 A；官方仓库 commit `f518dc7e402876fc694a827385ed25de31242905`。）
