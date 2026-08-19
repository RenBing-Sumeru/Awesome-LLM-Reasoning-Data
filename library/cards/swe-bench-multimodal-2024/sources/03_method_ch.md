输入包括任务规格、仓库或环境状态、公开上下文字段，以及模型或人类的动作/答案输出面。

1. 从 JavaScript 库中收集含图像的软件 issue。
2. 打包仓库状态、图像资源、补丁与测试。
3. 用 SWE-bench harness 和私有 test split 评测智能体。
4. 报告多模态任务条件下的解决率。

输出方面，论文报告了来自 17 个 JavaScript 库的 617 个任务实例；公开 HF 目前暴露的是一个相关行数与 split 视图，应单独做版本管理。验证器、reward、judge 或环境是：SWE-bench Multimodal/SWE-bench harness 在保留含图像 issue 或测试上下文的同时，用仓库测试评测补丁；test split evaluation 保持 private。复现时必须固定 artifact release、split、评测器版本、环境镜像、prompt/scaffold、预算和再发布条款。
