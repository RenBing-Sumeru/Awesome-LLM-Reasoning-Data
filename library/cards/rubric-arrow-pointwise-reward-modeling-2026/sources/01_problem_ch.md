非可验证写作、建议和开放式问答缺少程序检查器，pointwise reward model 必须给单个回答绝对分数，却容易受尺度漂移和主观标准影响。rubric 方法虽能拆解要求，但常依赖昂贵前沿模型，并用布尔满足度求和，导致大量平局和弱梯度。

RUBRIC-ARROW 联合训练 rubric generator 与 rubric-conditioned Judge，用概率评分和交替 GRPO 从成对偏好中学习 pointwise reward，并公开 Judge SFT 数据。
