1. **非可验证 RM 训练：** 使用 119K Judge SFT 记录初始化 pointwise evaluator，再用本地成对偏好交替训练。


2. **可解释 reward：** 保留每条 rubric 的满足概率，分析策略为何获奖或被拒，而不是只输出一个黑盒分数。


3. **数据流程复用：** 在新领域先由专家验证少量 rubric，再扩展自动生成；不能让 generator 与 Judge 在完全无人工锚点下互相强化。
