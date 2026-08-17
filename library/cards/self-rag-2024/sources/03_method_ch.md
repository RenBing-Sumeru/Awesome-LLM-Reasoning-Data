# 方法

1. **Step 1 - 构建 critic 监督。** Input（输入）：抽样的 instruction-output pair、四套 token 专用 rubric、few-shot 示范和 GPT-4。Operation（操作）：让 GPT-4 判断是否需要检索，以及文档/输出是否相关、有支持或有用；删除格式错误标签，每个方面收集 3,831 至 19,317 条样本。Output and transition（输出与转移）：带 Retrieve、ISREL、ISSUP、ISUSE 标签的样本用于训练 Llama2-7B critic。Check / stop rule（检查与停止规则）：标签必须使用预期类别名；人工抽查的一致率按方面为 80% 至 95%。
2. **Step 2 - 离线增强 generator 目标。** Input（输入）：145,619 个 instruction-output pair、训练好的 critic、Contriever-MS MARCO 和大规模文档库。Operation（操作）：逐输出片段判断是否需要检索；若需要，则取回最多十篇文档并预测相关性/支持度，最后追加终止效用 token。Output and transition（输出与转移）：源输出成为 `D_gen` 中交错文档和 reflection token 的目标。Check / stop rule（检查与停止规则）：优先选择被标为相关且完全或部分支持的文档；若无合格文档，则从其余结果中抽样并保留较弱标签。
3. **Step 3 - 训练 generator。** Input（输入）：Llama2-7B 或 13B、扩展词表和 `D_gen`。Operation（操作）：对任务文本与 reflection token 进行标准 next-token SFT，同时从 loss 中屏蔽取回文档片段。Output and transition（输出与转移）：单一 generator 学会任务完成、检索调用和自我批判，推理时不再需要独立 critic。Check / stop rule（检查与停止规则）：训练目标必须保持 token 与文档顺序，流程不含 PPO 或 RL 阶段。
4. **Step 4 - 推理时检索、批判并选择。** Input（输入）：prompt、先前生成片段、generator、retriever 以及 reflection-token 权重/阈值。Operation（操作）：归一化 Retrieve 概率超过阈值时触发检索，为每篇文档生成续写，再按生成似然与加权 ISREL/ISSUP/ISUSE 概率排序片段。Output and transition（输出与转移）：最佳片段扩展 beam，直到回答结束。Check / stop rule（检查与停止规则）：默认检索阈值为 0.2、使用前五篇文档和宽度为二的 beam；用户可设置硬 token 约束或调整权重以权衡事实性与流畅度。

**可复现性：**需要核验 ICLR/arXiv 论文、MIT 代码、15 万条 JSONL 发布、critic/generator 检查点和 Contriever 索引。复现时应固定全部来源版本、GPT-4 指令与示范、critic 检查点、分句方式、文档库、top-K、阈值、beam 宽度和 token 权重。GPT-4 模型快照与成本、语义去污染、retriever 语料许可账本和可复用 generator 验证划分均未完整披露。
