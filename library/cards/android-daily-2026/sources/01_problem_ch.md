本卡的主要来源是 arXiv:2605.27761 的官方条目与 v1 全文；该版本提交于 2026 年 5 月 26 日，官方记录将其标为 arXiv preprint。虽然 TeX 写有 ACM Multimedia 2026，但尚未核实对应的正式 proceedings 或 DOI 页面。提交的源码只包含主文，没有文中另行提及的 appendix，因此 appendix 独有细节不可得。

闭源移动应用不提供 AndroidWorld 或 OSWorld 式评估器可查询的特权内部状态。AndroidDaily 针对这一评估缺口：agent 即使看似完成交易、预订、跨应用流程或内容生成任务，正确性仍可能取决于输出质量、多项义务以及必须避免的行为。该基准因而把每项任务的成功条件外显为 operational obligations、output-quality criteria 与 negative constraints，再对可观察 episode 而非隐藏应用状态作出判断（论文第 1 节与第 3.2 节）。

2026 版基准包含 94 个高频闭源 Android 应用上的 350 项自然语言任务。一个评测对象由任务指令、三层 guideline 和带 session ID 的轨迹组成；轨迹包含截图/accessibility 观测与经 ADB 执行的动作。GRADE 再把 episode 转成步骤证据、结构化 evidence bundle、逐层检查、诊断信号和最终 Boolean verdict。它属于 `environment_agent_trajectory_data`，因为环境状态、动作、观测、反馈和 terminal predicate 不可分离（论文第 3.1-3.3 节；Algorithm 1）。

本卡正文已达到可筛选、可审计的 L4 深度，但 canonical curation level 仍保留 L3：论文声称已发布任务定义、guideline 和评估代码，却没有给出可核实 URL、许可或版本 pin，并明确不发布原始轨迹（论文第 5 节）。StepFun 官方 235-task AndroidDaily 数据集关联 2025 年 Step-GUI/GELab 论文，只能作为前身谱系，不能替代本文的 350-task/94-app/GRADE artifact。
