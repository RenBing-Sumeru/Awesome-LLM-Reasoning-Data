输入包括任务规格、仓库或环境状态、公开上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、仓库或环境状态，以及公开上下文字段。
2. 让模型、人类或基准流程产生补丁、测试、动作、答案或检索结果。
3. 用论文定义的 verifier、reward、judge 或静态指标评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 RepoBench-R、RepoBench-C 与 RepoBench-P 三类任务，覆盖 Python 与 Java，并为两种语言提供 v1.1 Hugging Face 数据集。验证器、reward、judge 或环境是：RepoBench-R 用 Accuracy@k 评估检索；RepoBench-C 和 RepoBench-P 用 Exact Match 与 Edit Similarity 评估补全或 pipeline。复现时必须固定 artifact release、split、评测器版本、环境镜像、prompt/scaffold、预算和再发布条款。
