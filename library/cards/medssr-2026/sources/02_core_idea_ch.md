该方法用罕见病知识控制问题合成，让策略模型生成伪标签，再结合自监督和人工锚定的强化学习。 相比封闭教师思维链蒸馏后接标准强化学习的方法，本文把医学问题、检索到的罕见病知识、模型推理、答案和奖励元数据作为可复用目标，并以医学答案奖励、伪标签置信度、人工真实数据和两阶段强化学习作为反馈契约，因此应归入 Track 01。

Google Scholar 引用数：0（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Eliciting+Medical+Reasoning+with+Knowledge-enhanced+Data+Synthesis%3A+A+Semi-Supervised+Reinforcement+Learning+Approach&author=Haolin+Li%2C+Shuyang+Jiang%2C+Ruipeng+Zhang%2C+Jiangchao+Yao%2C+Ya+Zhang%2C+Yanfeng+Wang&hl=en）

开放数据集：是
数据集名称：MedSSR-Synthetic-43K
官方地址：https://huggingface.co/datasets/tdlhl/MedSSR-Synthetic-43K
规模：4.3 万条合成医学推理记录
记录形式：医学问题、检索到的罕见病知识、模型推理、答案和奖励元数据
文件与存储格式：官方数据页所列结构化记录及其引用资产
领域与语言：以罕见病为重点的中英文医学问答
构造与筛选：策略模型自身生成伪标签推理，而不只依赖封闭教师；医学答案奖励、伪标签置信度、人工真实数据和两阶段强化学习
许可与访问限制：`Apache-2.0`；仍需遵守上游来源条款
预期用途：医学推理监督微调与半监督强化学习
