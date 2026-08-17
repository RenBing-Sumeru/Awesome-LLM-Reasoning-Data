构造从 7,500 道 MATH 训练题开始。QwQ-32B-Preview 生成长 CoT，Qwen2.5-32B-Instruct 生成短 CoT；规模对照教师包括 Qwen2.5-72B/3B-Instruct、Llama-3.1-70B/8B-Instruct 和 Gemma-2-27B/9B-it。教师默认 greedy decoding，响应按最终答案正确性拒绝采样；为降低 prompt 选择混杂，仅保留两个教师均答对的问题。

研究训练十个 0.5B 至 70B 的 Qwen 与 Llama 学生。14B 以下模型进行两轮全参数 SFT，使用 AdamW、cosine scheduling、最高学习率 `1e-5` 和 16,384 序列长度；更大模型用 LoRA 训练两轮，学习率 `1e-4`。评估覆盖 MATH、GSM8K、AIME 2024、AMC 2023 和 OlympiadBench 英文数学子集；最终答案先 exact match，未匹配形式由 Qwen2.5-32B-Instruct 回退判断。
