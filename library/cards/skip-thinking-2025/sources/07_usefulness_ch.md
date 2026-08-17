对 Rollout, Search, and Test-Time Trace Data 这一分类，Skip-Thinking 更适合作为训练时轨迹变换案例，而非测试时搜索语料。它说明一条短 rationale 背后存在隐藏 lineage：可见输出形成之前经历了多个候选边界和删除试验。在比较 long-to-short distillation 配方，或研究压缩究竟删除冗余、不确定性还是必要依赖时，这些 lineage 记录不可缺少。

可复用 schema 应保存任务条目与 split、教师 prompt 与版本、原始 rationale 与答案、初始及修订后的 chunk 边界、阶段标记、学生 checkpoint、每个候选的 loss、阈值决策、移除顺序、每次预测答案与正确性检查、保留/跳过标签、最终压缩轨迹及下游模型设置。训练时构造信号必须与评测准确率分开。缺少这些记录时，该论文主要是配方与审计清单，而不是开放数据源。
