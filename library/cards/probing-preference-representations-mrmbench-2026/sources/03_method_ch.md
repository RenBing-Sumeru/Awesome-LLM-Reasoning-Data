1. **建立数据源：** 从 PKU-SafeRLHF、HelpSteer 等偏好资源提取可映射到六维属性的响应和标注。

2. **生成或重组反馈：** 为每个维度构造二元容易任务与三元困难任务，控制其他属性，使 probe 尽量测目标表示而非总体质量。

3. **验证与筛选：** 将 reward model 的中间表示或输出接入轻量 probe，衡量不同层和模型对六维属性的可分性。

4. **训练与评测：** 比较 probing 分数与 RewardBench、AlpacaEval 和 PPO 下游表现的相关性，并尝试用 probe 选择或增强 reward。
