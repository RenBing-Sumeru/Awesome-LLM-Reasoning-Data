既有 adaptive-compute 方法常使用手工难度分数或阈值，而统一 self-consistency 会为所有问题固定同一采样数。AdaCompute 从全局受约束目标出发，用单一 dual variable 给各预算定价，根据经验 utility 产生 input-specific label，再在昂贵推理前预测这些标签。由此，预算选择成为显式监督数据对象，而不再只是隐含 runtime heuristic。

论文并未分别首创 self-consistency、多数投票、Lagrangian relaxation、gradient-boosted tree 或难度特征。其特定贡献是 SOLVE-THEN-LEARN 组合、成本单调的预算定位，以及该分配设置下的 imitation-regret 分析。Oracle 的精确性只相对于有限经验 utility table 和声明的 cost model，并非未来部署的 ground truth。

对 Rollout, Search, and Test-Time Trace Data 而言，方向信号是可复用的 question-budget record：它把多次响应连接到 utility estimate 和派生 allocation label。质量应从采样方差、答案解析、预算核算、split discipline 与分布稳定性判断。匹配样本预算下更高的 benchmark accuracy 是分配器证据，不是数据质量证明。
