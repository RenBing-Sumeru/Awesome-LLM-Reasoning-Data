Beam search 和 DVTS 已使用 PRM 决定延展哪些路径；Best-of-N 和 weighted Best-of-N 已使用分数选择完成答案。SRCA 的具体改变是从每个中间前缀查询一个答案，然后两次复用它：ACS 将其作为路径聚类键，CCA 将其作为候选终点。这让被选对象的来源更明确，而不只是最终答案选择器：最终选择可能来自不完整前缀加临时答案 completion。

同样重要的是哪些并不新。该工作没有引入新 policy、新 PRM、benchmark 数据、外部 verifier 或训练过程。它在测试时重新配置已知的 autoregressive search 组件——采样、beam 保留、PRM 打分和最终选择。其声称的 fault tolerance 有条件：只有早期 checkpoint 的答案足够正确，且 PRM 将其重构候选排在后续但更差的 continuation 之前时才有效。

对 rollout-search track 而言，方向信号是记录设计：保存 checkpoint probe 及其选择 lineage，而不是只保留最终路径。复用前应检查分隔符覆盖、checkpoint-answer normalization、状态回滚、PRM version/format/calibration、相等性聚类，以及 gold benchmark 是否与 policy 或 PRM 训练源重叠。这些记录在此均未官方发布，因此 SRCA 是论文层面的 recipe 和审计参考，而非可直接运行的数据 artifact。
