ACL Anthology 摘要把 DROP 描述为 55k-question 的对抗式众包 benchmark，并报告当时最佳系统 38.4% F1、专家人类 96%、论文模型 51% F1。arXiv v2 摘要描述的是 96k-question 版本，并报告当时最佳 32.7% F1、专家人类 96.0%、论文模型 47.0% F1。

这里的证据是 benchmark aggregate EM/F1，不是逐样本推理轨迹证明。逐题的决定性对象是归一化预测是否按 scorer 与 gold answer set 充分匹配。证据边界受版本、答案归一化、别名处理、split 政策和公开数据污染风险限制。
