在 MT-PRMBench 上，Table 1 报告 MT-PRM-Qwen-2.5-3B 的 token-level accuracy 为 0.660，prefixed sequence-level 平均 accuracy 为 0.863；LLaMA PRM 对应结果为 0.578 和 0.776。benchmark contract 是 pairwise ranking accuracy：当 reward model 给构造流程选出的 `chosen` 高于 `rejected` 的分数时，判为正确。这些结果证明模型在 MT-PRMBench 的 COMETKiwi 派生标签下的行为，不代表它与人工 token judgment 一致。

Table 3 针对 Qwen backbone 隔离了 pair construction 的影响。在 token-level MT-PRMBench 上，用 token-level pair 训练的 DPO 得分为 0.660，而 vanilla pair 为 0.574；KTO 对应为 0.644 和 0.562。Table 4 比较 supervision form，报告 preference supervision 平均 accuracy 为 0.66，direct MCTS-value regression 为 0.52。作者将较弱的 value 结果与 Monte Carlo estimate 噪声以及 value 集中在 0.7–0.8 附近联系起来。这支持“pairwise ordering 在报告设置中更好”，但不证明底层 metric value 无偏。

测试时应用见 §5.3 和 Figure 3：Qwen2.5-14B-Instruct 在 ZH–EN 与 EN–RU 各报告设置使用 500 条 WMT23 样本。论文报告，LLaMA-PRM 与 Qwen-PRM 引导的 decoding 在 EN–RU XCOMET-XL 上相对 greedy decoding 分别提高 17.5% 和 17.9%。其适用范围是高资源语言和 automatic metric evaluation；论文未报告 human evaluation 或低资源验证。

artifact 证据具体但不完整：官方 viewer 显示两个 training variant 各有 8,652 行，两个 benchmark variant 各有 1,200 行，model collection 则公开两个 3B PRM checkpoint。这些数量能够证明发布物存在，却不能证明 data quality、split independence、source-rights compatibility、calibration 或未发布搜索决策的可复现性。
