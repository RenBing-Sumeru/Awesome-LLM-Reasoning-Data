Socratic-MCTS 把 action 定义为生成的 subquestion，把 node state 定义为该 subquestion 与 answer 的配对。Question policy 根据当前轨迹提出下一步 action，answer policy 则只依据图像独立回答每个 subquestion；实验中两个角色均使用同一 InternVL2.5-78B。UCT 在累计节点价值与探索之间进行平衡。

为估计节点价值，方法附加多样化 wrap-up transition，并采样八个较短 completion。Parser 提取规范化多选答案，启发式规则降低冗长或退化输出的权重，再由加权多数一致性给出 rollout value。Direct-exit node 允许答案终止路径，初始置信度阈值则可直接跳过搜索。与 Least-To-Most prompting 相比，分解过程经过搜索和价值引导；与普通 MCTS 相比，action 是语义 subquestion。内部一致性仍只是需要判断的代理信号，也可能自信地出错。
