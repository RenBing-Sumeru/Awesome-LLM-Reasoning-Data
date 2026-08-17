核心贡献是把实际生物科研操作转成可审计的专家评测题，而不是只收集知识问答。机制上，它混合专家手写题和程序生成题，并公开约 80% 数据、保留约 20% private test subset 用于监控训练污染。

单条数据对象包含题目、类别/子任务元数据、候选项、官方答案，有些任务还包含长文本、表格、图、实验 protocol、DNA 或蛋白序列。反馈契约是选项级评分：模型输出选项，官方答案和评测设置决定 accuracy/precision。

最近的对比对象是通用科学 QA、GPQA 式专家题和生物医学 benchmark。LAB-Bench 的新边界在于把 protocol、数据库记录、图表和序列操作这些科研 workflow 对象纳入评测。方向标签是 domain-expert evaluation surface with contamination-aware release。
