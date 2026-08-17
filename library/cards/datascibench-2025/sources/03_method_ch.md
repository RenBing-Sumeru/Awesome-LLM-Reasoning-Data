1. 输入：收集到的自然数据科学 prompts、数据集或任务上下文、预定义任务类型，以及聚合函数或指标。
2. GT 流程：用 LLM self-consistency 生成候选 GT，再通过人工验证确认。
3. TFC 评测：把每个任务映射到 function 和基于代码的 metric rule，执行或检查模型产物，并按定义规则计分。
4. 输出：模型代码/结果、执行结果、metric value、pass/fail 或任务分，以及 benchmark 聚合指标。
5. 反馈契约：TFC metric 与程序化规则决定是否接受；人工验证用于 GT/metric 校验，不是对每个模型输出的黑箱偏好 judge。
6. 复现边界：需固定数据集版本、执行环境、依赖包版本、随机种子、metric code、答案解析器、prompt/scaffold、timeout 和人工验证协议。
