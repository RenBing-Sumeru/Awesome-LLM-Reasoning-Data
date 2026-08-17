输入包括任务规格、环境或 substrate 状态、基准公开的上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、环境或页面状态，以及公开上下文字段。
2. 让模型、人类或基准策略产生动作、答案或轨迹。
3. 用论文定义的 verifier、reward、judge 或环境谓词评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 任务成功结果、浏览器轨迹、最终站点状态、验证输出和模型/人类对比。验证器、reward、judge 或环境是 functional correctness validators 和 annotated programs，判断最终网站状态是否满足任务。复现时必须固定 artifact release、split、评测器或 judge 版本、环境状态、prompt/scaffold、动作预算和再发布条款。
