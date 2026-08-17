HotpotQA 可作为证据锚定 QA 的数据 schema：question、answer、supporting article title、supporting sentence ID、distractor context、split 和 evaluator 输出。它适合测试检索、阅读、证据选择，以及答案-证据联合评分。

做 atlas 归档时要保留样本用途：监督训练、检索训练、rerank 或最终评测。相同的 supporting-fact 标签在不同用途下审计含义不同。
