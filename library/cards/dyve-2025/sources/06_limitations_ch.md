与 DeepSeek-V3 达成一致是一条由模型定义的接收规则，并非独立 ground truth。论文没有报告保留标签的 precision、recall、calibration 或 human agreement；OmegaPRM、过滤 judge、32B target writer 与 14B student 共享数学领域和模型家族先验，可能产生相关性错误。System-2 解释也可能只是合理的事后叙述，而非对真实错误机制的忠实说明。

release lineage 并不完整。论文约 117,000 条轨迹与当前 Hugging Face train split 的 156,321 条 row 无法对齐。公开 schema 顶层只有 `conversations`，没有来源标识、OmegaPRM 假设、DeepSeek-V3 决策、被拒样本或重平衡记录。代码仓库也没有给出完整的采集、过滤、target generation 与训练端到端流水线，并且缺少 tagged release 和 paper-to-commit 绑定。

可复现性与权利状态仍是 partial。论文没有完整披露 MCTS 常数与限制、生成 temperature、随机 seed、teacher prompt 与 revision、类别比例和来源分配。model card 声明 MIT，但所检查的数据仓库与代码仓库没有显示许可证，也没有汇总继承来源的许可证。排除 PRM800k 只处理了一条泄漏路径，不能证明对 ProcessBench 或 base model 预训练语料完成了语义去污染。

方法还受任务与决策边界限制。实验仅覆盖数学，first-error stopping 会丢弃错误之后步骤的监督，当前仓库 parser 则依赖末尾加减号。System-2-only 在报告的四个 ProcessBench 领域上 F1 都更高，而且 Qwen2.5-14B 在 OmniMATH 上经过混合训练后有一项下降。因此，自适应模式应被理解为一种效率折中，其在测试分布之外的稳健性仍未知。
