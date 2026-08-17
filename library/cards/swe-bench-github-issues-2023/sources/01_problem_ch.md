SWE-bench: Can Language Models Resolve Real-World GitHub Issues? 回答的问题是：软件智能体需要解决真实仓库 issue，但函数级代码基准不要求理解 issue 语境、编辑代码库并通过项目测试。主来源是 https://arxiv.org/abs/2310.06770；公开状态为 ICLR 2024 Oral / arXiv（2023）。

决策边界：它应作为可执行仓库修复基准收录，不是通用代码问答，也不是 LLM judge 基准。评测面是：一个样本包含 GitHub issue、仓库快照、候选补丁面、测试、Docker/运行配置、日志、split 元数据和 resolved/unresolved 结果。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
