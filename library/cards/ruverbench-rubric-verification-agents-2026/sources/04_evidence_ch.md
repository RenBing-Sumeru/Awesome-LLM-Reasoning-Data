实验表明，前沿 LLM Judge 在 Agentic rubric verification 上仍含大量噪声；较弱模型对提示变化尤其敏感。将多个 criterion 合并能降低成本，却形成明显 accuracy–efficiency 权衡；多数投票可改善稳定性，但很快出现边际收益递减。结果支持在训练 Agent 前单独验证 Judge，而不能把高总体分视为可靠逐项标签。
