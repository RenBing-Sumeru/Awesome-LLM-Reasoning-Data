输入包括任务规格、环境或 substrate 状态、基准公开的上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、环境或页面状态，以及公开上下文字段。
2. 让模型、人类或基准策略产生动作、答案或轨迹。
3. 用论文定义的 verifier、reward、judge 或环境谓词评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 15 个网站上的 643 个 task queries、额外 GAIA browsing tasks、动作轨迹、最终答案、自动判断和模型成功率。验证器、reward、judge 或环境是 GPT-4V 自动评测器：根据任务、回复和最近截图判断成功，并配合可选人工检查及人工一致性校准。复现时必须固定 artifact release、split、评测器或 judge 版本、环境状态、prompt/scaffold、动作预算和再发布条款。
