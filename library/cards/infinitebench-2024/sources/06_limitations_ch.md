正确性只相对于任务 metric 成立。accuracy 依赖答案解析和目标构造；ROUGE 类指标奖励词面重叠，可能漏掉语义正确改写，也可能奖励不可靠的流畅回答。

benchmark 公开发布，存在训练污染风险。tokenizer 长度统计、context 截断、prompt 包装、API 模型修订、解码预算和 evaluator 库版本都会改变分数。

不要把它读成完整 agent benchmark、RAG benchmark 或可靠长上下文推理证明。部分任务本来就是 synthetic；真实来源材料的许可证和再分发边界需要逐 artifact 审查。
