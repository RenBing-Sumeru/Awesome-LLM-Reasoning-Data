AgentErrorTaxonomy 在 memory、reflection、planning、action 与 system 五个模块中定义 17 类错误。10 名标注者据此标记决策步，并识别最小根因集合，而不是穷举所有级联症状。AgentDebug 再做模块级分析、选择最早关键错误、生成可执行指导，并从该点重新执行，直至成功或达到尝试上限。

必须分开两类反馈契约：ALFWorld、WebShop 或 GAIA 提供环境终局结果；错误类型、因果重要性、证据片段和反馈质量依赖人工或 LLM 判断。Re-rollout 成功可检验指导的实用性，但不能反向证明每个诊断标签都正确。

