官方报告按照 Frontier Safety Framework 的关键能力等级评估 Gemini 3 Pro，范围包括 CBRN、网络安全、有害操纵、ML R&D 和探索性的失配风险。它对 Track 12 的贡献不是一个可复用数据集或可执行配方，而是对推理 traces、后训练奖励、部署 guardrails 和评测脚手架之间接口的部分披露。

在后训练层面，Google DeepMind 报告了由模型生成、用于 SFT 的 thought traces，以及一个包含 thought 长度惩罚的 RL 阶段。报告还区分了这些惩罚和其他奖励：后者通常不参考 thought。它描述了 query filters、输入过滤或处理、prompt-injection defenses、安全对齐微调和用于改善缓解覆盖面的 red-team feedback 等缓解措施。这些陈述标识了机制和边界，却没有给出复现所需的记录、算法或实现。

