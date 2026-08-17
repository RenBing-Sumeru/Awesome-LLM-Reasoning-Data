论文比较了三类过程标签来源：Monte Carlo completion estimates、LLM-as-a-judge 和人工标注。其发布的 Qwen2.5-Math PRMs 使用 consensus filter：只有当 MC estimation 与 Qwen2.5-72B-Instruct critic 对错误推理步骤位置一致时，记录才被保留。

已披露的数据对象是带 golden final answer 的数学问题及其生成的、按步骤分隔的 response。反馈对象将每个步骤的 8 次 continuation outcomes、critic 的逐步审查和保留的 consensus label 结合起来。发布的 PRM 随后为每个步骤输出 scalar score，而不是生成答案。
