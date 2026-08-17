现有证据支持下列重建，并且必须把主 817-prompt recipe 与辅助实验分开。

1. **构造 candidate group。** 主要数学设置使用全部 817 个 GAIR/LIMO prompt。DeepSeek-R1、QwQ-32B 和 Qwen3-32B 生成长 candidate response。论文称每个被接收 candidate 的最终答案都匹配 ground truth，但没有披露 answer extractor、equivalence mapping、rejection log、duplicate policy 或主实验每题准确 candidate 数。
2. **不改写地切分。** GLM-4.5-Air 接收 problem 与完整 solution，并被要求返回 JSON `sentence_groups`、保留全部原文、维持顺序且不遗漏任何内容（附录 B.1）。output parser、retry 行为、empty-step handling、parse-failure 数量、model revision、解码设置与 segmentation validation 均未发布。
3. **为每个 step 打分。** 对 response `y=(s_1,...,s_p)`，`s_i` 的 LocalLP 是目标 pretrained student 的逐 token 平均 log probability。条件包括 prompt、当前 step 内已生成 token，以及之前紧邻的 `k` 个 step。Student 在选择前没有 fine-tune。
4. **聚合并选择。** LALP 是全部 `p` 个 LocalLP 的无权平均。每个 prompt 保留 `argmax_y LALP(y|x)`，因此主 LIMO setting 生成 817 条完整 selected response。Step boundary 与 score 是 preprocessing metadata，不是训练 label。
5. **Fine-tune。** 使用 LLaMA-Factory SFT 在 817 条 selected complete response 上训练目标 student。主要报告 Qwen2.5-7B-Instruct 与 Qwen2.5-32B-Instruct；其他实验还使用 Qwen2.5-Math-7B 和 Llama-3.1-8B-Instruct。
6. **评测。** 主要 suite 包括 MATH500、AIME 2025、AMC 2023、MINERVA、KAOYAN、OlympiadBench 与 CN_MATH_2024；扩展实验评测 GPQA-Diamond 和 LiveCodeBench v2。论文只报告 point estimate，没有独立 training seed、error bar 或 confidence interval。

Context window 是重要的数据构造参数。Teacher-ranking 实验使用可用前置 step 的 5%、25%、50% 和 75%；5%–25% 保留作者报告的下游 teacher 排序，而更大 window 会收敛到 GALP。附录 C.7 测试整数 window 1–6，图中 Qwen2.5-7B-Instruct 的峰值接近 `k=4`，Qwen2.5-32B-Instruct 接近 `k=5`。每个 headline table 对应的准确 run-to-`k` mapping 并未完整说明。

LALP 对每条 response 需要 `p` 次 local forward pass，而 GALP 只需一次；不同 response 的 step 可以 batch。论文称在其设置中用 200 个 prompt 就能恢复完整 817-prompt teacher order，但没有 repeated subsampling variance 或实测 scoring runtime。

Teacher-sampling 表打印了 1 或 16 个样本、temperature 0.0 或 1.0、top-p 1.0 或 0.95、top-k 1 或 40 的 alternative，却没有清晰映射到每项实验。因此，主实验 candidate 数与设置必须保持 `unknown`。独立的 within-teacher sanity check 使用 8,890 个 MATH level-3-to-5 prompt、每题 16 个 response；代码扩展使用 5,000 个 OpenCodeReasoning 与 LeetCode prompt，但 mixture 未披露。

附录 B.4 报告 LLaMA-Factory、BF16、gradient accumulation 8、zero warmup，以及 batch size per device 1 或 2、learning rate `5e-6` 或 `1e-5`、10 或 15 个 epoch 的 alternative。它没有把每个斜线分隔设置映射到具体结果。训练和评测使用四张 A100；runtime、GPU memory、total token、total compute、seed、dependency version 与 checkpoint-selection rule 均缺失。

复现需要五类当前不可得 artifact：answer checker 与 mapping rule；原始 candidate group；准确 GLM-4.5-Air segmenter prompt、parser 与 model revision；逐 step likelihood 和 selection ledger；以及连接 sampling、`k`、SFT 设置、checkpoint 与评测的 run manifest。论文链接的匿名仓库当前返回 HTTP 401，无法检查其内容，因此这些 artifact 均未得到核验。
