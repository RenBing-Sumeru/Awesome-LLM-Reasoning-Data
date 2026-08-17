正确性只相对于所选 benchmark module、driver 实现和运行时采用的 metric 定义成立。progress metric 可以暴露 agent 是否接近目标，但仍是操作性 proxy，不必然覆盖编码环境之外的语义任务质量。

版本是假设中的关键部分。benchmark task、外部 API、模型 prompt、retry budget、random seed 和依赖版本都会改变 trajectory 和分数含义。仓库可访问不等于已经有冻结 benchmark release，也不等于数据许可证已清楚。

这篇工作不应被解读成某个 agent 具备通用自主能力。更合适的用法是把它作为 evaluation harness 和诊断 schema；所有结论都要受 module 选择、环境忠实度和可复现实验配置约束。
