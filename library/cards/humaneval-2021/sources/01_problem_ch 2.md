# 问题：这篇论文想回答什么问题？

- 官方来源：https://arxiv.org/abs/2107.03374
- 会议/日期：arXiv / OpenAI。
- 具体问题：HumanEval 用小而精的函数合成任务和单元测试定义代码生成能力，是代码 benchmark 的基础坐标。
- 数据量：164 道手写 Python 函数补全题。
- 决策边界：这里收录的是 benchmark / evaluation surface，而不是默认把题目或答案当训练数据。若论文同时讨论训练或 verifier，也需要把评测用途和训练用途分开。
- 数据对象 / 评测面：一条样本包含函数签名、docstring prompt、参考实现和隐藏/公开测试。
- L4 收录说明：这张卡补齐了基础 benchmark 坐标、来源链接、机构、中文头和中英文 section，可进入人工 review；下一步重点核验 split、license 和 scorer 版本。
