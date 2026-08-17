# 05 新意

既有基线主要是 outcome supervision：reward model 或 grader 只看最终答案是否正确；早期过程监督工作规模更小，也常在更简单的数学数据上做。本文改变了可复用对象：它公开了面向 MATH 风格推理的大规模步骤标签语料，并用它训练能给中间步骤打分的 reward model。

质量信号来自公开标签、标注说明、grading 代码，以及 PRM 与 ORM 的直接比较。不新的部分包括 MATH 数据集、reward modeling、best-of-N 采样和最终答案 grading。复用前应检查人类标签政策、neutral/negative 语义、split 构造、answer grader 保守性、license、Git LFS 数据版本，以及当前用途是 evaluation 还是 training。
