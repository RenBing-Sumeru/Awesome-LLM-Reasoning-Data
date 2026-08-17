对 prompt i，warmup 后 policy 的 8 条 rollouts 给出二元成功率 p_i。Learnability 定义为 V_i=p_i(1-p_i)：全部失败或全部成功时为 0，在 p=0.5 时达到最大值。LearnAlign 归一化该 prompt 的 GRPO gradient 方向，乘以 V_i，再通过 random projection 得到可计算的向量。

两两分数 S_ij 等于 V_i V_j 乘以两个投影 gradients 的 cosine similarity。LearnAlign 构造 n×n score matrix，把 prompt 与自身的配对也计入行平均，然后按行平均降序选择 top N。其解释是：p(1-p) 近似当前学习潜力，gradient alignment 近似该样本在 RLVR 更新目标下对整体 pool 的代表性。

反馈合约仍是相对 ground truth 的稀疏二元 final-answer correctness；没有检查中间推理。理论附录只在“一个正确 action、一个错误 action”的简化设置下推导 policy-gradient magnitude 与 p(1-p) 成比例。因此该指标是受 policy 条件约束的 selection signal，而不是 prompt 质量的一般证明。
