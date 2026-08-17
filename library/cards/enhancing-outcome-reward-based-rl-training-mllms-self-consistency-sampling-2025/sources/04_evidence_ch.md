在六个评测 benchmark 上，表 2 显示把 SCS 加入相应 RL baseline 后均有提升。最大平均变化出现在 Qwen2.5-VL-7B-Instruct 的 RLOO：从 57.8 提高到 65.5，即 7.7 个百分点；GRPO、两个 REINFORCE++ 变体、Qwen2.5-VL-3B 与 InternVL3-8B 的提升较小。组件消融把收益分别归因于 truncation-resampling 与 visual perturbation。论文还报告三次重复的区间，但其中一个 REINFORCE++-baseline 条目的均值与逐 run 数字似乎不一致，需要对照代码或日志核查。

论文还对每个 benchmark 随机抽取 100 个“答案正确”的案例进行人工判断，并让 o3-mini 与 Gemini 2.5 Flash 根据公开解答评估同一批 trace。结果称 SCS 后不忠实 rationale 更少，不同 judge 下总体下降约 13.6%–15.2%。这是对抽样评测集的直接证据，但它并非已发布的 dense process annotation 标准，而且样本以最终答案已正确为前提。

NeurIPS 官方页面、论文、代码仓库与 HF dataset 共同证明方法和 artifact 存在。HF 的 Qwen 文件含 16,180 条 prompt，但未发现已核验的逐 rollout reward log。准确率增益和人工/模型判断案例用于评估训练行为，不能证明已发布 prompt data、图像资产或潜在 rollout record 完整、去污染或普遍正确。
