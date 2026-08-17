在平均预算 1.5、2.0、3.0 下，论文报告 AdaCompute-GBM 在四个 model-dataset setting 中均优于 fixed、random 和 prompt-length heuristic baseline。MATH 的预算 3.0 设置中，相对 Fixed-b 的绝对提升分别为 DeepSeek-V3 5.8 点、GPT-4o-mini 5.2 点、Qwen2.5-7B 6.4 点；DeepSeek-V3 在 GSM8K 上提升 1.9 点。学习后 policy 的 oracle-label imitation accuracy 为 91%–99%，与 oracle 的 task-accuracy gap 为 0.4–1.4 点。论文给出三个 seed 的均值与标准差。

Classifier 消融显示，在 pooled setup 中，tree-based GBM 与 Random Forest 的预算使用更接近 oracle，而 linear、RBF-SVM 或小型 MLP 往往退化为低预算。难度分析称 level-3 MATH 问题的 self-consistency 增益最大，支持倒 U 形分配模式。

这些结果评估的是小规模 benchmark 子集和经验 utility table 上的分配，不能证明 oracle label 能在模型更新、API drift、新领域或不同成本指标下迁移，也不能证明可复用 trace dataset 已发布。公开仓库支持 pipeline 实现，但表格背后的 response 与 label artifact 未在仓库树中得到确认。
