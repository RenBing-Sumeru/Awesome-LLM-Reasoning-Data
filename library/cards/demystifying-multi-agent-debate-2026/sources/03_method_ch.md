实验用同一个 Llama-3.1-8B-Instruct 或 Qwen-2.5-7B-Instruct 初始化 5 个同质 agent，并运行 5 轮。域内数据为 GSM8K、CommonsenseQA、HellaSwag 和 MMLU；GPQA-Main 与 ARC-Challenge 为 OOD。推理使用 temperature 1.0、top-p 0.9；多样性初始化设 Ncand=10。

置信训练先从合并训练数据抽取 5,000 条，以 self-consistency 生成数值目标并做短 SFT；随后在人工筛选的 10,000 条困难样本上做 GRPO。置信校准使用 LoRA rank 64、1 epoch、长度 2,048、每 prompt 8 次生成、学习率 5e-6、top-p 0.9、beta 0.01。辩论 GRPO 同样 rank 64、1 epoch、8 次生成，学习率 5e-5、top-p 1.0、beta 0.01、最大 completion 1,024；奖励尺度为 correctness 10、confidence 3、engagement 5，格式错误 -30。

仓库公开代码、配置、公共数据 loader 与一个对话示例；完整 5K/10K 清单、候选池、轨迹、奖励和 LoRA adapter 未核验为已发布。

