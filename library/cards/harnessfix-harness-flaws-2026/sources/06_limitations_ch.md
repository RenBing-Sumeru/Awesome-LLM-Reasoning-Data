正确性只相对于某个 benchmark 版本和某个 case 的修复验证成立。修复 harness flaw 不等于证明任务语义完美，也不等于证明所有后续 agent 都应该用这个修复口径评分。

方法依赖失败轨迹采样、环境可复现性、benchmark license、工具凭据和 evaluator 稳定性。没有出现在采样失败里的 flaw 可能漏掉；repair operator 也可能过拟合四个研究对象。公开修复案例还会变成未来 agent 训练污染源。
