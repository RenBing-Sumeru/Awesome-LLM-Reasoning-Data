**输入与输出。** 一条记录含 LIMOPro/LIMOPro v2 问题、conditions、question、参考答案和 sampling identifier，输出 `steps`、`steps_scores`、`steps_detail`、`steps_content`、可选 `steps_summary`、`final_answer` 与 `is_correct`（官方数据卡 Data Format）。

**流程。** 生成八个大纲；以自评选一个；在上下文中为各步骤评分；与阈值比较；调用 thinking 或 non-thinking endpoint；再把先前子问题及解答传入下一个 prompt。仓库示例暴露的设置为阈值 0.5、八个大纲、top_k 20、max_tokens 32768。论文实验使用 temperature 0.6、top-p 0.95，System 2 扩展范围为 4096–32768 tokens。

**选择与使用。** 最终答案不同于 LIMOPro 的训练轨迹会被丢弃；论文报告保留 800 对 QwQ 生成数据，用于四个 instruct 模型的 SFT。Hugging Face 发布物则列出 817、800、782 和 713 条的四个文件。所核查来源未发布确切的 800 行 manifest、候选大纲、自评输出、逐步骤 route、token counts、seeds 或 retries。

**评测。** 论文在 AIME24、AIME25、AMC23 上用八次采样的 pass@1 accuracy、Tpi（每 iteration/sub-problem 的 tokens）和总 response tokens 评估。这些指标不是训练 reward，也不能证明发布推理轨迹的质量。
