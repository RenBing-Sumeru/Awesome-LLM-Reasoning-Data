GitTaskBench 所检验的并不只是代码智能体能否生成 patch 或回答代码仓库 issue，而是它能否理解陌生仓库、搭建运行环境、编写或修改代码、实际执行，并交付可由程序检查的任务特定产物。正式出版记录是 2026 年 AAAI-26 论文。Atlas 的稳定 ID 仍为 `gittaskbench-2025`，因为该工作于 2025 年以 arXiv:2508.18993 首次公开；canonical metadata 中的年份和 venue 则以正式 AAAI 出版记录为准。

基准包含 54 个任务，对应 18 个 GitHub 代码仓库，覆盖 7 个应用领域和 24 个子领域。输出不局限于 patch，也可以是文件、文本或视觉产物。一个已发布任务把自然语言描述和 prompt 与代码仓库、工作子目录、输入文件、预期输出位置、配置、可选 ground truth 以及任务特定 test script 绑定。因此，其评测对象是“受环境约束的任务 + 终态检查器”，而不是单纯的 instruction/answer 对。（AAAI 论文第 2–4 页；arXiv Appendix A）

它在本 Atlas 中的边界尤其重要。GitTaskBench 属于 `environment_agent_trajectory_data`，因为代码仓库状态、依赖安装、执行、输出交付和 terminal predicate 共同决定 episode 结果。不过，两个官方发布都不是规范化轨迹语料库：被评测智能体必然产生交互，扩展版也讨论了部分 OpenHands events 和失败案例，但已确认的 artifact 没有发布基准运行的标准化逐步 action/observation。Card 因而把它定位为评测 harness 和任务发布，并将 `training_use` 严格限制为 evaluation。

L4 正文的证据边界同样明确。正式论文、arXiv 附录、项目页、固定 GitHub commit、固定 Hugging Face revision、代表性任务/配置/grader 文件及发布树计数，足以支持对数据对象和反馈契约的细致描述；但它们不足以证明完整 replay。上游代码仓库 commit、容器 digest、run manifest、完整 rollout 保留策略、基准整体许可和 contamination 控制仍为 unknown。收录理由是这些缺失项本身就是环境中介推理评测的核心审计问题，而不是因为论文分数能够证明任务或 grader 质量。
