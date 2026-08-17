阅读时先看数据构造和评测设置，再比较 headline score。要分开三类 claim：基准覆盖范围、模型准确率、judge 可靠性。

最关键边界是：最终答案被接受不等于推导过程被验证。Omni-Judge 判定、规则匹配和排行榜 aggregate number 是三种不同证据，不能混用。
