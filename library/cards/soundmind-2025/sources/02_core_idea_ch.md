`SoundMind` 把每道逻辑题序列化为口语化提示、教师生成的长思维链、最终蕴含标签以及问题和回答语音。相比只有字幕的音频语料，或缺少转写与配对推理过程的音频推理集，它使多模态目标可以直接复用，并用答案格式、标签正确性和回答长度规则构成反馈契约，因此应归入指令、示范与推理过程数据，而不是仅归为音频评测基准。

Google Scholar 引用数：10（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=SoundMind%3A+RL-Incentivized+Logic+Reasoning+for+Audio-Language+Models&author=Xingjian+Diao&hl=en）

开放数据集：是
数据集名称：`SoundMindDataset`
官方地址：https://huggingface.co/datasets/SoundMind-RL/SoundMindDataset
规模：共 6,446 条；训练集 5,184 条、测试集 656 条、验证集 606 条；语音总长超过 1,074 小时
记录形式：样本编号、口语化用户内容、长思维链回答、二元蕴含标签、输入语音和输出推理语音
文件与存储格式：每个样本目录包含一份标注文件、问题波形和带标签的回答波形；预处理脚本可生成训练用列式文件
领域与语言：英语口语自然语言推断与逻辑推理
构造与筛选：逻辑三元组先被口语化，再由教师模型作答并经语音合成；训练奖励检查格式、正确性和长度
许可与访问限制：采用宽松开源许可；数据页公开且无需申请权限
预期用途：音频语言监督微调、规则奖励强化学习与多模态推理评估
