可重建流程包含三个任务前端和一个共享 verifier 目标。

- **算法任务输入与候选解。** Last Letter Concatenation 在列表长度 2、3、4 上各采样 350 个 query，每个 query 由 Gemma-2B 生成 128 次尝试，去重后约 50K 条记录；评测长度为 6。Word Sorting 在每个训练长度生成 4,096 个 query，每个 query 由 Gemma-2B 生成 64 次尝试，去重并过滤无效 response 后约 100K 条记录；评测长度为 5。程序化过程同时给出正确性标签与验证理由。（Appendix A）
- **GSM8K 输入与候选解。** 原始划分约含 7.2K 个训练问题、128 个验证问题与 1.3K 个测试问题。Gemini 1.0 Pro 为每个训练问题生成 50 份候选解，再随机保留至多 16 份正确解和 16 份错误解；测试时每题评估 16 份候选解。同一个 Gemini 1.0 Pro 接收问题、待验证候选解以及另一份能得到正确答案的解，并生成逐步验证理由。正确参考解是仅用于合成的特权信息，不进入 verifier 微调或部署输入。只有最终判决与候选解已知标签一致的理由才会保留。（Section 3.3；Appendix A，Table A.2）
- **平衡与序列化。** 训练始终按 50% 正确、50% 错误混合候选对。Direct target 是 `Yes` 或 `No`；CoT target 是完整验证理由，随后附最终正确性问题与判决。官方 GSM8K JSONL 发布把这些内容存入 `inputs` 与 `targets`，并附 `question_id` 和 `model_output_id`；正误样本及理由/直接 target 分开打包。
- **训练。** 算法任务 verifier 使用 Gemma-2B；GSM8K verifier 使用 Gemma 2B、7B 与 Gemma-2 9B。损失由验证下一 token SFT 加 lambda 倍的正确解生成 SFT 组成，算法任务 lambda=1/3，GSM8K 为 1/4。Appendix B 报告学习率搜索 2e-6、1e-6、5e-7，通常选择 2e-6；weight decay 1e-2；无 dropout；使用带 decoupled weight decay 的 Adam；gradient clipping 1.0；1,000 个 warmup step；batch size 64；训练 300K step；cosine decay 周期 200K step。
- **推理与用途。** Direct GenRM 返回 `p(Yes)` 用于候选排序。GenRM-CoT 采样验证理由并平均相应条件 `Yes` 概率，通常使用 32 个样本。固定 generator 为不同 verifier 提供同一候选集合，Best-of-N 选择最高分候选。MATH500 与 MMLU 数学子集用于衡量从 GSM8K 训练 verifier 的迁移，不是论文报告的训练来源。

复现时应共同固定 ICLR/arXiv 版本、任务划分、generator 与 verifier 模型版本、prompt 模板、候选/理由采样数、lambda、优化器设置、理由过滤器及数据仓库 commit。训练与理由生成 temperature、随机 seed、更广泛去污染和硬件均未披露。官方仓库 commit `083c3a24db0560a31c9ec70675d566671b386e22` 确认了 GSM8K 记录；未确认官方实现或已训练 verifier checkpoint。
