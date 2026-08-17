Pile 构建首先进行语义预筛选。论文列出的保留子域为 Pile-CC、StackExchange、GitHub、HackerNews、PubMed Central 和英文 Wikipedia。公开脚本用 `all-mpnet-base-v2` 对 GSM8K、ECQA、ARC-Challenge 与 ProofWriter 参考样本求平均嵌入，再保留余弦相似度至少为 0.3 的 Pile 文本。长度规则没有被可复现地统一说明：方法部分写 2,000 word 分段，实验部分写少于 2,000 token，而代码对文本执行 Python `len(text)`，实际计算字符数。

Llama-3-8B-Instruct 在示例提示下把 rationale 插入字面量 BOT 与 EOT 分隔 token 之间，并被要求不改变周围文本。对 GSM8K 和 ECQA，提示还要求不要把答案放入 rationale。公开抽取脚本使用温度 0.0、seed 14 和 3,000 token 输出上限，但脚本输入列表还包含 MATH 与 MMLU-Pro；论文报告的最终混合只列出 GSM8K、ECQA 和六个 Pile 子域。

对位置 i 的 rationale，论文以 0.9 的幂衰减加权后续 token 损失。报告阈值为 GSM8K 1.2、ECQA 0.5、所有 Pile 来源 0。作者用一个含 100 个正负样本的人工标注集选择任务数据阈值，并以保留 rationale 达到 95% 准确率为目标；论文没有清楚说明每个数据集是否各有 100 条。Pile rationale 没有同类标注校准。

保留样本通过 token 级交叉熵训练 RATIONALYST：遮蔽 prompt，只预测 rationale。公开示例任务配置为训练 20 个 epoch、学习率 2e-5、每设备 batch size 2、梯度累积 8、warmup ratio 0.03、cosine 调度和双 GPU FSDP，但论文没有确认该文件就是报告结果使用的精确运行配置。

推理时，RATIONALYST 根据当前轨迹生成 rationale。Llama-3-8B-Instruct 以温度 0.7 采样 3 个下一步骤候选；公开的隐式方法用该 rationale 作为条件，选择 0.9 衰减 token log-probability 最高的候选。脚本使用 seed 14，最多迭代 15 次，并可因数据集特定答案提示提前停止。所选步骤没有经过外部正确性验证器或可执行环境检查。
