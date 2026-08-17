本文的贡献是用统一的 thought-action-result 视角，在最终补丁之下比较异构软件工程 agent 运行。作者把三种 agent 的日志转换为有序交互三元组，统计结构属性，把 action 映射到同一分类体系，挖掘重复动作序列，并人工标注相邻 thought、action 与 result 之间的关系。

数据对象由完整 episode 及其分析视图组成。episode 级字段包括 agent、benchmark instance、有序的 thought、action/tool call、参数、result/observation、迭代与 token 总量，以及二元 resolved 结果。process 级字段加入八类 action：Explore、Locate、Search、Reproduce、Generate Fix、Run tests、Refactor、Explain；同时标注五类关系：thought-action、thought-thought、action-action、result-thought、result-action。频繁序列分析使用 action 4-gram。

反馈契约是混合型的。运行过程中，工具和仓库 environment 返回 observation，但这些 observation 不是逐步正确性标签。episode 结束时，AutoCodeRover 与 OpenHands 的成功条件是补丁通过 SWE-bench 测试；RepairAgent 则先要求 Defects4J-plausible patch，再由人工确认它与开发者补丁相同或语义等价。action category 与语义关系标签来自人工分析判断，并不是 environment 发出的 reward。

该契约能观察工具反馈、终止测试结果，以及人工编码的相邻组件一致性；它不能证明 thought 忠实反映模型隐藏计算，不能证明通过测试的补丁在 benchmark tests 之外普遍正确，也不能把关系标签当成客观 ground truth。论文报告双方讨论与 partial agreement checks，但没有数值一致性统计或完整 double-coding 协议。

相较 RepairAgent、AutoCodeRover 和 OpenHands 的原始评测，本文改变之处是保留并比较内部轨迹，而不只看终止成功。相较聚焦单次预测的 interpretability，它研究跨时间行为；相较从历史轨迹学习的工作，它提供实证审计方法而不是 optimizer。方向性价值来自成功与失败 episode、共享动作词表和显式反馈利用标签的组合，而不是新任务或新 agent。
