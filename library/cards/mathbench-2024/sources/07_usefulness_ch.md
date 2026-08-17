MathBench 可作为分阶段数学评测、双语 benchmark 审计和多选答案鲁棒评分的参考。它特别适合在模型比较中拆开理论记忆与应用推理。

复用时应保留 item id、语言、阶段、学科/主题层级、MathBench-A 或 MathBench-T 标签、答案/选项、prompt 模板、模型输出、CE 多轮结果、普通 accuracy 以及 OpenCompass 配置。

在 atlas 中应把它当作 evaluation-only 证据。它可以启发 evaluator 设计或后训练审计清单，但不能未经反馈契约和污染审计就直接当 reward 数据。
