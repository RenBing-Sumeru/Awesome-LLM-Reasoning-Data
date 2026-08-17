TOUCAN 是一篇于 2025-10-01 提交的 arXiv 预印本。本卡使用的官方证据包括 arXiv v1、Agent Ark 官方仓库和 `Agent-Ark/Toucan-1.5M` 官方发布。论文处理一个具体的 agent 数据瓶颈：大规模工具使用语料常依赖模拟输出或狭窄 API，而在多样化真实服务上收集 episode 很难同时做到规模化、过滤与审计。

该工作归入 **Environment and Agent Trajectory Data**，因为它的可复用对象是交互 episode，而不只是 prompt-answer 对。一个 full-release 行包含 UUID 与 subset label、合成问题、可用/目标工具声明，以及序列化的多消息历史；历史保存 system/tool schema、用户轮次、assistant 工具调用及参数、远程 tool/function response 和最终 assistant response，此外还有任务/响应质量评审与 MCP 元数据。SFT 配置是缩减后的六列视图，不含评审和元数据列。

必须明确其判定边界。TOUCAN 记录真实 MCP 服务的响应，但没有发布规范化 environment state、state delta、标量 reward，也没有证明用户最终目标正确的通用任务谓词。其 mixed 反馈契约可以检查格式合规、工具使用行为、目标工具覆盖/顺序以及模型评审的合理性与完整性，却不能把每个保留 episode 都变成经验证的成功轨迹。

本卡已核对论文、附录、代码、发布 schema、计数、声明的许可证和主要过滤规则，因此达到双语筛选所需的信息深度；canonical metadata 仍保持 `L3_summary_ready`。高保证复用仍受发布版本绑定、逐行 lineage、精确回放、上游权利、PII 审计、去污染和拒绝样本核算等缺口限制。
