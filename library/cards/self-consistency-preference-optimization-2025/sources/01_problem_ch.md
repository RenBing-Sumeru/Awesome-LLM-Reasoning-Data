《Self-Consistency Preference Optimization》（ICML 2025，PMLR 267）研究缺少 gold answer、且外部 reward model 可能在分布外失效时的推理自训练。标准推理时 self-consistency 会采样多个解答并选择最常见最终答案；SCPO 考察能否把这种频次信号转成模型训练的偏好监督。

主要数据对象是迭代生成的偏好记录：无标签 seed 或模型生成问题、k 个带 rationale 与解析最终答案的采样回答、答案等价簇、各簇票数、从最高票簇抽取的 chosen 回答、从最低票簇抽取的 rejected 回答、票差权重、过滤阈值、iteration 与模型版本，以及半监督变体中的可选 gold-label provenance。论文报告了该构造与实验，但已接受 artifacts 未识别官方偏好对数据集、rollout 日志或代码发布。共识是程序化 proxy，而不是 ground-truth verifier，因此共享模型错误必须显式保留。
