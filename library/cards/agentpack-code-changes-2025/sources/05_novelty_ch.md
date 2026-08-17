已有基线是挖掘人类 commit、pull request 或合成 code-instruction 数据。AgentPack 把来源改成 coding agents 部署后不久，在公开 GitHub 活动中出现的人机协作代码变更。方向信号是：真实 agent 使用痕迹可以成为代码编辑监督，但前提是归因、来源和人类接受边界可审计。

质量信号包括系统化 GH Archive 流程、明确 agent 归因规则、node_modules 过滤、大规模、多语言代码覆盖、任务类型分析、Hugging Face 上的 Apache-2.0 数据集 license，以及若干模型/benchmark 对上的微调提升。不是新的部分是代码编辑目标和用 commit diff 做监督。复用必须检查访问条件、源仓库 license 兼容性、精确快照日期、PII/secret 风险、重复代码、归因错误，以及下游 benchmark 是否与 mined repositories 重叠。
