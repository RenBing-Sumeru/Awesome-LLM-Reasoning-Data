
语料构造以 OpenR1-Math-220K 和 DeepMath-103K 中的问题与标准答案为起点。Qwen3-8B 通过 vLLM 为每个源样本生成一条开启 thinking 的回答，解码参数为 temperature 0.6、top-p 0.95、top-k 20、min-p 0，最长 10,000 个生成 token。Math-Verify 判定最终答案是否正确。流程保留全部错误回答，对正确回答下采样并打乱，形成 1:1 数据集：DeepMath 正负样本各 11,592 条，OpenR1 正负样本各 55,258 条，总计 133,700 条。

对每条回答，只提取 think 标签区域内的文本，并按字面上的空行分隔符 \n\n 切分步骤。系统取每个分段最后一个 token 的采样模型隐藏状态，经投影后送入 0.6B 评分模型。评分头输出 wrong、buffer、right 概率；训练损失对结果为正的步骤优化 right+buffer，对结果为负的步骤优化 wrong+buffer。采样模型保持冻结，过程评分模型全参数训练 3 个 epoch；采用 AdamW、1e-4 学习率、0.1 权重衰减、DeepSpeed ZeRO-2、bfloat16、单卡 batch size 2、梯度累积 4，并使用 8 张 H100。

推理时，Qwen3-8B 用同一组公开解码参数生成 N 条候选。TrajSelector 计算每一步的 right 概率，在轨迹内取算术平均，并返回均值最高的候选。这是离线的外部测试时选择基底，而不是交互式环境。
