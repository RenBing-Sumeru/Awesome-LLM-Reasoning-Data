Lean 验证、tactic prediction、神经树搜索、expert iteration 和 auto-formalization 都早于 AlphaProof。其独特组合在于规模与路由：数千万有效形式陈述组成广泛的 AlphaZero-like RL 课程，成功 proof/disproof 经验同时更新 policy 与 value，而困难目标会触发一个基于生成问题变体的独立 TTRL 循环。

对 rollout/search 分类而言，重要新意是推理计算可以生成临时的、目标特定训练数据，而不只是多采样几个最终答案。论文也明确了 selector：Lean 验证状态转移和最终证明对象，learner 接收成功证明/否证并过滤失败尝试。这是可审计测试时适应的方向信号，而不是开放轨迹发布。
