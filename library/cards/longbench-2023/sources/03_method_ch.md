1. 输入：英文/中文长文档或代码 context、任务 prompt、问题、答案键、类别标签和数据集元数据。
2. 流程：把来源数据集规范化成统一 JSON 风格 schema，为长上下文模型构造 prompt，在固定 context budget 下运行模型，再用该任务的指标评分。
3. 输出：各数据集分数、任务族平均分，以及 LongBench-E 这类高效评测子集。
4. 反馈契约：每个任务由官方指标决定成功；不存在覆盖所有任务的单一 verifier。
5. 复现字段：需要固定数据版本、split、语言、context 截断策略、prompt 模板、模型 context window、解码预算、metric 实现，以及使用全量集还是 LongBench-E。
