1. **构造 Judge SFT 数据：** 收集指令、候选输出和偏好信息，生成原子 rubric，并标注候选对每条准则的满足程度与总分。


2. **训练初始组件：** 分别用 SFT 初始化 rubric generator 和 rubric-conditioned pointwise Judge，使其能生成准则并输出概率分。


3. **交替 GRPO：** 固定一方优化另一方：rubric 阶段奖励能正确区分偏好的准则，Judge 阶段奖励与 pairwise 胜负一致的 pointwise 排序。


4. **下游策略训练：** 将概率聚合 reward 用于 rejection sampling 或 RL 后训练。复现需固定偏好数据、rubric 数量、概率聚合和交替周期。
