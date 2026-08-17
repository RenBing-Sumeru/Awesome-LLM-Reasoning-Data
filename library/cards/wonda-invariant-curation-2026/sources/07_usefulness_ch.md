对指定的 Data Construction and Open Release Recipes track，WONDA 是把机器 proof artifact 升级为可审计教学目标的具体蓝图。构建者可以复用“来源 artifact、会改变语义的 proposal、形式化接受、model-ready 序列化”四层分离。最关键的可迁移模式，是分别存储归纳正确性、充分性和运行时效用，而不是压缩成一个“verified”标志。

可信复现应读取 raw Hub 表，保留来源 ID 与所有候选，执行确定性 normalization，固定 Kimi 和 UAutomizer 版本，写入两类验证报告及时间，按来源程序分组划分，并发布每个 SFT cache 的精确 grade/长度过滤条件。还应发布 grade-0/1 failure、timeout/UNKNOWN 原因、语义重复分析和逐来源 license manifest。公开代码已包含 preprocessing、语法校验、UAutomizer 调用、SFT 序列化、训练和多次评测模块，因此它是可执行起点，而非只有论文描述的配方。

质量 grade 还能支持论文 SFT 之外的研究：grade-2 与 grade-3 目标消融、cost-aware 候选分配、跨 verifier 迁移、根据不变量语法预测 verifier speed，以及把 induction 与 sufficiency 分离的 curriculum。grade-1 和被拒候选可能适合做 contrastive 或诊断数据，但论文没有验证其用于 preference learning、reward modeling 或 RLVR；这些用途需要新实验与明确的负标签契约。

复用等级：在固定代码/数据/模型版本并确认上游适用许可后，已核验官方发布可用于受控训练与 audit 实验；它尚不是可直接投入的 contamination-clean corpus。evaluation split 只能在保留 UAutomizer/硬件边界的前提下复用，报告 benchmark 分数应被视为配方证据，而不能证明每一条发布记录都是高质量数据。
