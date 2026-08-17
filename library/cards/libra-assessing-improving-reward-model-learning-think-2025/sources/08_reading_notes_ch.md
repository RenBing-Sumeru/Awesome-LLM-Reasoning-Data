1. **一句话定位：** 论文以“可验证推理转为可验证评判”的 V2V 策略构建 Libra Bench。

2. **方法抓手：** 从 DeepSeek-R1、Qwen3-32B、QwQ-32B 和两个 R1-Distill 模型为每题采样至少 64 个回答。用答案规则匹配、强模型复核和人工核验联合标注正确性。

3. **数据抓手：** Libra Bench 含 3,740 条英文样本。

4. **证据锚点：** Libra Bench 上非思考模型准确率约为 55.1%–69.1%。

5. **复用决定：** 将 Libra Bench 用作推理型 ORM/GenRM 的 pointwise correctness 测试。最大风险是领域集中在竞赛数学。
