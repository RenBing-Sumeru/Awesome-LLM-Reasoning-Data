1. **合成跨模态候选回应对。** 不同能力模型生成候选回应，强teacher协调冲突、过滤并产生modality-awarerubricrationale；
2. **生成模态感知 rubric 与理由。** 通过SFT学习结构，再以可验证偏好奖励进行GRPO。
3. **协调并过滤 teacher 判断。** 通过SFT学习结构，再以可验证偏好奖励进行GRPO。
4. **使用 SFT 与困难偏好对 GRPO 训练。** 通过SFT学习结构，再以可验证偏好奖励进行GRPO。
