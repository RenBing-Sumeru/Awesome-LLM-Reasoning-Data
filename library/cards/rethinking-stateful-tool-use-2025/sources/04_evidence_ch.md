Table 3 中，没有模型在工具创建或完整工具利用维度超过 80%。GPT-4o 在 creation/awareness/selection/execution 上分别为 66.7、63.5、77.8、68.7；Llama 3 70B 的创建和执行为 69.7、68.1；Qwen1.5 72B 的感知和选择为 75.5、71.9。selection 普遍高于 execution，因为执行还要求全部参数名、值和格式正确。

长上下文显著降低 GPT-4o 性能。10 turns 时感知/选择/执行为 78.9/85.7/75.2；20 turns 降至 59.7/69.5/51.2；30 turns 为 56.7/60.1/38.5；40 turns 仅 52.3/54.4/35.3。错误分析显示缺失参数是主要执行问题，另有 API error 和 value mismatch。GPT-4o 的 missing keys、extra keys、value mismatch 分别为 12.4%、0.9%、24.3%，日期与地点值尤其常见。

这些结果支持“长程状态和参数恢复困难”的结论，但不能证明 DialogTool 是安全或高质量训练语料。分数是组件级而非 episode 成功率；来源对话为继承数据；完整模型输出和失败样本未发布；lexical/role 指标也不能验证回复来自正确环境迁移。
