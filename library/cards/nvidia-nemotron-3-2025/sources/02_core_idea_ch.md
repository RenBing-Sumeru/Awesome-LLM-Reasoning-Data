Nemotron 3 是由 Nano、Super 和 Ultra 组成的家族，采用 hybrid Mamba-Transformer mixture-of-experts 架构。家族报告称模型通过多样的 RL 环境进行后训练，以获得推理、多步工具使用和推理时 reasoning-budget control 能力。报告称这些环境被同时优化，而不是按任务分别设置训练阶段。

已披露的反馈表面是混合且依任务而定的。家族报告说明了训练与推理解耦的异步 RL、GRPO 和 masked importance sampling。Nano 发布材料补充了自动编译器、数值和语言检查等例子；NVIDIA 参考文档还点名了 GenRM、DPO 等 Nano 组件。每个环境对应的 reward、verifier、数据集和模型的完整映射尚未披露。

因此，Track 12 的核心价值是一份发布与披露账本。它区分了公开可见的软件和 artifact 栈，与仍然不完整的数据分配、门控、私有输入、环境状态和反馈校准记录。
