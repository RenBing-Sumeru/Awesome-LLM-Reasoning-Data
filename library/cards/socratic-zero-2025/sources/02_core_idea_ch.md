固定 Teacher 验证 Solver 尝试并改写失败题，训练中的 Generator 蒸馏 Teacher 的改写策略。验证后的胜负响应用于 DPO，而 Solver 成功率接近 50% 的题目获得最高效用权重，用于 Generator 模仿。

