AlphaProof 把 Lean tactic mode 建模为 RL 环境。状态是由假设和目标构成的完整逻辑上下文，观察是其字符串表示，动作是 Lean tactic，转移由 Lean 执行结果给出。episode 以 kernel 验证通过的证明结束，或在计算预算耗尽时终止；actor 也可能被分配去否证一个陈述。每个 tactic 的奖励为 −1，因此 return 倾向于缩短最长证明分支，并能处理含多个子目标的 AND node。

一个 3B encoder–decoder proof network 为 AlphaZero/Sampled-MuZero 风格树搜索提出 tactic 并估计 value。Main RL 从存入 replay 的成功证明与否证中学习，失败尝试不会进入网络更新。TTRL 则为困难目标生成相关形式变体的专属课程，在推理时进行聚焦的 RL/搜索适应。
