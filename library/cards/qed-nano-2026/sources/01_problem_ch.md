Olympiad 级自然语言定理证明同时具有长程生成、稀疏 outcome feedback 与高昂评估成本。能力最强的系统往往依赖未披露的模型、数据混合、judge 与 inference scaffold。QED-Nano 提出一个更窄、也更便于复核的问题：能否通过后训练让一个开放的 4B 模型撰写困难证明，并把额外推理显式组织为训练时 rollout 与测试时迭代，而不是隐藏在专有流程中？

对推理数据图谱而言，关键并不是模型榜单分数，而是四类对象之间的关系：用于 SFT 的证明 demonstrations、带 rollout 分数总体统计的题目语料、由 learned judge 打分的在线 RL 样本，以及 Reasoning Cache 使用的多轮文本状态。这些对象的生成器、预算、保留规则和复用边界不同。若把它们统称为一个“proof dataset”，就会掩盖反馈契约并夸大发布范围。

FineProofs-RL 使这一区分变得具体。其 5,227 条 train 记录包含 Olympiad 风格题目文本、粗粒度来源标签、题目级 rubric、scalar score 与 normalized reward 数组，以及汇总统计；但不包含用于估计难度的 Qwen3 证明尝试、用于 GRPO 的在线 QED-Nano policy rollouts，也不包含 GPT-OSS-20B 针对每份证明的评语。因此，该发布是题目、rubric 与分数总体数据，而不是原始证明轨迹语料。

本工作归入 **Rollout, Search, and Test-Time Trace Data**，因为 rollout 预算和筛选规则同时塑造训练 curriculum 与 inference scaffold。离线难度估计名义上每题采样 128 次；在线 RL 每题采样 16 次并以 64 题组成 batch；Reasoning Cache 在训练时执行三轮总结与改进；部分评估 scaffold 每题使用约两百万 token。这些数字不能相互替代，benchmark 表现也不能证明任何单一数据对象的质量或完整性。
