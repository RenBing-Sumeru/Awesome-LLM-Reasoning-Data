在私有留出评测上，PORTool 搭配 Qwen-2.5-7B-Instruct 的准确率为 51.98%，表中最强基线为 48.23%。搭配 Qwen-3-1.7B 时，结果为 46.60%，对应最强基线为 42.76%。论文还报告 Qwen-2.5-7B-Instruct 在 ToolBench 上的平均通过率为 52.8%，以及 TravelPlanner 的 delivery rate 92.8% 和 pass average 16.7%。

终局 evaluator 在 700 个 query-answer 对上校准；这些样本由多个强模型家族生成，并由人类依据工具输出标注。GPT-4o 达到 94.37% 一致率。每条被评测轨迹接受 5 次独立 judge 调用，再取多数票。报告的训练结果平均最佳 3 个 checkpoint，这是一项选择细节，而不是单一最终 checkpoint 的估计。

消融支持同时使用分叉相对与轨迹相对 advantage，并使用自适应奖励聚合。始终平均可能稀释罕见成功分支，始终取最大值则可能强调幸运后代。这些结果支持优化机制，却不能证明公开数据质量：私有评测项、原始判断、rollout 树、重试和 checkpoint 历史都无法供独立误差分析。
