HELM 是 Stanford CRFM 的 Holistic Evaluation of Language Models，2022 年 arXiv 发布，官方仓库引用为 TMLR 2023 论文。它处理的问题是：语言模型评测被拆散在不同任务、模型、指标、prompt 和报告口径里，导致模型比较难以审计。

评测对象是 scenario × model × metric 的运行记录：scenario adapter 产生 prompt，模型在标准化设置下输出，metric code 评分，指标包括 accuracy、calibration、robustness、fairness、bias、toxicity、efficiency 等。它属于 evaluation infrastructure，不是训练数据集或 reward recipe。
