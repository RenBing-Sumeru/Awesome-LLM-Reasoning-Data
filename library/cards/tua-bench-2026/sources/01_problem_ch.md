TUA-Bench 问的是：terminal-use agent 能不能完成超出代码和传统 shell 管理的广义电脑使用任务。主来源是 2026 年 arXiv 论文 https://arxiv.org/abs/2606.28480，官方项目页 https://tuabench.ai/ 和 facebookresearch 仓库提供 artifact。

收录边界是 general-purpose terminal-use evaluation。一个 instance 包含任务 instruction、确定性 setup script、终端环境、输入文件或应用状态、agent 命令、执行反馈、最终产物，以及 execution-based scoring protocol。它不是 GUI grounding benchmark，不是 coding-only benchmark，也不是训练配方。它的价值在于把命令行当作 text-native 环境，用终端状态和 artifact checker 验收日常数字工作与专家科学工作流。
