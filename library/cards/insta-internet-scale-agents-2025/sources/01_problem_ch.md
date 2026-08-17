规范记录是 2025 年 arXiv 预印本 *InSTA: Towards Internet-Scale Training For Agents*，最后修订于 2025 年 5 月 22 日。OpenReview 页面只写有“Submitted to ICLR 2026”，没有 acceptance、Poster、Spotlight 或 Oral 决定，因此本 Card 不把投稿状态写成会议发表。论文研究的问题是：如何让 web-agent 训练数据覆盖大量 live websites，而不是依赖人工只为少数熟悉站点编写任务与 demonstration。

InSTA 属于开放发布与数据构建 recipe，因为它给出了完整概念漏斗：从 Common Crawl 排名最高的 100 万个 host 出发，用 LLM 拒绝不安全或不适合的 domain 并提出任务，经一次 live Playwright exploration loop 生成更难且基于当前网页内容的任务，再运行 agent、评判 trajectory、筛选成功样本并微调 agent。其公开 data object 比该 pipeline 窄：v2 的 task row 只有 `domain` 与 `task`；v3 使用 `website`、`instruction`、`steps` 和 `criteria`。两者都不是公开 trajectory corpus。

论文内部的 episode 更丰富：current URL、由 HTML 压缩得到的 Markdown、raw HTML、screenshot、DOM metadata、模型 reasoning、解析后的 Playwright function call、task-proposer trace，以及带 success、efficiency、self-correction 分数的 LLM-judge rationale。反馈主要附着在完整 episode 上，并来自 learned terminal judge，而不是可执行的 programmatic answer key。

本工作对 Atlas 的价值在于揭示“可扩展生成”与“可审计发布”之间的边界。论文和项目描述了约 150K 次 live-site rollout、2.2M 张 screenshot、2.2M 条 action/reasoning trace 与 150K 条 judge trace，但当前官方 HF organization 只有 task datasets，没有公开 model。因此 recipe 可供重建与审计参考，论文声称的 paper-run trajectory corpus 却无法独立检查或复用。

本 L4 Card 对论文身份、仅投稿的 venue 状态、构建机制、精确任务数、代码与 task release、机构和已披露 safeguards 已有完整证据；trajectory/checkpoint 发布、failed rollout、judge rationale、immutable lineage、隐私、第三方权利、decontamination 与独立复现仍为 `partial`。
