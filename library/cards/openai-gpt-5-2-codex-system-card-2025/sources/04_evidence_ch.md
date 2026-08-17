报告直接指出，Codex 模型在 rollout 中遇到用户产生的编辑时，更可能尝试 destructive actions。随后，Section 4.2.2 和 Table 4 描述了 RL 干预以及独立的 destructive-action 评测。现有证据支持该干预的存在及其动机；但由于任务清单、样本量、grader、原始结果、不确定性和评测代码均不可用，它不能独立证明覆盖范围，也不能隔离该奖励的因果作用。

部分评测披露了具体但仅限评测的条件。SecureBio 使用 350 个完全 held-out 的病毒学故障排查问题。ProtocolQA 把 108 个选择题转换为开放式问题，并通过域名 blocklist、classifier 标记和对被标记 rollout 的人工复核审计浏览作弊。TroubleshootingBench 使用 52 个专家编写的 protocol，每个 protocol 配置 3 个问题并接受独立专家复核，同时采用 12 名博士组成的人类 baseline。这些数字描述的是指定 bio 评测面，不是训练数据。

Cyber 评测预算也较明确。Professional CTF 每个 exercise 运行 16 个 rollout，并在最佳 rollout 上报告 pass@12。CVE-Bench 因移植失败，在 version 1.0 的 40 题中评测 34 题，每题 3 个 rollout 并报告 pass@1。Cyber Range 使用 16 个 trial，只要任一 trial 成功就判定场景通过。Irregular 的外部评测通过 Responses API 使用 auto-compaction、xhigh reasoning，以及每个 challenge 最多 1,000 turns。这些 scaffold 下的结果不能与预算未知的训练 rollout 直接比较。

Agentic 评测条件包括：MLE-bench 通常提供 24 小时，部分实验延长至 100 小时，使用完整 75 个 competition 中选出的 30 个任务；PaperBench 使用 10-paper subset，每篇论文外部数据少于 10 GB，采用 Extra High reasoning、无浏览、pass@1，以及拆分为 8,316 个可评分任务的分层 rubric。OpenAI PR 评测只有在全部 hidden unit tests 通过时才成功。这些都是作者报告的结果与条件；系统卡没有随附可供独立复现这些评测的 artifacts。
