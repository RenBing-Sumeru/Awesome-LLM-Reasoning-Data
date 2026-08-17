规范论文来源是 **Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage** 的 32 页 proceedings 版本；论文发表于 ICLR 2025，并列入官方 Spotlight 日程。本卡还核查了 arXiv:2412.15606 v2、作者项目页、代码、数据集与模型发布。这些证据确认了引用和公开 artifact 的存在，但不等于数据许可、上游权利或可复现性已经得到认证。

该工作的工程问题是如何构造足够多的多模态、多工具轨迹来训练 VLM controller。以 prompt 驱动的 agent 依赖固定 demonstration，而论文所述既有 VLM-agent 数据多集中于只需一两个工具的简单任务。因此，论文生成与文件匹配的 query，让 agent 与工具交互，筛选所得轨迹，再以保留的 thought-and-code 序列监督微调 controller（论文第 1、3 节）。

论文层面的一条 MM-Traj 数据是 `{F_opt, Q, T, C, O, A}`：可选文件、查询、逐步 thought、可执行 Python 调用、observation 和最终答案。固定版本的 HF 行采用更窄的序列化，只含 `id`、异构 `image`、字符串 `answer` 与 `conversations`。这一区别很重要，因为 verifier 决策、拒绝原因、来源 ID、文件 hash 和大部分构造 provenance 都没有进入发布行。

本工作属于 **Data Construction and Open Release Recipes**，因为其主要可复用贡献是从 seed prompt 与 93K 图像-caption 池出发，经文件生成、ReAct rollout、可执行代码门槛、两级 LLM judge，最后导出 SFT 数据的完整路径。它不是 programmatically verified outcome release：执行只说明代码能够运行，语义正确性仍由 GPT-4o-mini 判断；它也没有提供 preference pair、process label、训练得到的 reward model 或 RLVR 数据。

本卡达到 L4，是因为论文、附录 prompt、官方仓库、固定版本发布内容、计数、许可和具体失败面都已完成双语核查。复用边界仍然保守：MM-Traj 可作为构造与审计案例，但许可声明冲突、上游权利和计数未对齐、viewer schema 失败、缺少拒绝样本和 judge output，以及 sandbox 与污染控制未披露，都会阻断直接训练复用。
