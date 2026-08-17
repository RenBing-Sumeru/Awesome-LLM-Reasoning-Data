1. 输入：每个 task 提供 `task_id`、`skeleton`、类元数据、方法契约、dependencies、tests 和参考 `solution_code`。
2. 流程：模型按 holistic 整类生成、incremental 逐方法生成或 compositional 独立方法生成三种策略输出代码；必要时再组装方法体。
3. 输出：生成的 class code 或 method bodies，并按官方格式存入 JSON predictions。
4. 反馈：用官方 evaluation process 跑 class-level 和 method-level tests，再计算 Pass@1/Pass@k。
5. 复现边界：固定 ClassEval 数据版本、Python 版本、依赖、timeout、sampling mode、temperature/top_p、样本数和 repository commit。公开 tests 与参考答案有污染风险。
