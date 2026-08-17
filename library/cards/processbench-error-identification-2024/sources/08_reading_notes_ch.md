阅读时要分开三个边界。第一，`final_answer_correct` 是构造和分析字段，真正评测目标是 `label`。第二，专家最早错误标注不是形式化 verifier 结果。第三，aggregate F1 不能证明某个模型逐行理解了解答。

建议阅读顺序：先看 task definition，再看 data collection / annotation protocol，再看“最终答案正确但过程有错”的统计，最后看 evaluation setup。比较模型时要确认使用的是 PRM threshold、majority voting、greedy decoding，还是专有模型单次采样。

最关键的复用提醒：公开的 ProcessBench 行可以用于审计，但如果目标模型已见过题目、生成轨迹或专家 label，用它做训练或评测都会有污染风险。
