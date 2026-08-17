1. **多语言 agent 评测：** 使用 PB500 做快速迭代、完整集做最终报告；输出 resolve rate、环境失败、F2P/P2P 和每语言/任务类型结果。

2. **定位模型训练：** 利用 `modified_files`、函数、类与 CST 节点元数据训练 repository retrieval 或 reranker，再用测试验证定位提升是否真正改善修复成功率。

3. **失败分析：** 将结果分为未定位、定位正确但未修改、补丁编译失败和测试失败。若研究目标是完全不同的正确补丁，不应把 gold-node precision 当硬 reward；无稳定 Docker 和测试的语言也不宜直接加入。
