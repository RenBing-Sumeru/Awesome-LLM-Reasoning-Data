主要证据是 2026-07-06 修订的 arXiv:2606.09426v3，以及官方项目页、组织所有的代码仓库、Hugging Face 发布和轨迹画廊；未核实到正式会议 venue。WeaveBench 针对一个具体的 computer-use 评测缺口：许多桌面基准允许一种交互通道替代另一种通道，或可通过短程、单应用路径完成，而真实工作常要求把 GUI-only 应用、shell/代码工具和多个应用状态串成相互依赖的长链。

基准包含 114 个英文任务，覆盖 8 个工作领域和 23 个子类。任务必须同时满足三个条件：P1“通道不可替代”要求至少一个 GUI atom 和一个 CLI atom 不能由另一通道代替；P2 要求经历多个交错的 GUI/CLI 阶段，而不是短序列；P3 要求多个应用之间存在相互关联的状态。作者报告 114 个任务都至少有一个 GUI atom 和一个 CLI atom，103 个含 non-anchor atom，50 个在两侧各至少有两个 atom。这些是作者的构造审计，不是独立正确性检查（论文第 3.1 节；附录 A.1-A.2，表 A2）。

可复用的评测对象由相互连接的两层组成。任务包包含指令、初始环境、seed data、必需资产、预期交付物、专家参考轨迹和隐藏 verification anchors。被评测的 episode 还加入冻结的 Ubuntu VM 状态、截图与工具输出、GUI 及 CLI/文件/代码/浏览器动作、完整 `chat.jsonl`、暂存交付物、日志、judge 证据和终局标量分数。论文报告每个任务最佳 live rollout 的工具调用中位数为 76，114 个任务中有 113 个的最佳 rollout 超过 20 次调用；这些数字描述观察到的 rollout，并非任务规范的最低要求（论文第 3.2-3.4 节；附录 A.2 与 B）。

该对象属于 `environment_agent_trajectory_data`，因为状态、观察、动作、环境响应、重置与终局判断被联合定义；它也属于 `benchmarks_evaluation_surfaces`，因为发布把完整 episode 转化为环境检查与模型判断混合的反馈表面。它并未建立训练语料：论文只报告 evaluation，公开的最佳轨迹画廊也没有说明一个覆盖成功、部分成功、失败和 hack-flagged episode 的完整不可变集合。正文达到 L4 深度，但 canonical `curation_level` 仍保留已接受的 `L3_summary_ready`，等待人工 Review 和版本冲突协调。
