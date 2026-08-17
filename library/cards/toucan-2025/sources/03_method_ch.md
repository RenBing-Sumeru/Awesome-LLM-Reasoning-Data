核心构造是一条五阶段流水线。

1. **MCP 接入。**从 GitHub 与 Smithery 抓取约 2,800 个 server specification，保留 871 个无需凭据且支持 streamable HTTP 的服务，再测试抽样工具并留下 495 个可用服务，共暴露 2,000 多个工具。LLM 生成的领域标签用于组织服务，但不是经人工验证的 ontology。
2. **任务合成。**Mistral-Small、DevStral-Small、GPT-OSS、Kimi-K2 和 Qwen3-32B 在 single-server、multi-server 与 25 个手工选定 featured-server 策略下生成任务；论文实验最多使用三个目标工具。随后进行格式清理与 embedding 去重；公开代码默认 cosine-distance 阈值为 0.1，但历史生产值未确认。
3. **任务评审。**Kimi-K2 对工具选择难度、工具选择唯一性、问题质量、场景真实性、可验证性和稳定性给出带理由的 1–5 分。judge 选择依据包括 50 个样本的人类对照，报告 Pearson correlation 0.264；这是校准证据，而非标签准确性的证明。
4. **真实 rollout。**GPT-OSS-120B、Kimi-K2 与 Qwen3-32B 通过 Qwen-Agent 或 OpenAI Agents 调用远程 MCP endpoint。episode 保存原生 system/tool 声明、用户消息、assistant 工具调用、tool/function response 和最终答案。逐行模型/framework 配对、解码、seed、endpoint revision、重试与采集时间均未公开。
5. **轨迹评审与打包。**公开规则要求 agent 已初始化、普通样本发生工具调用、至少一个有意义工具响应、没有 assistant error marker、最终答案非空，并且 assistant 消息不含感叹号。若其他调用成功，部分工具失败可以保留。目标工具覆盖率和顺序通过 substring 工具名匹配计算；GPT-OSS-120B 对完整性与简洁性给 1–5 分。之后三种扩展分别构造零工具调用的 irrelevance 样本、保持相同目标工具的 persona/constraint 多样化样本，以及通过子问题或 follow-up 形成的 multi-turn 任务。

三个 full config 分别包含 518,516 条 Kimi-K2、457,130 条 OSS 和 551,613 条 Qwen3 episode，总计 **1,527,259**。SFT 选择要求问题质量为 5、场景真实性为 5、完整性至少 4、简洁性至少 4、目标工具覆盖率为 1.0，随后进行类别再平衡，得到 **119,287 行**：约 28.3K core、40K irrelevance、15.8K diversified 和 35.2K multi-turn。该 SFT config 是筛选子集，不是额外的唯一轨迹分区。

论文唯一展示的训练用途是对 Qwen2.5-7B-Instruct、Qwen2.5-14B-Instruct 与 Qwen2.5-32B-Instruct 做 supervised fine-tuning，使用 Hermes tool-call template、2e-5 学习率、两轮训练、effective batch size 64、AdamW、DeepSpeed ZeRO-3 和 32,768 最大序列长度。公开 runner 默认 temperature 1.0、top-p 1.0、32,768 最大 token、单条 90 秒 timeout，OpenAI-agent runner 默认十轮；但论文没有把这些默认值绑定到已发布语料。
