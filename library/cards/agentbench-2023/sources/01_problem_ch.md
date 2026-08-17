AgentBench 要回答的是：当任务不再是一次性问答，而需要多轮行动、工具/API 调用和环境反馈时，大语言模型作为 agent 的能力边界在哪里。一手来源是 arXiv:2308.03688 的论文《AgentBench: Evaluating LLMs as Agents》（后为 ICLR 2024）和 THUDM 官方 GitHub 仓库。它的评测对象是一条环境 episode：任务目标或用户指令、可用动作/工具、模型动作、环境返回，以及环境给出的成功、失败或分数。

它的价值在于把反馈契约放到环境层：每个任务族有自己的终止条件和评分规则。复用前必须固定仓库版本、任务 split、agent scaffold、模型/API 访问方式、重试次数和预算，否则总分不可直接比较。
