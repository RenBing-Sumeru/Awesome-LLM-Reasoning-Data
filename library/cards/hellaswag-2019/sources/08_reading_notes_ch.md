不要把 HellaSwag accuracy 解读成单条推理证明。它只是静态多选数据上的 option-label agreement。

构造难度和评测难度要分开：adversarial filtering 让发布时的负例对构造期模型更难，但现代模型分数必须重新做 contamination 和 prompt-format 审计。
