prior baseline 是 scale-first reasoning distillation：收集大量带答案问题，生成 teacher trace，并在多数成功 output 上训练。s1 把重点改为紧凑选择集。它组合三类 proxy——quality、相对于 Qwen2.5-7B/32B 的 difficulty、Claude-labeled domain diversity——并用 random、diversity-only、longest-trace 与 full-pool training 做验证。

具体数据贡献不只是“1,000 条样本”，而是一套分阶段选择接口：保留生成成功且格式有效的 Gemini trace，移除下游同系列 probe 能解出的题目，固定高质量 seed，再跨 domain 采样并偏向更长 trace。由于最终 generation 只有 53.6% 在后续被判正确，该对象更适合解释为 selected reasoning imitation，而不是 verified solution supervision。

budget forcing 是另一项独立方法贡献。它把模型学到的 end-of-thinking delimiter 当作 decoding control：到 upper budget 时输出 delimiter 终止，或抑制它并附加 `Wait` 延长 reasoning。它不会增加训练数据、标注步骤、优化 reward 或修改 s1K。新意是用极小机制控制 sequential test-time compute，而不是新的数据构造 signal。

其中许多组件都是已有技术：teacher distillation、SFT、model-based difficulty、LLM judging、domain-balanced sampling 和 stop-token manipulation。论文价值在于紧凑集成、透明消融与开放 artifact surface。然而，当前 artifact surface 已不再等于一个统一论文快照。

对推理数据研究而言，重要的是区分四个发布：59,029 道题的 raw candidate pool、58,986 行 generated full pool、原始 1,000 行 Gemini s1K，以及后续相同 1,000 道题的 DeepSeek-R1 s1K-1.1。把它们都称为一个“s1 dataset”会抹掉 teacher、filtering、count、model 与 license 边界。
