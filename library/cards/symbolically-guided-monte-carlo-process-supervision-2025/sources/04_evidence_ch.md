最有力的证据具有明确条件，不能概括为整体数据质量结论。

- **发布对象核查。** 固定 commit 的仓库 JSON 包含 1,505 条轨迹和 12,448 个对齐步骤标签。直接计数得到 10,709 个正标签和 1,739 个负标签；1,164 条轨迹全部为正，341 条至少含一个负标签。官方 Hugging Face API 显示一个含 15,412 条 SFT 记录的 train split 和一个含 21,472 条 DPO 记录的 train split。这些核查确认发布规模与 schema，不确认语义正确性。
- **域内微调。** Table 1 中，Qwen Symbolic Trajectory-FT 在 FOLIO 和 LogicAsker 上分别报告 68.14 和 74.00 的准确率；对应 Llama 结果为 63.24 和 63.67。实验条件使用论文生成的符号轨迹和 full fine-tuning。benchmark 提升本身不能验证每条轨迹或每个 PRM 标签。
- **PRM 筛选消融。** Appendix B 的 Table 5 报告：Llama 在无 PRM 筛选时为 62.25/63.00，加入筛选后为 63.24/63.67；Qwen 则从 65.20/73.33 变为 68.14/74.00，顺序均为 FOLIO/LogicAsker。这表明筛选在特定任务上有收益，其中 Qwen 在 LogicAsker 上差异很小；它不构成步骤形式有效性的证据。
- **偏好对构造的负面结果。** §6.1 报告 SFT 整体上优于 DPO，并推测累计 PRM 概率可能无法充分区分轨迹。这一点很重要，因为发布的 DPO “negative”只是在学习概率乘积下相对低分。
- **域外行为。** Table 2 报告 Qwen SFT 在 Vitamin C、Climate-FEVER、PHEMEPlus 上分别为 81.93、58.07、60.40；Llama SFT 分别为 86.06、78.27、72.00。迁移并不一致：Llama SFT 在 PHEMEPlus 上低于 process-DPO（72.00 对 73.47）。

所有性能数字均为作者报告，本 Card 未做独立复现。artifact 核查验证的是数量、字段、链接和脚本行为，不会把论文的模型结果升级为数据质量证明。
