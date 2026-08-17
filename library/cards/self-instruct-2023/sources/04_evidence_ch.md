1. **同模型增益：** vanilla GPT-3 在 SUPER-NATURALINSTRUCTIONS 上的 ROUGE-L 为 6.8，同一模型家族使用 Self-Instruct 数据微调后达到 39.9，绝对提高约 33 个点，并在论文设置下接近 InstructGPT-001。受控差异是合成指令 SFT，但私有 InstructGPT baseline 的训练数据与 API 细节并不匹配。
2. **数据质量抽检：** 人工标注者判断，抽样生成项中只有 54% 的所有字段都有效。这不否定整体模型增益，却明确了数据边界：启发式相似度与格式过滤仍留下大量 instruction、input 或 output 错误，因此下游复用需要更强的逐记录验证。
