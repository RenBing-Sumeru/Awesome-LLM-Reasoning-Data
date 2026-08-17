arXiv 摘要报告 MMLU-Pro 包含 14 个领域、12,032 道题，并给出一个关键现象：GPT-4 在 MMLU 上为 86.4%，在 MMLU-Pro 上降到 72.6%；论文还强调新基准相对 MMLU 对 prompt variation 更不敏感。

artifact 证据来自官方 GitHub evaluator 和 Hugging Face 数据集；HF 数据集卡记录了数据说明并标注 MIT 许可。逐行决定性证据仍然是模型选择的选项是否等于该题发布的正确选项。

证据边界：这些数字对应一个公开数据集版本和评测设置。它们不证明每个干扰项都语义完美，不证明未来模型未污染，也不说明 chain-of-thought 质量能被最终选项分数捕捉。
