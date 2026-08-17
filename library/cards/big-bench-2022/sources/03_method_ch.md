1. 输入：仓库中的任务定义、样本、prompt、target 或选项、任务元数据和模型接口。
2. 流程：加载任务，按 harness 构造 prompt，收集模型预测或概率，应用任务 scorer，再聚合任务级和 suite 级指标。
3. 输出：逐样本模型输出、任务分数、归一化/聚合统计，以及跨模型族 scaling 分析。
4. 验收者：每个任务自己的官方 scoring function 或答案键判定成功；没有覆盖全部任务的统一 judge。
5. 复现边界：必须固定仓库 commit、任务子集、prompt 模板、few-shot 政策、模型/API 版本、解码设置、scorer 实现和污染检查。
