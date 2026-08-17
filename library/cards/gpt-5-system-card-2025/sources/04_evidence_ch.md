[官方 GPT-5 System Card](https://deploymentsafety.openai.com/gpt-5) 支持首发架构、数据来源类别、过滤、强化学习推理、router signals、safe-completions、评测和保障措施等陈述。其中 Model Data and Training 部分才是训练披露证据；后续大量评测章节不能替代缺失的训练记录。

系统卡报告了若干具体评测结果。在启用浏览、代表生产对话的事实性 prompts 上，LLM grader 与人类对事实性的判断一致率为 75%；相较 GPT-4o 和 OpenAI o3，gpt-5-main 与 gpt-5-thinking 含至少一项重大事实错误的回答分别减少 44% 和 78%。在无网页访问的 SimpleQA 上，gpt-5-thinking 与 OpenAI o3 的准确率分别为 0.55 和 0.54，hallucination rates 分别为 0.40 和 0.46。sycophancy 离线分数为 GPT-4o 0.145、gpt-5-main 0.052、gpt-5-thinking 0.040；gpt-5-main 的初步在线 prevalence 相较 GPT-4o 在免费用户和付费用户中分别下降 69% 与 75%。这些结果刻画的是被评估行为，不是训练数据质量或可复现性的证明。

报告也记录了反例和范围限制。gpt-5-main 在部分 disallowed-content 类别上相较 GPT-4o 退步，其中 hate/threatening 和 sexual/exploitative 的退步具有统计显著性。在线前代模型的对比值可能不同于其首发值。常规安全评测没有在 gpt-5-thinking-pro 上重新运行；尽管 pro 使用并行测试时计算，报告仍把 gpt-5-thinking 结果当作代理。

OpenAI 出于谨慎把 gpt-5-thinking 按 Biological and Chemical 领域的 High capability 处理并启用相应保障，同时明确称尚无达到该阈值的决定性证据。这是由能力与保障评估支持的风险管理决定，不是已披露的训练数据标签。
