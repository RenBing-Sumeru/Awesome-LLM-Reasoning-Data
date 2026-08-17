正确性只相对于已声明契约成立：RepoBench-R 用 Accuracy@k 评估检索；RepoBench-C 和 RepoBench-P 用 Exact Match 与 Edit Similarity 评估补全或 pipeline。它没有环境执行、补丁验证或智能体轨迹反馈。ICLR 状态来自作者 GitHub README，arXiv 提供论文记录。

不要把论文解读成无限制软件智能体可靠性证明。公开 artifact 会进入后续训练语料，Docker 或依赖环境会漂移，评测器实现也可能随发布版本变化。
