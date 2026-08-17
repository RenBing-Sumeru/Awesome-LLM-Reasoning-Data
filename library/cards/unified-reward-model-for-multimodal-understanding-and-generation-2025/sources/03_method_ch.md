1. **构建统一人工偏好混合数据。** 先汇总多任务人工偏好训练统一RM；
2. **训练成对与逐点评分。** 用pairranking与pointsifting选择高低质量候选，形成新的chosen/rejected数据，并对对应视觉模型执行DPO。
3. **将模型输出筛成 DPO 偏好对。** 用pairranking与pointsifting选择高低质量候选，形成新的chosen/rejected数据，并对对应视觉模型执行DPO。
4. **对齐图像与视频模型。** 用pairranking与pointsifting选择高低质量候选，形成新的chosen/rejected数据，并对对应视觉模型执行DPO。
