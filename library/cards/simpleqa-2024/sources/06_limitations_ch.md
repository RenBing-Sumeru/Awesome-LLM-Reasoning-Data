Correctness 只相对于 released reference answer 和 grader instructions 成立。CORRECT 不证明一个冗长回答里的每个额外事实都正确；INCORRECT 可能来自矛盾、部分回答、歧义、来源冲突或 grader error。

benchmark 是公开的，污染风险会随时间上升。问题被设计成截至 2023-12-31 可回答，并且避免答案变化；这意味着 SimpleQA 不测试 live knowledge、browsing、retrieval grounding 或 long-form factual precision。supporting URLs 也可能迁移、消失或互相冲突。

prompted grader 方便但不是 formal verifier。grader model、prompt、output parser 和 evaluator commit 都会改变结果。F-score 也不完美：论文指出，当模型认为自己有超过约 50% 概率答对时，guessing 可能比 abstaining 更有利。对 safety-sensitive factuality，应分开报告 correct、incorrect、not-attempted，或显式使用 wrong-answer penalty。
