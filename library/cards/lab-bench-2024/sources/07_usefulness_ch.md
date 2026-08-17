LAB-Bench 可作为领域专家 benchmark 的 schema 参考：每个样本带科研 artifact、目标答案、类别元数据和版本化评分契约。它适合同时观察检索、多模态文档使用、科学工具使用和长上下文序列推理。

复用字段应包括 category、subtask、prompt、choices、answer、source artifact、public/private split、dataset revision、human coverage、evaluator version 和 model scaffold。对 atlas 的价值是把 biology workflow object 明确连接到 answer-level feedback。

下游配方要把 evaluation 和 training 分开。如果样本被用于 instruction tuning，则相对 LAB-Bench score 应标记为 contaminated，并保留 canary/filtering 与 lineage 说明。
