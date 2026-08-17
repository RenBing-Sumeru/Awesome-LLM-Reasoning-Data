核心贡献是把树导航学习为作用于动态推理图的策略。一个两层 GPS 图网络编码节点特征与父子结构，并同时输出策略 logits 和 value estimate；PPO 从随机初始化开始，利用搜索轨迹训练该控制器。目标 LLM 仍是推理步骤生成器：PGTS 学习的是在哪里继续、尝试同级分支或后退，而不是如何生成推理文本。

在论文表述中，最大深度 \(D\) 对应 \(D+2\) 个受约束动作：扩展当前叶节点、转到当前父节点的另一个子节点、先回退指定层数再选择其他分支，以及终止。深度与同级节点可用性决定无效动作的 mask。该动作空间把搜索控制变成显式的状态—动作记录，而不是将其埋在固定 MCTS 选择规则中。

反馈契约是 mixed。中间边奖励使用目标模型基于 likelihood 的评价，而不是步骤正确性的证明。Expand 获得新步骤奖励减去动作成本；branch 获得所选同级节点与当前路径之间的奖励差，再减去成本；backtrack 撤销归属于被放弃后缀的奖励，加入新选同级节点奖励，并扣除更高成本；terminate 获得终点路径奖励减去成本。论文允许终点奖励来自 outcome reward model，或与 ground-truth answer 比较。因此，程序化任务检查可以验证部分最终结果，但 likelihood 塑形的中间反馈仍依赖模型，并可能与节点特征产生相关误差。

论文报告的动作成本分别为：expand 0.1、branch 0.2、backtrack 0.5、terminate 0.0。这使计算分配成为学习目标的一部分：即使两个路径最终正确性相同，只要导航序列不同，其 return 也可能不同。PPO 保存带标量奖励的状态/动作转移，并利用折扣轨迹 return 与 generalized advantage estimate 训练 value function；公开设置包括 clip range 0.2、discount 0.99 和 GAE lambda 0.95。

一项重要实现漂移必须明确保留。论文与 Algorithm 1 描述显式 terminate 动作和 \(D+2\) 个选择；但在审计 commit `32ce4537e904c34678cc993b6c5ad0d50c3484a4` 中，`pgts.py` 把动作 0 映射为 continue、动作 1 映射为 branch，更大动作映射为按深度索引的 backtrack，公开动作数为 `depth_limit + 1`。运行在生成的任务状态到达 terminal，或达到 `max_search_steps` 时停止。这种代码行为不等价于策略主动选择 terminate，因此本 Card 不会把两套契约悄然合并。
