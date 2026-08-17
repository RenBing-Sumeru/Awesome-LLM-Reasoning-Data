该比较是观察性的，而且三组条件异构。RepairAgent、AutoCodeRover 与 OpenHands 在架构、backbone model、任务集、工具、terminal predicate 和迭代预算上都不同。每个 agent 只抽样 40 条运行，可能遗漏罕见行为；与成功相关的 motif 也不能建立因果关系。论文只明确 RepairAgent 使用 GPT-3.5；AutoCodeRover/OpenHands 的精确 backbone 与解码设置为 unknown。

解析与选择可能扭曲数据对象。AutoCodeRover 从半结构化日志中启发式解析；已知工具自动映射，其余 action 人工检查，无法归类的 8.3% action 被移出后续动作分析。论文没有披露每个 agent 抽取 40 条运行所用的随机种子、sampling frame 与 selection script，因此其他研究者无法从原始评测中重建同一批样本。

人工标注仍有 reliability 风险。约 14,000 个相邻 pair 经第一作者五个月标注，再由双方讨论并进行 partial agreement checks。论文承认主观性，但没有提供数值一致性、完整 double-coding 比例、adjudication log 或版本化指南。错误的 coherence/misalignment 标签可能改变关于 agent 如何利用反馈的结论。

官方发布存在明确的跨文件不一致：rq1/repairagent_iterations.csv 与 README/action-annotation 列表都包含 10 条成功、30 条失败 RepairAgent 记录，但 30 条失败 instance 名称并不一致。仓库没有解释每张论文图表使用了哪个清单。这是 lineage blocker，不是表面命名问题。

replay 与版本固定仍不完整。已检查的 repository main 在 2026-01-23 指向 commit 358870ec56aa38e9f221fd59c7078eb79b405cdf，其中包含 arXiv v2 之后新增数据的变更；未验证到 GitHub release 或不可变 tag。公开内容包括解析文本与 CSV，但没有固定 container、dependency、source-repository revision、agent/tool 版本、reset semantics、checksum 或 raw-log replay manifest。parser 命令依赖外部 raw input，README 引用的 stats 目录也未出现在已验证根目录中。

权利与污染问题同样阻止训练复用。仓库根目录有 MIT License，但 benchmark issue text、source code、patch、生成 thought 与 tool output 的独立条款未说明。论文没有对公开 SWE-bench Lite 与 Defects4J 任务进行 decontamination 或模型暴露审计。raw terminal output、final patch、failed/invalid action 与被丢弃材料是否完整均为 unknown。因此只支持 evaluation/audit，不支持 SFT、process supervision、reward modeling、RLVR 或 agent training。
