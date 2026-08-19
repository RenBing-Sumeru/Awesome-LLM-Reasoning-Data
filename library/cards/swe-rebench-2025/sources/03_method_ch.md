输入包括任务规格、仓库或环境状态、公开上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、仓库或环境状态，以及公开上下文字段。
2. 让模型、人类或基准流程产生补丁、测试、动作、答案或检索结果。
3. 用论文定义的 verifier、reward、judge 或静态指标评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 the paper reports over 21,000 个交互式 Python 软件工程任务；当前 HF 主数据规模更大，榜单子集是独立的。验证器、reward、judge 或环境是：SWE-bench fork 在选定 SWE-rebench 数据集上运行 run_evaluation，使用安装 recipe、Docker images 和仓库测试。复现时必须固定 artifact release、split、评测器版本、环境镜像、prompt/scaffold、预算和再发布条款。
