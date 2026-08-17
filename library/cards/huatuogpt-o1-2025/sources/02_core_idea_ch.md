该方法筛出 4 万道可验证医学题，为一半蒸馏复杂推理，另一半用于答案奖励强化学习。 相比在原始考试题或简单思维链上监督微调后再做常规强化学习的方法，本文把医学问题、复杂推理过程、最终回答、语言和来源切分作为可复用目标，并以已知选择题答案、去污染、失败次数限制和规则奖励作为反馈契约，因此应归入 Track 01。

Google Scholar 引用数：62（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Towards+Medical+Complex+Reasoning+with+LLMs+through+Medical+Verifiable+Problems&author=Junying+Chen&hl=en）

开放数据集：是
数据集名称：medical-o1-reasoning-SFT
官方地址：https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT
规模：4 万道可验证医学题，其中含 2 万条复杂思维链监督样本和 2 万道强化学习题
记录形式：医学问题、复杂推理过程、最终回答、语言和来源切分
文件与存储格式：官方数据页所列结构化记录及其引用资产
领域与语言：中英文医学考试推理
构造与筛选：闭源教师搜索并生成监督阶段的复杂推理；已知选择题答案、去污染、失败次数限制和规则奖励
许可与访问限制：`Apache-2.0`；仍需遵守上游来源条款
预期用途：医学复杂推理监督微调后接可验证强化学习
