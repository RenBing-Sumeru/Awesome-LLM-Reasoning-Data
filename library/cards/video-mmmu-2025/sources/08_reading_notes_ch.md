阅读时先看 ACL Anthology 页面，以最终引用元数据为准，因为最终题名和作者顺序与 arXiv/项目页略有差异。然后读 arXiv 第 3、4 节，了解数据构造、QA taxonomy 和主要实验；再看 appendix 中的 subject distribution、prompts、annotation pipeline 和 error analysis。

筛选时问三个问题。第一，下游声称的是视频感知、概念理解，还是迁移到新问题？第二，评测使用的是视频帧、transcript、audio，还是混合输入？第三，performance gain 是相对无视频或观看前基线如何计算的？

本轮 unknown：本地访问 Hugging Face 超时，因此没有独立检查数据集页面细节和 license；源视频授权仍需审计；若后续有公开 leaderboard 更新，应按日期和 dataset revision 固定。
