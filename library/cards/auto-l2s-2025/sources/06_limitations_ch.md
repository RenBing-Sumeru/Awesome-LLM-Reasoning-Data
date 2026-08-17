论文指出，该方法依赖成本较高的高质量 long/short paired annotation，长短二分较粗，并且效率结果绑定自回归解码。构造 verifier 只是 final-answer correctness；它不能证明中间步骤有效，而选择 shortest correct sample 可能偏向碰巧答对或论证不足的 rationale。Teacher 错误与风格 artifact 也会传播到两种模式。

完整 paired dataset、被拒样本、精确数量、tie、data license、split、去污染与正确性日志未确认为发布。代码仓库可见历史只有一个 commit，根目录未显示 license file；只有 model repository 声明 Apache-2.0。论文 EASY routing token 与实现命名不同，复现时需谨慎。结果覆盖两个 base size，且以数学/推理 benchmark 为主；部分任务准确率下降说明压缩并非普遍安全。Model weights 无法弥补这些 data-audit gap。
