1. **评测：** 将 Libra Bench 用作推理型 ORM/GenRM 的 pointwise correctness 测试，并按三个子集分别报告准确率。

2. **训练：** 使用 question、response 与 label 训练或校准数学正确性奖励模型，再用固定 policy 做 BoN 相关性验证。

3. **迁移或部署：** 复用 V2V 流程为其他可验证领域构造 benchmark，但必须先建立可靠答案解析器和人工复核协议。
