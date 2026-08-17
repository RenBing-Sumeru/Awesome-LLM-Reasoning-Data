Skip-Thinking 将配方拆为 Chunk-Wise Training（CWT）和 Skip-Thinking Training（STT）。CWT 把一条长 rationale 转换成分阶段的“前缀到下一 chunk”训练样本，使学生模型每次学习一个 chunk。其 Search-Based Chunking（SBC）从既有边界出发，以当前学生模型的 loss 作为启发式信号，贪心调整出内部较连贯、较易学习的分段。STT 随后逐个移除 chunk，让已完成 CWT 的学生模型继续预测答案；只有答案仍正确时，才把该 chunk 标为可跳过。

因此，数据对象应包括教师 rationale、不断变化的 chunk 边界、逐 chunk loss 比较、删除试验、答案正确性结果以及最终保留/跳过序列。反馈契约在答案层面是程序式的，但映射到 chunk 重要性时仅是代理信号。与完整 rationale 的 CoT distillation 相比，它改变了监督单元；与完全 latent reasoning 相比，它保留部分显式 chunk。教师生成 CoT、分块和 rationale internalization 本身并非全新，贡献在于将 loss 引导与正确性门控组合起来。
