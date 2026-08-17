最强证据来自 PQA-L：1,000 条 yes/no/maybe 专家标注样本，其中 500 条用于交叉验证，500 条用于测试。论文同时发布 PQA-U 与 PQA-A，但证据强度不同，因为前者未专家标注，后者由规则和启发式生成。

官方 scorer 接收以 PMID 为键的预测文件，与仓库中的 test_ground_truth.json 对比，输出三分类 accuracy 和 macro-F1。这给了样本级可核验性：预测要么与 PQA-L gold label 一致，要么不一致。但它不证明模型解释忠实，也不证明结果可用于临床。

论文报告的模型实验使用生物医学语言模型 baseline，并显示领域预训练与弱标注/人工生成数据可以改善三分类判断。这些 aggregate 数字只在论文 split、预处理、模型版本和 conclusion-derived label 设定下成立；与后续 leaderboard 或本地结果比较前，应先固定同一 subset 与 evaluation script。
