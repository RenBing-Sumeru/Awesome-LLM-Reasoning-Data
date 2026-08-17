1. **初始化探索。** 作者用 WebShop、Alfworld 和 SciWorld 的专家轨迹微调 LLaMA-3-8B-Instruct。

2. **估计状态价值。** 类 MCTS 循环按 UCB 选节点、采样动作、rollout 到环境结果并回传价值；访问过少的状态被过滤。

3. **训练奖励模型。** 显式 RM 用 MSE 拟合保留价值；隐式 RM 对每条指令采样 16 条完整轨迹并学习进度奖励；LLM-as-a-judge 是不训练的对照。

4. **推理搜索。** Best-of-N 对完整轨迹打分，beam search 保留高分状态。复现须固定环境、checkpoint、搜索宽度、rollout 预算和奖励定义。
