# 08 阅读提示

不要把 PRM800K 读成纯 evaluation-only benchmark，也不要把它读成每条公开 chain of thought 都正确的证明。它是带标签的过程监督语料，按 split 和 protocol 不同，可以用于训练、分析或 reward-model evaluation。

阅读顺序建议先看论文中的监督比较，再看 GitHub README 和标注说明确认数据契约。step label、final-answer grade、PRM score 和 best-of-N 选择结果必须分开。
