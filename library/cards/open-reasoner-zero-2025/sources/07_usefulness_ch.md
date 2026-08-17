在 **Data Construction & Open Release Recipes** 轨道中，ORZ 适合作为 base-model RLVR blueprint、critic 分析对象和发布披露基线。

1. **复现最小 PPO 契约。** 在改动组件前，固定审计代码 SHA、original 57k、base policy/critic checkpoint、prompt template、checker、64-way sampling、\(\gamma=\lambda=1\)、clipping、optimizer 设置以及有效为零的 KL/entropy 项。
2. **建立 trajectory ledger。** 对每个 prompt group 保存全部 64 条响应、token ID、停止原因、提取答案、verifier 输出、终局 reward、critic value、advantage、policy probability、训练步、checkpoint hash 与拒绝原因。
3. **审计 checker。** 按解析失败、缺失 box、等价形式、单位、区间、集合、矩阵、符号恒等式、多答案和畸形标签分层。比较论文式 raw matching、公开 normalization/equivalence 与独立 verifier。
4. **去重并保留权重。** 分配标准化 prompt hash 和上游记录 ID，同时报告按行加权与按唯一 prompt 加权的训练统计，避免 extended 文件中的 24,025 条重复静默改变 curriculum。
5. **评测前解决污染。** 隔离六条 MATH500 精确重合，重建实际 129k/annealing 行清单，并对所有 benchmark 增加语义检查。不能仅凭发布重叠推断 checkpoint 污染。
6. **审计 critic 行为。** 检验 value estimate 跟踪的是数学进展、格式、长度、重复还是 benchmark identity。重复前缀得到较低估值，本身不证明理解了推理步骤。
7. **发布失败与 curriculum 记录。** 公开 hard-mining 的 64-way 尝试、GRPO 崩溃轨迹、英语/中文消融标签、过滤行、日志和 checkpoint 映射，使失败成为可复用审计数据。
8. **补全来源与权利。** 添加逐行 source、source revision、转换、license、attribution、consent/privacy 和 duplicate group；区分 package 代码/模型许可与上游数据权利。

复用等级：强配方与实现参考；prompt 数据和 checkpoint 在完成去重、来源、许可与重叠审查后可有条件复用。它不是固定的论文运行 rollout corpus；若不重新生成并记录缺失在线对象，也不能直接支持过程监督或 reward-model replay。
