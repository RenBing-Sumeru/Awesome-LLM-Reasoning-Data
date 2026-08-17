PGTS 的区别性贡献不只是“用树搜索做推理”。已有方法早已借助 breadth-first search 或 MCTS 等启发式扩展多条推理路径。PGTS 的变化是把已揭示推理树表示为图状态，并在显式导航动作上学习 policy/value 控制器。扩展、切换同级节点、多层回溯和论文定义的终止，都成为带有 mask、成本、标量奖励与 trajectory return 的决策，可通过 PPO 优化。

该方法还拆分了两个常被混淆的角色。LLaMA 3.1 生成文本推理候选，并提供 hidden-state 与 likelihood 信号；GPS 控制器观察形成的部分树并分配搜索。由此，控制器数据——状态、导航动作、成本、奖励、被选动作的 log-probability 与 value target——成为不同于语言模型 trace 的一等对象。这也暴露出仍然存在的启发式边界：所有同级候选先被生成并按 likelihood 排序，学习式控制器之后才决定如何遍历。

对推理数据整理而言，有用的新意在于对“被放弃计算”给出显式契约。Backtrack 动作通过撤销被放弃后缀的奖励来改变 return，公开代码也保留先前挂接的分支。原则上，一个序列化 episode 因而可以同时保存成功路径、已访问但失败的路径、已生成但未访问的备选路径，以及控制器轨迹。这比只包含最终成功链的数据集提供了更丰富的审计表面。

不能扩大这一新意。PGTS 没有发布新的推理轨迹数据集，没有提供人工 process label，没有通过 SFT 或 RLVR 训练目标 LLM，也没有发布新的独立 verifier。中间奖励基于目标模型 likelihood，终点检查依赖任务特定 outcome signal。该工作最适合归类为面向 agent training、evaluation 和 test-time compute 的 construction recipe 与 scaling study，而不是底层搜索轨迹可复用的证据。
