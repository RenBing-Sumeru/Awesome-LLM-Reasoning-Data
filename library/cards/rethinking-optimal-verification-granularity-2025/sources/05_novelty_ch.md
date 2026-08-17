VG-Search 的主要贡献，是把验证节奏从隐含实现选择提升为一个会影响准确率与计算量的显式搜索变量。同一 scaffold 覆盖逐步 beam search 和答案级 Best-of-N 两个端点，因而能在不改变基本 proposer–verifier 契约的前提下做受控比较。CM-g 与 AM-g 再把这些测量转为可复用的配置级节奏策略。

该工作没有提出 PRM、beam search、Best-of-N，也没有发布新的带标签推理数据集；它也不会在单条解答内部调整 g。对本 track 而言，方向信号在于轨迹 schema：若要审计或复用搜索轨迹，就必须把 verifier 调用时点、跳过的检查、分支剪枝和计算分配与分数一起记录。
