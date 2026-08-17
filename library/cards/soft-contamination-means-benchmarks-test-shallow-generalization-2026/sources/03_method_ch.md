1. 选择开放数据设置：使用 Olmo3-7B 以检查语料暴露，并选 MBPP、CodeForces、MuSR、ZebraLogic。

2. 检索候选重合：以 llama-embed-nemotron-8b 嵌入 Dolma3/Dolmino 的分层 1% 样本及全部 Dolci SFT、DPO、RL 数据，按 cosine similarity 排序。

3. 标注重复：对最高或 top-0.1% 抽样配对人工或用 Gemini 标为精确、等价、子集、超集、相关或无关；相似度只是召回信号，不是接受 verifier。

4. 构造受控重复：生成保任务的改写、替代代码或改造叙事/逻辑格；MBPP 代码经测试验证。以 LoRA 微调，并比较见过题、同基准未见题与相关基准。

5. 测现实剂量：在 10k 干净 MuSR SFT 集中用 500 条语义重复替换 5%。复现需固定语料快照、嵌入模型、标注提示、生成器、LoRA 和基准版本；闭源语料暴露未知。
