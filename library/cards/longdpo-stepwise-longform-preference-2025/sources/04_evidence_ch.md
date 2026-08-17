在 LongBench-Write-en 上，采用 LongDPO 的 LongWriter-Llama 将平均长度分数从 83.12 提升到 87.38，将质量分数从 85.10 提升到 88.28；其普通 DPO 对应项达到 85.55 和 85.66。对于超过 4,000 词的输出，报告的长度分数从 80.80 上升到 88.25。在 LongGenBench 上，Llama 在 32K 的完成率采用 LongDPO 为 68.35，普通 DPO 为 65.24；Qwen 模型分别为 84.95 和 82.23。

通用任务比较没有显示部分普通 DPO 结果中的同等退化。对 LongWriter-Llama，LongDPO 报告 TruthfulQA 为 40.76、MMLU 为 58.78、GSM8K 为 61.30，均高于列出的基础模型和 DPO 变体。批评消融在报告的平均值上偏向外部批评而非自我批评，记忆池实验也把 LLM-AggreFact 平均分从无记忆的 72.30 提升到有记忆的 73.67。人工评判者同样在多样性、一致性和信息性上更偏好 LongDPO 输出。
