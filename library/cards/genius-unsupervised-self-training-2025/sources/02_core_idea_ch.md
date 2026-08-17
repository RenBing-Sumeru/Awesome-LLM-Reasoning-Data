一句话概括，Genius 把模型自身的非短视 continuation likelihood 转换成带权的步骤局部轨迹偏好，再用 Advantage-Calibrated Optimization（ACO）训练模型。对于一个查询和当前回答前缀，policy 维护多个路径的 beam，采样候选下一步，并在每个候选之后生成未来 continuation；该未来部分的平均 token log probability 就是 foresight score。归一化后的分数分布有两种用途：从中采样以保留多条探索路径，同时把最高分路径与一个重新采样的备选路径组成 exploitation 偏好。每条路径的 advantage 等于其 foresight value 减去前一步携带的 value。（论文 §2.2）

反馈契约完全位于 policy 内部。它能观察同一 policy 的 continuation token probability、当前决策相对前一决策的 value，以及搜索框架保留了哪些轨迹；它不能观察数学结论是否真实、代码能否执行、逻辑推断是否有效，或用户是否偏好结果。监督在每个决策位置局部附着，但比较的是从该位置延伸出的完整轨迹，因此同时具有 step-level 和 trajectory-valued 特征。随后，ACO 用 chosen/rejected 的 advantage 差调节优化：若名义上的 negative 具有更高估计 advantage，就减弱惩罚。它校准的是噪声偏好的强度，并没有加入新的正确性信息。（论文 §2.3 与 Appendix A）

官方代码把可复用记录定义得更具体。探索阶段可以保存 `question`、从输入复制的 `ground_truth`、所选 `response`、`response_all_beams`、`traj_pool`、`step_pool`、`prob_pool`、`adv_pool`、`step_prob` 和 `sample_id_pool`。偏好构造器把这些过程状态压缩成 `prompt`、作为 assistant message 列表的 `chosen` 与 `rejected`、二者权重以及 chosen 平均权重。这个压缩过程对审计很关键：只有最终 pair 时，无法看到其他候选、随机抽取 rejected path 的过程、完整分数分布或生成它的 policy revision。

与最接近的方法对比可以说明其方向。Self-Rewarding 让模型给完整回答打 1–5 分；ScPO 从 self-consistency 构造回答偏好；步骤级方法可能仍然短视；MCTS-style rewarding 需要成本更高的回溯；作者相关的 φ-Decoding 则把 foresight 用于推理时探索。Genius 把 foresight 与训练数据构造、ACO 结合起来。候选生成、beam search、DPO-style implicit reward 和 future simulation 都不是新组件；真正改变的是把未来 continuation likelihood 变成无标签偏好数据的步骤局部选择接口。
