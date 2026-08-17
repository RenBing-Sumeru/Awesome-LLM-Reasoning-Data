TGPO 于 2025 年 9 月 17 日以 arXiv:2509.14172 首次公开；本卡阅读的是 2025 年 9 月 19 日的 v2。同一标题与作者名单后来以 DOI 10.1109/ICASSP55912.2026.11464574 进入 ICASSP 2026 proceedings，并在官方日程中安排于 2026 年 5 月 5 日展示。因此，本卡按约定保留 2025 首发年份，同时把当前正式 venue 记为 ICASSP 2026。

论文处理的是离线 web-agent 学习中的监督分配问题。完整运行通常只有 success/failure 标签；若把终止标签赋给每个 action，失败轨迹中的好决策会被视为负例，成功轨迹中的差决策会被视为正例，而人工 step annotation 成本较高。稀疏终止反馈也很难直接抑制冗余或循环交互。

源 episode 由 user instruction、连续 web state 与 action 组成，直至成功或失败。state 表示为 screenshot 或 DOM tree，action 包括 click、type 和 scroll。论文报告的任务池包含来自 136 个真实网站的 300 个 Online-Mind2Web 任务，以及 50 个从 Taobao 自建的中文电商 C-WebShop 任务。同一任务的多次执行构成 TGPO 输入，但执行次数、generator policy、保留 episode 数量和序列化 row schema 均未披露。

TGPO 属于 `environment_agent_trajectory_data`，因为其可训练对象保留 instruction、environment state、action、transition、terminal outcome 和派生的 state-transition tree；environment 是反馈契约的一部分，而不是展示层。论文不是通用 web trajectory 发布，也没有提供可 replay 的浏览器环境：raw episode、merged tree、任务清单、environment snapshot 与 terminal-check 实现均不可用。

官方论文与 venue 记录、完整 v2 方法、公式、模型、任务数量和作者报告结果，足以支持对机制与风险进行 L4 正文深度的筛选；它们不支持升级 accepted metadata 的 `L3_summary_ready` 等级，也不支持声称数据可复用。代码、数据、模型 checkpoint、项目资产、环境包和许可证均未核验。
