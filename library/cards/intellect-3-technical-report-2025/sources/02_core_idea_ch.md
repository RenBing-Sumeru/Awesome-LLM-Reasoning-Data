INTELLECT-3 是一个总参数 106B、激活参数 12B 的 MoE 模型，以 GLM-4.5-Air-Base 为基础，先做监督微调，再进行大规模异步强化学习。其可复用数据对象是环境 episode：提示、模型推理与动作、工具或沙箱观察，以及环境定义的奖励或终止结果。

Prime Intellect 通过 `prime-rl`、`verifiers` 库、Environments Hub 和 Prime Sandboxes 串联这些 episode。因此，该报告既是模型报告，也是开放环境式 RL 栈的一份部分披露账本。
