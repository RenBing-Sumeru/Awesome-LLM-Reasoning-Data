输入包括任务规格、仓库或环境状态、公开上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、仓库或环境状态，以及公开上下文字段。
2. 让模型、人类或基准流程产生补丁、测试、动作、答案或检索结果。
3. 用论文定义的 verifier、reward、judge 或静态指标评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 官方 README 列出 Full 2,294、Lite 276 与 Verified 433 个实例，并为各基准子集提供 HF 变体。验证器、reward、judge 或环境是：在 unit-test mode 下，生成测试必须在原始代码失败、修复后通过，且修复后不能有失败测试；指标包括 success rate 和 changed-line coverage。复现时必须固定 artifact release、split、评测器版本、环境镜像、prompt/scaffold、预算和再发布条款。
