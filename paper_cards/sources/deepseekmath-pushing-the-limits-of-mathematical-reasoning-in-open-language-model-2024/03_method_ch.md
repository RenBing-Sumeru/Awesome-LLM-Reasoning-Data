输入包括数学相关 Common Crawl 语料、自然语言和代码数据、数学指令样本，以及 MATH/GSM8K 这类评测题。

输出是 DeepSeekMath 系列模型和相应评测结果。方法链条包括继续预训练、SFT、GRPO 和 self-consistency 评测。复现时要核对语料过滤规则、RL 提示词、奖励细节、64 次采样设置和模型许可证。
