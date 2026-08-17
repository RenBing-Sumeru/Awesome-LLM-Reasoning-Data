**主张。** 在事实性与硬性指令合规重要时，可验证代理能提升偏好 RM。

**受控设置。** 表 1 将 REWARDAGENT MINI、其 GPT-4o-mini backbone 与奖励 RM 在 RM-Bench、JudgeBench、作者构造的 444 样本 IFBench 上比较；聚合同时改变工作流和验证调用，并非孤立的模型规模对照。

**结果。** MINI 总分 72.5，ArmoRM 为 56.5、GPT-4o mini 为 45.9；IFBench-hard 为 78.0，对 ArmoRM 的 56.5。表 2 中去掉事实验证器，RM-Bench 从 73.1 降至 54.0；去掉指令验证器，IFBench 从 75.5 降至 60.4。

**边界。** 结果支持选定成对基准上的流程，不能证明所有验证器正确，也不能只归因于一个模块；oracle 路由更高，说明路由误差仍重要。
