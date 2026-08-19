输入包括 benchmark prompt、source artifact、task metadata，以及 scorer 所需的上下文。复用时应保留的字段是：技能标签、prompt、模型回答、期望答案或 rubric、分数。

可复现使用应按下面流程固定：
1. 固定官方来源、dataset 或 benchmark 版本，以及 evaluator revision。
2. 在公开的 prompt、scaffold、sampling budget 和 tool/environment policy 下运行模型。
3. 用官方 answer extractor、judge、test harness、rubric 或 hidden evaluator 转换输出。
4. 先保存逐题 verdict，再汇总 aggregate score。

输出是逐实例 score 或 pass/fail label，以及 aggregate metrics。反馈契约是混合的 checker 或 judge 评分。除非官方 artifact 明确支持 reward-modeling、filtering、reranking 或 RL 用途，否则只按评测使用。
