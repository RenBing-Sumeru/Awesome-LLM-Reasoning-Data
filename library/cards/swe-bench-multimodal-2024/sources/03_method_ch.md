输入包括任务规格、仓库或环境状态、公开上下文字段，以及模型或人类的动作/答案输出面。

1. 固定任务规格、仓库或环境状态，以及公开上下文字段。
2. 让模型、人类或基准流程产生补丁、测试、动作、答案或检索结果。
3. 用论文定义的 verifier、reward、judge 或静态指标评分。
4. 保存输出、版本、split、预算和失败模式，供复现比较。

输出包括 the paper reports 617 task instances from 17 JavaScript libraries; public HF currently exposes a related row count and split view that should be versioned separately.。验证器、reward、judge 或环境是：SWE-bench Multimodal/SWE-bench harness 在保留含图像 issue 或测试上下文的同时，用仓库测试评测补丁；test split evaluation 保持 private。复现时必须固定 artifact release、split、评测器版本、环境镜像、prompt/scaffold、预算和再发布条款。
