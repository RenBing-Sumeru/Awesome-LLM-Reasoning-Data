报告称，预训练使用以英语为主的纯文本混合数据，重点覆盖 STEM、代码和通用知识。它报告了使用 GPT-4o CBRN filters 过滤与 CBRN 相关的有害预训练数据，但未公布来源清单、各来源占比、样本级来源、权利记录或完整过滤规范。

对于后训练，报告描述了先进行监督微调、再进行高计算量 chain-of-thought 强化学习，并采用与 o4-mini 和 o3 类似的技术以及大规模蒸馏。它说明了 low、medium、high 三种 reasoning effort 行为，并报告支持浏览、在 Jupyter 环境中使用有状态 Python，以及开发者提供的函数。Harmony 格式表示 analysis 推理、commentary 工具交互和 final 回答。精确训练环境、教师模型、prompts、rollouts、采样设置、奖励函数、verifier 实现、过滤保留率和优化配置均未披露。

安全工作包括 deliberative alignment 和 instruction hierarchy。报告讨论了为生物与网络安全 preparedness 评估而对抗式微调的 gpt-oss-120b 变体，但相关安全数据、人工指导、奖励或选择过程以及评估记录没有作为可复用数据集或环境发布。
