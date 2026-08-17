SOLVE-THEN-LEARN pipeline 先估计 Acc(x,b)，即输入 x 在预算 b 下通过多数投票得到正确答案的概率。给定成本 C(b) 和 Lagrange multiplier lambda，oracle label 是使 Acc(x,b) 减去 lambda 乘 C(b) 最大的预算。lambda 增大意味着计算价格更高；binary search 寻找使平均选中成本接近目标 B 的取值。论文采用离散预算 1、2、4、8、16；当精确平均目标位于阶梯之间时，在相邻解之间做随机混合。

这些预算标签构成五分类监督数据。Gradient-boosted machine 根据 16 个词法、结构和难度特征预测 oracle action，其中包括一次低成本模型调用得到的归一化 entropy estimate。在线路由随后只需提取特征、运行一次 classifier，再按选定预算执行 self-consistency。

反馈契约是 programmatic、answer-level 的：把响应窗口归并为多数答案，与 reference answer 比较，形成经验 utility，再按样本数定价。分配器用 cross-entropy 模仿 oracle label；尽管使用 policy 术语，它并非通过在线 policy-gradient RL 训练。相对固定、随机或 prompt-length heuristic 分配，其新意在于全局受约束的 Lagrangian labeling rule，以及把该规则摊销到低成本 classifier。
