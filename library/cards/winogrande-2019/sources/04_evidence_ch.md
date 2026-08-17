论文报告 WinoGrande-all 有 43,972 题，debiased benchmark 有 12,282 题。按 AllenAI 官方 version 1.1 发布包核验，XS/S/M/L/XL train 行数分别是 160、640、2,558、10,234、40,398；`train_debiased` 是 9,248 行，dev 是 1,267 行，test 是 1,767 行且无标签。论文表格和发布包在部分计数上不完全一致，复用分数时要固定具体 artifact 版本。

核心证据包括汇总分数和诊断实验。论文在 debiased 评测上报告 RoBERTa dev 79.3%、test 79.1%，human dev 94.1%、test 94.0%。local-context BERT/RoBERTa 接近随机，DPR fine-tuned 模型迁移到 WinoGrande 也偏弱，这支持“保留样本不容易靠局部词关联解决”的结论。

迁移实验中，WinoGrande fine-tuned RoBERTa 在 WSC、DPR、COPA、KnowRef 和 Winogender 等设置上报告提升。这个结果说明数据可作为训练资源，但也呼应作者的警告：旧 benchmark 上的提升可能暴露的是旧数据残留偏差，而不一定是模型获得了更深的常识能力。逐题证据仍只是标签 exact match；AFLite 是过滤诊断，不是每道题无伪影的证书。
