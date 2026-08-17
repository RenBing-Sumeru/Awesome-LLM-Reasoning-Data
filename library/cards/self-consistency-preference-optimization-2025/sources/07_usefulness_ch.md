对 Rollout, Search, and Test-Time Trace Data 方向，SCPO 是把重复采样轨迹直接转换为 optimizer-ready 偏好记录的案例。可复用 schema 应保留每个回答、解析答案、答案簇、票数、chosen/rejected 成员、选择随机性、票差权重、阈值、生成 checkpoint、iteration、问题 provenance，以及标签来自共识还是 gold correctness。

这类数据可用于 preference optimization、校准共识置信、比较外部 reward model 与 self-consistency、研究阈值，并审计 iteration 间的多样性坍缩。通过区分普通 train-split 构造和 transductive test-query 使用，它还可暴露泄漏风险。这些用途依赖原始轨迹与 split provenance；由于未确认官方偏好对语料，当前论文提供的是构造 recipe，而不是可下载偏好数据集。
