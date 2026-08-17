在 528 个实例和 DeepSeek V3.2 设置下，作者报告 AutoCodeRover 的 resolved/apply rate 为 28.79%/96.21%，TraeAgent 为 52.65%/78.98%，mini-SWE-Agent 为 70.08%/95.83%。能干净应用的补丁仍可能不满足可执行契约，因此推理分析分别统计 Success、全部 Failure 和 apply-success/test-fail。

跨智能体汇总后，apply-success/test-fail 相比成功案例平均 recall 低 35.7%，over-prediction 高 94.1%。这是作者规范化与 judge 流水线下的聚合关联，并不能证明提高这些推理指标会因果性地修复补丁。

96/100 的定向人工一致性结果检查的是 GPT-5.2 接受/拒绝决定的平衡样本，不是对全部 580 个候选的完整重标，也没有校准下游 DeepSeek 语义 matcher。论文没有报告 judge 跨提示、端点、模型修订或重复调用的稳定性。

论文明确发现，成功的替代补丁也可能在任务/步骤 recall 上低于 1.0。这反驳了把五类推理模块当作唯一 ground truth 的做法。FTP/PTP 成功同样受测试覆盖限制：它验证已编码行为，而不是所有等价实现、回归、性能性质或安全影响。
