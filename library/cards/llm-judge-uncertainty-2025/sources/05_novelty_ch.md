既有不确定性工作常输出置信分数或无序预测集合。本文改变了有序评分 judge 的输出契约：它用 logits 加 split conformal calibration 返回区间，再使区间在离散评分尺度上有意义。保形预测和 token 概率评分本身并不新；贡献在于面向评分型 LLM judge 的系统区间分析和边界调整。复用前须检查校准规模、任务分布及 logits 可得性。
