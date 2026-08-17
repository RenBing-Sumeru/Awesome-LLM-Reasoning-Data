
最强证据来自多项官方工件之间的相互印证。arXiv v2 说明完整阶段顺序与反馈函数；NVIDIA 最终模型卡确认起始权重为 Qwen3-8B-Base 与 Qwen3-14B-Base；中间检查点卡列出 SFT、RLHF、IF-RL、Math-RL 和 Code-RL 检查点，并说明最终 8B 在 SWE RL 后得到；奖励模型卡则说明 Qwen2.5-CascadeRL-RM-72B 从 Qwen2.5-72B-Instruct 初始化，以 Bradley-Terry 偏好学习训练，并用于该系列的 RLHF 阶段。

数据发布同样具体。官方 Stage-1 数据卡报告数学、代码、科学与通用配置合计 5,436,618 条样本；Stage-2 数据卡报告 7,797,730 条，除上述领域外还包括工具调用、指令遵循和三类 SWE 任务。RL-Math 报告 14,476 道题；RL-RLHF 报告 45,882 个提示；RM-Training 报告 81,808 条记录；RL-SWE 发布提示、来源、实例、人工补丁与定位字段，并明确说明 SWE RL 不使用 Docker 执行。这些是工件事实，不能证明每条记录都进入了每次报告运行。

论文的阶段消融属于行为证据。对统一 8B 模型，报告中的 LiveCodeBench v6 从 SFT 后的 56.7 上升到 RLHF 后的 67.2、Code RL 后的 71.5，SWE RL 后为 71.1；SWE-bench Verified 则从 SFT 后的 26.1 上升到最终阶段的 37.2。14B 最终模型报告 LiveCodeBench v6 为 74.6、SWE-bench Verified 为 43.1。这些表格支持指定评测设置下的检查点行为主张，却不能证明训练数据的正确性、来源、许可证或无污染。

发布账本层面的证据仍不完整。当前 collection viewer 显示的 Stage-1 与 Stage-2 数量低于各自数据卡总数，公开 collection 也没有明显列出专门的 IF-RL 或 Code-RL 数据集。因此，在获得不可变的文件、数量与阶段对照表之前，报告所称“完整训练数据 collection”不能直接视为端到端可复现证据。
