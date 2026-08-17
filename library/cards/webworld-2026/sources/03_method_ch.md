输入包括任务规格、环境或 substrate 状态、基准公开的上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、环境或页面状态，以及公开上下文字段。
2. 让模型、人类或基准策略产生动作、答案或轨迹。
3. 用论文定义的 verifier、reward、judge 或环境谓词评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 1.06M 开放网页轨迹、论文描述的 world-model checkpoints、30+ turn 仿真 claim、WebWorld-Bench 指标和 8000 条下游微调用合成轨迹。验证器、reward、judge 或环境是：WebWorld-Bench 使用 LLM-judged Factuality Score 和 Web Turing Score；下游任务成功作为合成轨迹的外部验证。复现时必须固定 artifact release、split、评测器或 judge 版本、环境状态、prompt/scaffold、动作预算和再发布条款。
