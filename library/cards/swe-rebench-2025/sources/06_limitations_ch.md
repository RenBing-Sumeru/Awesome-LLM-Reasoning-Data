正确性只相对于已声明契约成立：SWE-bench fork 在选定 SWE-rebench 数据集上运行 run_evaluation，使用安装 recipe、Docker images 和仓库测试。不要混淆 main data、filtered data 和 leaderboard subsets。这里 NeurIPS 2025 状态来自 arXiv comments，未核验 proceedings URL。

不要把论文解读成无限制软件智能体可靠性证明。公开 artifact 会进入后续训练语料，Docker 或依赖环境会漂移，评测器实现也可能随发布版本变化。
