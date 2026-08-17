对于 Data Construction and Open Release Recipes track，R-Diverse 提供了一套跨轮多样性审计 recipe，而不只是在当前 batch 内去重。它把持久记忆放在三个构造位置：感知历史的 Challenger penalty、多样性测量的检索表面，以及 Solver training 的 replay 来源。该工作也说明，新颖性表示与正确性验证必须分开审计。

可审计实现应保留每个问题、全部 Solver rollout、提取和规范化后的答案、等价组、consistency、伪标签来源、canonical code、canonicalizer 与 embedding revision、最大和平均历史相似度、阈值判定、记忆插入/纠正/删除事件、replay provenance、各项 reward、random seed、policy checkpoint 与评估结果。被拒、异常和纠正过的记录也应可见，而不是被静默删除。

构建者可把该论文用作跨迭代去重、curriculum replay 或数据选择消融的 baseline。用于训练前，应加入独立 correctness check；以人工、符号或可执行判断校准 SAM；版本化 memory snapshot；限制或索引检索成本；执行 contamination 检查与多随机种子实验；并把 benchmark outcome 与训练记录标签分开保存。

当前复用边界是阅读 recipe 和独立重实现，而不是直接复用 dataset。官方没有提供可执行 pipeline 或生成数据流，仓库中的未来 release plan 也不能视为已经存在的 artifact。
