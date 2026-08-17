披露账本包含四个彼此独立的层次。第一，OpenAI 只列出三类宽泛训练来源：公开互联网信息、通过第三方合作获取的信息，以及用户、human trainers 和 researchers 提供或生成的信息。报告还称采用严格的质量与风险过滤、减少个人信息，并使用 Moderation API 和 safety classifiers。来源清单、混合比例、数量、时间范围、记录和权利映射均未发布。

第二，报告点名若干后训练机制。GPT-5 推理变体通过强化学习来学习推理；实时 router 持续使用真实信号训练，包括用户切换模型、回答 preference rates 和 measured correctness。safe-completions 以 assistant output 的安全性为中心，并在安全政策约束下最大化 helpfulness。报告还把由 production-representative conversations 得到的 sycophancy score 描述为训练 reward signal。这些是有价值的契约级线索，但样例、graders、奖励函数、聚合、校准和优化制品均为 unknown。

第三，报告给出安全性、事实性、欺骗、red-team、chain-of-thought 和 Preparedness 评测。第四，它描述 routing、prompt-injection 防御、生物风险 system-level protections、account-level enforcement、API controls 和 Trusted Access Program 等部署缓解。除非报告明确把某项内容连接到训练，否则不能把评测条目或部署控制改称训练数据。
