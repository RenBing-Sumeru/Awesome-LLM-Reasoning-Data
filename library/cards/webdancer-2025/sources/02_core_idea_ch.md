WebDancer 的核心贡献是一条端到端 data-to-policy 管线：先合成困难的短答案 web 任务，再采样并筛选完整 ReAct demonstration，用其完成冷启动 SFT，随后把剩余 QA 重新用于 on-policy agent RL。

CRAWLQA 从知识性 root site 出发递归访问子页面，并让 GPT-4o 生成 COUNT、MULTI-HOP、INTERSECTION 等指定类型的问题。E2HQA 从带简短实体答案的 SimpleQA-style 问题开始，检索问题中某个实体的相关信息，再把该实体重写成新的子问题，同时保持答案不变。轨迹阶段使用 GPT-4o 生成 Short-CoT 行为，使用 QwQ-Plus 生成 Long-CoT 行为，每条 QA 最多进行 5 次 rejection sampling。

训练对象是一段由 Thought、Action 与 Observation 构成的完整 episode history。search 接收 `query` 与 `filter_year`，返回 10 条结果的标题和 snippet；visit 接收 `goal` 与 `url_link`，返回 evidence 以及 Qwen-2.5-72B 生成的摘要。SFT 会屏蔽 observation token 的 loss，因此监督附着在模型生成的 thought、action 与 answer 上，外部反馈只作为上下文。

RL 反馈契约是 mixed，而不是纯 environmental。二元格式检查器能够观察完整输出与 JSON 工具调用是否有效；Qwen-72B-Instruct judge 根据参考答案给出二元答案正确性。终局奖励为 `0.1 * score_format + 0.9 * score_answer`；它无法定位第一处错误推理步骤，也不能验证引用忠实性或保证成功答案来自可靠搜索路径。

与 prompting-only agent、Search-o1、WebThinker、R1-Searcher、SimpleDeepSearcher 及同期端到端 agent RL 相比，WebDancer 的差异化对象是相互连接的四阶段管线，以及显式的 Short-CoT/Long-CoT 轨迹构造。它并未提出新的搜索引擎、browser 环境、foundation model、ReAct 协议、DAPO optimizer 或通用长文研究 benchmark。（论文 §§2–3 与 Appendix E。）
