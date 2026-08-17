既有 rubric RM 通常由固定强模型一次生成准则，再用硬 0/1 判断求和；pairwise RM 又难直接给单回答 reward。RUBRIC-ARROW 的新意是让准则生成和评分器在偏好信号下交替改进，并把满足判断改成概率分数。它改变的是 rubric 与 Judge 的共同学习关系及 reward 形式，而不是简单增加更多准则。
