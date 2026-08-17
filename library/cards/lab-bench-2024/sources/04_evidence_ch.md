论文报告 LAB-Bench 共 2,457 个问题；官方数据卡说明它包含 8 个大类、30 个子任务。数据卡还说明公开仓库约占完整数据集 80%，另保留 20% private test subset，并提供 canary string 供模型构建者过滤训练污染。

样本级证据是题目、候选答案和官方 target answer；对程序生成的序列和数据库任务，还要看论文披露的构造流程和源数据库。aggregate model score 只证明在作者 prompt 和 scoring setup 下的表现，不等同于真实生物科研能力证明。

证据边界是版本化的：官方数据卡记录 2024-08-19 的 FigQA 调整和 2025-02-18 的 SeqQA restriction-enzyme 修复。复用时应引用具体 revision，不能把预印本分数和后续数据快照混用。
