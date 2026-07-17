对于同源模型引导，作者归一化 LLaMA-2-7B-base-4K 和其 64K 同源模型在 LongAlign 上的回答困惑度，再取二者差异。对于上下文感知测量，64K 模型计算等长输入段的回答条件注意力；段的重要性来自只保留该段时生成参考回答的困惑度。归一化重要性与注意力向量的余弦相似度形成上下文感知分数。两项分数都在全池上归一化后加权。

主池是 LongAlign，包含 10K 条长样本，由九个来源的文档用 Claude 2.1 合成；最终训练混入 ShareGPT 短指令以保留普通助手行为。论文选择前 10%、30% 或 50% 长记录，对 LLaMA-2-7B-base-64K 进行监督微调，并额外分析 13B、ChatGLM3 和 LLaMA3。它在 LongBench、LongBench-Chat 和 MT-Bench 上与完整 LongAlign、原始困惑度、CaR 和 Cherry Selection 比较。作者链接了官方代码和所选长数据。
