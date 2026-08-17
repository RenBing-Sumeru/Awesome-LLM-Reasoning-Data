阅读顺序建议是：先看任务动机和 WSC 例子，再看众包与验证，然后看 AFLite，最后看 baseline 和 transfer 表。最重要的边界是：adversarial filtering 让样本对某类 shortcut detector 更难，但不会机械证明模型之后的答案是由常识因果支撑的。

下游使用时要分开三组标签：WinoGrande-all 和 debiased subset，dev 脚本 accuracy 和 hidden-test leaderboard accuracy，evaluation-only 使用和 training-transfer 使用。复现实验还要把论文报告计数和 versioned release 计数分开记录。
