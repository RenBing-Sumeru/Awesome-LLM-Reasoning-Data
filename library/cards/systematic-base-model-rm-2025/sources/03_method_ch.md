1. 将 40 个 chat 基座按参数量分组，以 HelpSteer2-Preference 训练一轮并接标量奖励头，依验证准确率选 checkpoint。
2. 在 RewardBench 约 3,000 题、23 数据集上评估二元偏好与多属性回归 RM，输出四类和均值准确率。
3. 将 RM 分数与 33 个公开基准及规模指标相关，以 10 折交叉验证 Elastic Net 预测；只有留出 top-k 覆盖率决定筛选是否接受。
4. 对比 Llama-3.1-8B 后训练 checkpoint，并在 100 万 SlimPajama 样本上估计文档存在分数。论文报告约 4,500 GPU 小时；复现须固定模型版本、算力和评测版本。
