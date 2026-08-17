AB-MCTS 把分支选择从固定搜索超参数改写为在线预算分配问题。独立 best-of-\(N\) 采样把每次调用都花在宽度上；迭代修订把调用用于深度；standard fixed-branching MCTS 预先规定 expansion 生成多少子节点。AB-MCTS 则让 `GEN` 选项持续同已有回答路径竞争，并由 Bayesian Thompson sampling 决定下一次调用是打开新回答，还是修订先前回答。

响应树表示对推理数据分析同样重要。非根边不只是抽象搜索转移：它把一个完整回答连接到另一个完整回答，后者由任务、先前响应和 evaluator 反馈共同条件化生成。因此，一棵树可以在同一对象中编码替代尝试与明确修订谱系。只要本地 artifact 得到保留，树宽与修订深度的分离就使分配策略、生成预算、evaluator 结果和最终选择能够在节点级审计。

两个变体改变的是建模方式，而不是引入新的监督来源。AB-MCTS-M 通过 mixture 建模自适应分支；AB-MCTS-A 通过 Gaussian 或 Beta 共轭模型聚合观测。二者都没有添加人工步骤标签、学习式 judge 或 process reward model。反馈仍来自任务 evaluator：公开测试通过比例、ARC demonstration accuracy 或 MLE validation score。

对数据策展而言，关键新意在于区分**轨迹生成能力**与**轨迹发布**。官方代码支持完整 `MCTSResult` 树序列化和逐调用请求/响应日志，因此为未来发布定义了较强的捕获 schema；但已发布 artifact 并未分发实际实验样本。这使 AB-MCTS 同时成为搜索配方和审计案例：开放算法、汇总树图和选中答案，不等于发布每个生成节点及其反馈谱系。

不应把新意扩大到证据之外。该方法没有建立新的训练目标、新 benchmark、公开轨迹数据集、显式失败剪枝，也没有给出“自适应变深/变宽普遍最优”的一般定理。其实证贡献限于已测试 benchmark surface、模型 API、evaluator 和名义生成调用预算。
