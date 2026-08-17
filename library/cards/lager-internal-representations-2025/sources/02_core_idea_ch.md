LAGER 在每个 Transformer 层读取候选分数 token 的 logit，线性聚合后仅在允许分数上 softmax，并以期望值输出细粒度分数。它可用等权重，也可在 1,000 条留出 HelpSteer 样本上以 CE+MAE 只训练 L+1 个层权重，主干保持冻结。关键依据是中上层含有与人工更一致的互补信息。
