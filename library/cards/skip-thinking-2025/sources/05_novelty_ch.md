最接近的基线是常规 CoT distillation：学生模型在一条序列中学习完整 rationale。CWT 把监督单元改为 chunk，并让当前学生模型的 loss 参与决定 chunk 边界；STT 再加入反事实删除试验，以答案正确性判断 chunk 是否继续显式出现。这不同于仅让教师缩写文本，也不同于把全部推理都隐藏进 latent state 的方法。

对推理数据整理而言，方向信号在于把“省略”明确视为构造决策。忠实的派生发布不应只保留压缩文本，还应保存源 rationale、边界 revision、每次 loss 估计所用模型 checkpoint、被删备选、答案检查及最终保留标签。LLM distillation、分阶段推理和一般意义上的 rationale compression 并非本文新创。论文的质量信号来自下游任务表现与延迟，而不是对 chunk 标签正确性或忠实性的直接验证。
