主要来源包括 ASE 2025 Research Papers 会议记录、DOI 10.1109/ASE63991.2025.00234，以及日期为 2025-10-08 的 arXiv:2506.18824 v2。论文关注软件工程 agent 如何形成补丁、单次运行为何成功或失败，而不是把最终 resolved rate 当成对 agent 行为的完整解释。官方 GitHub 仓库公开了可检查的解析轨迹和标注。

具体缺口在于缺少统一分析方法：RepairAgent、AutoCodeRover V1 和 OpenHands CodeAct 的日志、工具接口与停止方式不同，内部决策过程难以直接比较。研究把三者映射为统一 episode 表示 T=[(t1,a1,r1),...,(tn,an,rn)]：thought 是自然语言推理，action 是工具调用或外部操作，result 是返回的 observation；随后比较成功与失败运行的结构、动作序列和语义一致性。

分析样本包含 120 个 episode、2,822 次迭代：RepairAgent 在 Defects4J 上 40 条，AutoCodeRover V1 在 SWE-bench Lite 上 40 条，OpenHands CodeAct 在 SWE-bench Lite 上 40 条；每个 agent 约保留 10 条成功 episode。公开材料分散在解析后的 thought/action/result 文本视图与 CSV 中，包含 instance ID、迭代/token 计数、resolved 状态、八类 action 和五类相邻组件关系；它不是一张标准化、可直接重放的记录表。

该论文属于 environment_agent_trajectory_data，因为核心对象是 agent episode，反馈来自工具、benchmark environment 与终止成功判据。它不是新 benchmark、agent-training 方法、reward model，也不能用于三种系统的因果性能比较。证据支持的用途仅为 evaluation 与 failure audit；论文没有训练 policy，也没有证明这些轨迹适合直接训练复用。

现有来源足以把数据对象、构造流程、标签和审计风险写到 L4 正文深度，但 accepted metadata 仍保留 L3_summary_ready。这一区分很重要：仓库真实且可检查，但精确 replay、不可变版本、逐记录 lineage、数据权利，以及 RepairAgent 清单不一致问题仍未解决。
