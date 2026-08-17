对 Rollout, Search, and Test-Time Trace Data 而言，ST-BoN 说明不能假设每个 selector 都是奖励模型，也不能假设每个候选都会完整生成。规范化记录应保存共享 prompt 与 reference answer、N 和采样参数、每条前缀及停止原因、模型与层定义、CoE 特征值、逐步距离、buffer-window 胜者、最终选择、后续 continuation、时延、显存核算及任务评估器。

这种拆分有助于在匹配预算下公平比较 Full-BoN、self-consistency、reward-model BoN 与 early truncation，也便于审计节省究竟来自更少 token、不同 N、更强模型还是选择器。现有官方 release 适合研究实现，但若作为 trace dataset 复用，仍需要额外导出与 provenance 工作。
