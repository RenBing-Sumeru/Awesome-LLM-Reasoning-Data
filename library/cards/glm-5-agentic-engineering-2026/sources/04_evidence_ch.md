报告给出的 base-model 预算是 28.5T token，对应总参数 744B、激活参数 40B 的 MoE。已披露日程为：初始 27T token 语料，随后是 32K context / 1T token、128K / 500B、200K / 50B 的 mid-training。这些经过四舍五入的阶段数字说明训练规模，但不提供记录清单或精确来源比例。

软件工程 mid-training 池约含 1,000 万个 issue–PR 对，过滤后约为 160B unique tokens。Agentic training 方面，报告声称有跨数千代码库和九种语言的 10K+ RepoLaunch SWE 环境、数千 terminal 环境，以及从 2M+ 去重网页建立的 Web Knowledge Graph。Orchestrator 支持 1,000+ 并发 rollout 是系统容量，不是实际训练 rollout 数量。

报告分数必须连同 harness 条件阅读。表 7 在论文的 OpenHands 设置下报告 SWE-bench Verified 77.8、SWE-bench Multilingual 73.3；在指定 Terminus-2 配置下，verified Terminal-Bench 2 为 56.2 与 60.7。BrowseComp 依赖搜索工具 harness 与上下文管理策略；论文报告 keep-recent context folding 将结果从 55.3% 提升到 62.0%。MCP-Atlas 使用 500 个公开任务、10 分钟超时，并由 Gemini 3 Pro judging。这些均为报告方评测，不是独立复现。

推理限制也按 benchmark 变化：多数 reasoning 评测允许最多生成 131,072 token，HLE-with-tools 则使用 202,752-token 限制。SWE-bench、Terminal-Bench、HLE 等评测的温度与 agent harness 并不统一。这些设置都不能据此推导 RL 训练的 temperature、rollout count 或 token budget。

官方发布包括模型权重、开放的 `slime` 框架、部署配方和修正后的 Terminal-Bench 评测数据集；不包括 GLM-5 的 pretraining/SFT/RL 记录、生产任务服务、完整 reward/judge、TITO rollout log、loss mask 或不可变的源到 checkpoint 谱系。
