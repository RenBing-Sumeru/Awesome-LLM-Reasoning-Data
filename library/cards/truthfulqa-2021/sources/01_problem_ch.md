# 01 问题

TruthfulQA 询问一个模型在面对常见错误信念、误解、谣言或反复流传的错误说法时，能否给出真实回答。主要来源是 ACL 2022 论文页面、arXiv 版本，以及官方 `sylinrl/TruthfulQA` 仓库/软件附件。ACL 页面确认它是 ACL 2022 long paper，页码 3214-3252，DOI 为 `10.18653/v1/2022.acl-long.229`。

它的边界是 adversarially selected open questions 和 multiple-choice 变体下的 truthfulness 评测。它不是通用事实问答数据集、检索 benchmark、安全政策分类，也不是训练配方。论文要解决的具体问题是：从网页文本中学习的语言模型可能很好地模仿人类文本，因此复述流行误解，而不是纠正错误。

评测面是一条 benchmark item：问题、类别、truthful answers、false answers，以及 generation 和 multiple-choice 的评分模式。论文、会议页、DOI、代码/软件 artifact、任务规模和评分家族已固定；复用分数时仍需记录 prompt 格式、模型输出收集方式、evaluator 版本和污染风险。
