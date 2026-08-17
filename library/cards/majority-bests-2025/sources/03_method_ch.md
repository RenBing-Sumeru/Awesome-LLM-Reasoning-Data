
论文评测 MATH500、GSM8K、MMLU-Pro-Math、MMLU-Pro-Chem 和 CommonsenseQA 各 500 题切片。每题以温度 1 从 Qwen2.5-3B-Instruct、Llama-3.1-8B-Instruct 或 Gemma-2-9B-it 生成 512 个输出，再用 ArmoRM-Llama3-8B-v0.1 和 GRM-Llama3.2-3B reward model 评分。主表使用 N=128；对每个预算 N，从缓存池取 floor(512/N) 个互不重叠切片。论文比较固定 m=floor(sqrt(N)) 与自适应规则，后者考察 floor(q^j N)，q=0.75。官方 Git LFS 数据按 benchmark/generator 组织，记录包含 doc_id、完整 prompt、generation、generation_score、抽取答案和 GRM/ArmoRM/Skywork rewards；runner 按 doc_id 分组并可保存逐题决定。选择阶段只在 CPU 上运行，不训练 generator 或 reward model。

发布清单还列出一个 MATH500 GPT-4o-mini 候选池。它是额外缓存 artifact，并非上述三个主要开源 generator 设置之一，因此其来源和使用范围应单独记录。
