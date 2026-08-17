源数据为 OpenR1-Math。作者过滤问题格式及超过 16,384 token 训练上限的序列，得到 92,064 条实例。轨迹被切分为 Foundation Solution 和后续 Evolution Solution 或步骤。构造流程定位标准答案首次出现位置，计算推理效率比与过度思考标记比，再组合为得分，最后应用固定的 SBT-E 或自适应 SBT-D 边界规则。一小段冗余推理保留在输入中但不计损失，自然语言制动提示插在保留内容与 mask 内容之间。

模型包括 Qwen2.5-Math-1.5B/7B-Instruct、Llama-3.2-1B 和 Llama-3.1-8B-Instruct。论文报告使用 Megatron-LM 训练 3 个 epoch，学习率 1e-5、余弦衰减、warm-up ratio 0.03、最大长度 16,384。评测在 GSM8K、MATH500、AMC23 和 AIME 2024/2025 上以 temperature 0.7 每题采样 8 个输出。官方代码以 Apache-2.0 链接，但元数据未确认存在包含全部上游 ID、得分、边界、mask、被拒记录和源到派生血缘的不可变数据发布；这些工件仍为 unknown。
