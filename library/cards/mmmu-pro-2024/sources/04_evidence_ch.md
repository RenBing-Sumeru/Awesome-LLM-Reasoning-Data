论文报告顶级多模态模型从 MMMU 到 MMMU-Pro 出现明显下降，官方摘要强调部分强模型下降 16.8 到 26.9 个百分点。官方 Hugging Face card 在答案修正后列出过 corrected overall 分数，例如 GPT-4o 54.2、Gemini-2.5-Pro 58.2、o3 55.3。

逐样本证据仍然是答案键对比，而不是可验证的推理轨迹。更强的证据来自构造审计：它专门针对 text-only 可解题，并用 vision-only 设置改变模型可见信息。

证据边界高度依赖版本。HF 数据集卡记录了 2026-07-10 的答案修正，所以旧 leaderboard 数字、未固定 revision 的数据和不同 prompt 方案不能混合比较。
