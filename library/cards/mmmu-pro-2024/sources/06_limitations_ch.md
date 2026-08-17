正确性只相对于发布的答案键和评测器成立。得分正确不证明模型使用了预期视觉证据，答错也不能定位是哪一步推理失败。

该 benchmark 仍受公开数据污染、prompt 敏感性、答案键错误，以及 standard 与 vision-only 设置差异影响。由于官方有后续修正，leaderboard 比较必须带 dataset revision 和日期。

主要复用风险是 artifact 风险：license 和再分发条款要在数据集层面检查；hidden/public 说明不能替代污染分析；aggregate accuracy 也不能直接当训练 reward，除非另做反馈契约审计。
