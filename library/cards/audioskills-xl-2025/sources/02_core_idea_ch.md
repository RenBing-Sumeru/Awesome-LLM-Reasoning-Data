该数据集把多个音频来源扩展为 800 万条分能力问答，并分离 25 万条带受控思考前缀的推理子集。 相比只做描述的音频预训练数据和早期 AudioSkills 混合，本文把记录编号、音频波形、时长和有序对话轮次作为可复用目标，并以语言与音频过滤、逐来源检查、时长限制和数据消融作为反馈契约，因此应归入 Track 01。

Google Scholar 引用数：230（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Audio+Flamingo+3%3A+Advancing+Audio+Intelligence+with+Fully+Open+Large+Audio+Language+Models&author=Arushi+Goel&hl=en）

开放数据集：是
数据集名称：AudioSkills-XL
官方地址：https://huggingface.co/datasets/nvidia/AudioSkills
规模：800 万条音频问答，相关的 AF-Think 子集另含 25 万条带推理前缀的问答
记录形式：记录编号、音频波形、时长和有序对话轮次
文件与存储格式：官方数据页所列结构化记录及其引用资产
领域与语言：英文声音、音乐、语音、长音频与音频推理任务
构造与筛选：描述与问答生成器把来源信息扩展为分能力对话；语言与音频过滤、逐来源检查、时长限制和数据消融
许可与访问限制：`official NVIDIA Open Model/Data License; source audio terms also apply`；仍需遵守上游来源条款
预期用途：音频语言监督微调与推理调优
