DEER 是包含三个操作的无训练控制器。Reasoning transition monitor 通过 `Wait`、`Alternatively` 等语言动作转折点，或推理步骤边界处的高熵，标记候选退出位置。Answer inducer 临时追加结束思考/最终答案提示，让同一个模型生成 boxed 试答。Confidence evaluator 取每个试答 token 的最大预测概率，并用几何平均聚合多 token 答案。若置信度超过 λ，控制器终止思考；否则丢弃试答分支，从保存的前缀继续推理。

DEER-PRo 使用多种 prompt 进行多次答案诱导，再从平均置信度中减去基于 Mean Absolute Deviation 的波动惩罚，以降低 prompt 噪声导致的错误早退。论文还描述 Branch-Parallel Decoding：利用特殊 causal mask，把试答分支与继续推理线性化并行生成，再通过动态 KV-cache 管理按置信度裁剪分支。这些组件选择的是推理分支；它们都不提供独立正确性验证。
