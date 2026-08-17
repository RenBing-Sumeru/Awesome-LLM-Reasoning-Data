BEARCUBS 是一个发表于 COLM 2025 的信息检索智能体基准，要求系统使用实时公开网页完成任务，覆盖视频、地图、游戏、虚拟游览、交互式数据库和多语言网站。其问题意识在于，传统搜索问答往往可由已索引文本解决，而计算机使用智能体还要感知渲染页面、操纵界面，并在不断变化的网站中取得证据。因此，这项基准评测的是系统能否完成困难的文本型与多模态网页任务，而不只是能否复述记忆中的事实。

论文中的 benchmark object 比可下载对象丰富。内部完整条目把问题与一个简短 gold answer、text-based 或 multimodal 类别、可行的人工浏览轨迹以及访问网站关联起来；一次评测运行还增加 agent answer、elapsed time、记录的 trajectory 与 answer-level outcome。相反，公开的 BearCubs_20250310.json.zip 只有 111 条 question-only 记录，不包含 gold answer、类别标签、URL、人工或 agent trajectory、模型输出、计时、结果、provenance 或 split manifest。

这一差异决定了本 Card 的边界。BEARCUBS 可归入 environment_agent_trajectory_data，作为 evaluation 与 audit surface，因为论文分析了交互路径、运行时间、来源质量和终止结果；但它不是已核验公开的 trajectory corpus、replay environment 或 training dataset。accepted metadata 仍是 partial 和 L3_summary_ready；这份双语 Card 只补充阅读深度，不提升 curation decision。
