主要证据来自 arXiv 论文和最终 ACL Anthology 记录。ACL 将其记录为 ACL 2026 long paper，DOI 为 10.18653/v1/2026.acl-long.1281，页码 27798-27828。项目页确认 ACL 2026 Main，并链接论文、Hugging Face 数据集和 GitHub 代码仓库。

arXiv 论文报告基准包含 300 个视频和 900 个人工标注问题，覆盖六个学科。实验按 Perception、Comprehension、Adaptation 三个 track 评估模型，并提出 knowledge/performance gain metric，用来衡量观看视频后的提升，而不是只看最终准确率。论文报告当前 LMM 与人类学习者之间存在明显差距，尤其在 adaptation 难度上升时更突出。

这些证据支持主题筛选，因为 benchmark 对象、artifact 路径、评测 track 和失败面都清楚。但这些证据本身不能证明基准不受公开视频泄漏、transcript 差异、源视频不可用或 prompt/帧采样改变的影响。
