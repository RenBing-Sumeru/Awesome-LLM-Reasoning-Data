先前基线是小规模专家 WSC，以及 DPR、SuperGLUE-WSC、COPA、KnowRef、Winogender 等相关指代或常识选择题。这些数据有价值，因为目标不是表层语法，而是常识；但规模小、伪影多，使模型高分难解释。

WinoGrande 的变化是“规模 + 机器可检测 shortcut 过滤”。它保留二选一 Winograd-style 对象，用受约束众包扩大覆盖面，用独立验证保证可答和非歧义，再用 AFLite 删除 embedding 分类器容易猜标签的例子。质量信号不只是数据更大，还包括 human 约 94%、强模型显著低于 human、local-context baseline 接近随机，以及官方公开 split 文件。

不新的是：二选一指代评测、多选 accuracy、以及 adversarial filtering 这一大类思路都已有前作。复用前必须查 release version、split 行数、标签可见性、license、leaderboard 状态、prompt/fine-tuning 形式和 contamination 风险。AFLite 降低已知统计捷径，但不证明语义纯净，也不能阻止后续模型记住公开题。
