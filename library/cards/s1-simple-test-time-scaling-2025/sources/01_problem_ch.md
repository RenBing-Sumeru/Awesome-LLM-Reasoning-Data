权威出版记录是 ACL Anthology 收录的 EMNLP 2025 main-proceedings 论文，页码 20275–20321，DOI 为 `10.18653/v1/2025.emnlp-main.1025`。arXiv preprint、官方仓库、固定 Hugging Face 数据集、原始 s1-32B model 和结果文件构成配套 artifact 记录。

s1 研究如何从广泛推理题目池中选择极小的 supervised-distillation 集，以及如何在模型训练后单独控制其推理期思考长度。原始数据对象是一道带参考答案的 source question，加上 Gemini 2.0 Flash Thinking Experimental 生成的 reasoning trace 与 response。公开 s1K row 包含 `question`、source `solution`、`cot_type`、`source_type`、字符串化 source `metadata`、空 `cot`、单元素 `thinking_trajectories` 序列与 `attempt`；tokenized release 另加渲染后的训练文本。

构造 funnel 是核心证据：**59,029 道 source question → 54,116 条成功 Gemini generation → format-quality filter 后 51,581 条 → 移除 Qwen2.5-7B-Instruct 或 Qwen2.5-32B-Instruct 能解出的题目后 24,496 条 → 1,000 条 s1K**。最后一步把 384 条固定的 judged-correct AIME/GPQA 与长 MATH 样本，同 Claude 分配的 domain 和按 trace length 加权的 diversity sampler 结合起来。

这 1,000 条训练记录并非全部是验证正确的 solution。后续 Claude 3.7 审计只把 **53.6%** 的 s1K generation 判为正确；作者有意保留错误 generation，因为目标是模仿 reasoning pattern，而不是构建全正确 solution corpus。这属于 answer-/episode-level SFT 数据，不是 process supervision、RLVR 或 proof-verified dataset。

该工作属于 **Data Construction and Open Release Recipes**，因为它披露了来源计数、分阶段选择、judge、消融、训练配置、data/model/code 与发布差异。它还包含 budget forcing，但后者是训练后、推理期针对停止/继续的独立控制，不是数据字段、训练标签、reward 或 selection rule。本卡达到 L4 双语审阅准备状态；论文精确选择与发布对账仍为 partial。
