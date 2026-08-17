# 07 用途

当研究问题是模型是否能抵抗常见错误信念，而不只是回答普通事实问题时，可以使用 TruthfulQA。它特别适合作为 model scaling claims、alignment interventions、hallucination mitigation 和 truthfulness-oriented post-training 的 sanity check。

做数据整理时，应记录 item category、prompt template、answer mode、scorer，以及结果来自 generation、MC1、MC2 还是 human annotation。做 benchmark 比较时，应把 truthfulness 与 informativeness 分开，避免模型因回避但无信息的回答得到错误奖励。

复用时要固定官方 source version 和 evaluator implementation。不要直接把该 benchmark 当作 training reward data，除非另有审计说明 labels、answer sets、contamination controls 和 evaluator error modes 如何处理。
