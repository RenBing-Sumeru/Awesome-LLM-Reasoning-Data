SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains? 回答的问题是：软件工程智能体可能通过纯文本仓库任务，却在包含截图或渲染 UI 证据的视觉软件问题上失败。主来源是 https://arxiv.org/abs/2410.03859；公开状态为 ICLR 2025 / arXiv（2024）。

决策边界：它应作为多模态仓库修复基准收录，不是通用视觉问答，也不是纯图像理解基准。可复用对象是：一个样本包含带图像的问题描述或单元测试、仓库状态、image assets、patch/test_patch、FAIL_TO_PASS 和 PASS_TO_PASS 测试，以及评测记录。它对 atlas 的价值在于对象和反馈契约可以一起审计。
