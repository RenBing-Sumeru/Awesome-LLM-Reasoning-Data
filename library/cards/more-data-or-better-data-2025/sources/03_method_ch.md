Baseline pipeline 使用 DeepSeek-V2-Lite 或 Qwen2.5-3B,在覆盖预训练与 SFT 的大型"已验证"代码—数学语料上训练。每个实验中,候选数据提供 20% 样本,baseline corpus 提供 80%。知识、逻辑推理与数学任务采用 accuracy,代码任务采用 Pass@1。论文列出 MMLU、MMLU-Pro、CMMLU、GPQA-Diamond、HellaSwag、BBH、DROP、MATH、GSM8K、MathBench-a/t、HumanEval 与 Sanitized-MBPP,但没有提供 baseline 记录、精确 model-to-table mapping、optimizer、每次运行的 token 或 step 数、重采样策略、seed 或重复实验。

构造 Math-Cosmo 时,作者收集中级代数教材,用 Mathpix 对 PDF 做 OCR,去噪后得到 192 个样本、约 0.13B token。直接用原始 OCR 预训练几乎没有变化;随后使用 Qwen2.5-72B 将材料重写为包含背景知识、定义、公式和示例的教育文章,扩展为 760M token。附录公开了中文语料重写 prompt,但具体书目、page ID、OCR 修订、生成 decoding、质量检查与被拒输出均缺失。

SFT 蒸馏中,QwQ-32B 为 NaturalReasoning 问题重生成答案,答案不一致的实例被删除,形成 NaturalReasoning-QwQ。论文未定义答案规范化、比较多少份答案、一致性是相对原答案还是重复生成,也未说明 tie 与 malformed trace 如何处理。因此,agreement 只是 consistency filter,不是 correctness verifier。

弱点引导构造中,模型在 MATH 上的 failure 成为 seed。MathBERT embedding 与 FAISS 从其他数据集为每个 seed 检索 top 20 相似样本,得到超过 75,000 条、82M token。第二条路线让未指明的 LLM 根据 seed 或检索项生成相似样本,再回答同一问题;两次答案匹配即视为 valid。教材 QA 则按章节分 chunk,由 LLM 抽取问题与解答,再经未指明的 LLM quality filter 和 MinHash 去重。具体教材、model prompt、检索语料快照、threshold、保留数量与 license 均未发布。
