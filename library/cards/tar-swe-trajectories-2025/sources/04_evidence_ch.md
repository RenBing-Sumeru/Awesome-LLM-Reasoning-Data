实证基础为 120 条轨迹、2,822 次 LLM interaction，平均分配给 RepairAgent、AutoCodeRover V1 和 OpenHands CodeAct。研究有意同时保留成功与失败：官方发布对每个 agent 各列出 10 条 resolved 和 30 条 unresolved instance。该规模支持对抽样日志进行描述性比较，但不足以代表所有软件工程 agent。

RQ1 报告的平均轨迹长度为 RepairAgent 34 次迭代、OpenHands 29 次、AutoCodeRover 6 次；按相同 agent 顺序，平均总 token 约为 220K、1.2M 和 23K。这些数字建立在不同 agent 架构、任务 substrate、模型身份和迭代预算上，不能单独识别架构或模型效应。

RQ2 中，成功轨迹更常组合 exploration、explanation、fix generation 与 testing；失败轨迹更常出现重复且不自适应的循环，以及生成修复后不测试等 validation anti-pattern。作者先做八类 action 编码和 action 4-gram，再得出这些观察；无法分类的 8.3% action 已被排除。该关联可用于诊断，但不能证明某个 motif 导致成功或失败。

RQ3 报告语义 misalignment 总体少见，但在部分失败轨迹中更常出现；Table II 给出了按 agent 和 outcome 划分的比例。五类关系用于检查 thought 是否推动 action、连续 thought/action 是否有进展，以及 result 是否被识别或改变后续行为。这些都是人工编码解释；论文没有完整的数值 reliability 研究，因此细粒度标签差异不应被当成校准后的 ground truth。

官方仓库证明相应分析工件确实存在：按 agent 划分的解析视图、action-category CSV、五类标注目录、RQ1 指标、parsers，以及成功/失败 instance 列表。一个代表性的 OpenHands 记录保留自然语言 thought、tool name 与序列化参数。这验证了发布形态，但不能证明其具备不可变 replay 所需的完整性。

上述结果是行为描述与设计假设。它们没有证明该发布是高质量训练数据，没有证明某个 agent 内在更优，也没有证明这些标注模式能提升训练后的模型。benchmark performance 只用于标记终止 outcome，不能替代 annotation reliability、release completeness、decontamination 或 training value 的证据。
