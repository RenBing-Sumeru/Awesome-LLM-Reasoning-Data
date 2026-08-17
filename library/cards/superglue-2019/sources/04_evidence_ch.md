最强证据是新任务套件上的机器-人类差距。论文 Table 3 给出 test-set 基线：CBoW 主分数平均 44.3，BERT 为 69.0，BERT++ 为 71.5。作者进一步指出，BERT++ 平均仍比人类表现低将近 20 分，其中 WSC 差距最大。

任务规模和评分口径在 Table 1 中明确列出：BoolQ、CB、COPA、MultiRC、ReCoRD、RTE、WiC、WSC 都有 train/dev/test 规模和各自指标。例如 MultiRC 用 answer-option F1 和 question-level exact match，ReCoRD 用 F1/EM，CB 用 accuracy 与 macro-F1。

逐样本证据来自参考标签和任务 scorer，而不是主观裁判。证据边界也很清楚：这些数字绑定 2019 年任务 release、官方规则、BERT 类基线和私有测试提交基础设施；后来的模型分数或 prompt-only 评测必须重新固定 scorer 并审计数据污染。
