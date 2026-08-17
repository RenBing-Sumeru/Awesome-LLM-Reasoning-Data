对 Rollout, Search, and Test-Time Trace Data 方向，CMCTS 是带多种反馈通道的树状过程数据蓝图。可复用样本应包含节点文本、动作类别与准确提示、父节点、深度、访问次数、UCT 值、PRM positive/negative logits、Q/V reward、规则 mask、工具调用与输出、终止状态、投票分组、所选路径和 ground-truth 结果。规则满足、PRM 偏好、执行成功和最终正确性应保持为不同标签。

这些记录可用于训练或评估 process reward model、比较受约束与开放动作空间、研究分支多样性、重放不同剪枝策略，并审计增益究竟来自工具动作还是学习型 reward。论文链接仓库可能支持复现，但在没有固定 release 和完整生成树时，它还不是文档充分的轨迹数据集。除非 artifact 完整性得到核验，用户应把该工作视为搜索 recipe 和 schema 来源。
