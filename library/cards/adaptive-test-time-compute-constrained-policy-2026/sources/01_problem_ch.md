统一 test-time sampling 会给每个问题分配相同响应数，但简单问题可能一次即可答对，中等难度问题可受益于投票，极难问题即使增加预算也可能持续错误。在共享平均预算下，各问题的计算决策相互耦合，不能独立最大化每题准确率。论文研究的是：如何在观察输出之前，为每个输入分配离散响应预算。

AdaCompute-LLM 将其转化为离线数据构造与监督式分配问题。核心数据对象是 question-by-budget utility table：对 prompt 重复采样，把响应按预算 1、2、4、8、16 划成 self-consistency window，以多数投票正确率估计 utility，再用 Lagrangian 规则在目标平均成本下产生 oracle budget label，最后把低成本特征向量与标签配对训练 classifier。部署时，classifier 预测预算，模型生成相应数量的 response，并以多数投票返回答案。

这是 test-time compute policy，而非已发布的 RL trajectory dataset。官方 MIT 仓库实现五阶段 pipeline 和数据加载器，但未确认公开发布论文的 38,400 条响应、utility matrix、seed、oracle-label table 或训练后 policy。除论文声明的 MATH 与 GSM8K 子集外，prompt provenance、split identity 和完整 replay metadata 仍不充分。
