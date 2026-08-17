论文报告的提示来源混合了 40K 条 DeepScaleR 与 90K 条 OpenR1-Math 问题。DeepSeek-R1-Distill-Qwen-7B 生成完整推理轨迹。方法在 `think` 推理内容中以双换行切分步骤，计算长度归一化步骤熵，以 `[SKIP]` 掩盖熵最低的 80% 步骤，并移除超过 4,096 token 的序列；论文报告剩余 70K 个 SFT 样本。

阶段 1 使用 DeepSpeed Stage 2 和 LoRA 进行三轮 SFT。阶段 2 从中随机取 10K 个样本，以组大小 14、DeepSpeed Stage 3、LoRA 和 AdamW 进行 GRPO。其奖励结合最终答案正确性、跳过比例、跳过数量与响应长度项。作者关联仓库提供完整 CoT 生成、掩码、SFT 和 GRPO 脚本，但受检发布物没有提供论文对应的生成行、熵值、掩码或保留/拒绝 rollout 台账。

