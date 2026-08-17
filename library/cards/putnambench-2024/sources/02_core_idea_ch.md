核心贡献是一句话：把 Putnam 竞赛题转成多证明助手的形式化 theorem-proving benchmark，并把成败交给证明助手检查器，而不是交给字符串匹配或人工评分。机制上，作者手工把题目形式化到 Lean 4、Isabelle，并为相当一部分题目提供 Coq 版本；对需要先找闭式答案再证明的题目，项目页还说明了 factored-solution 任务，可以区分“答案已写入 theorem 后证明”和“同时找答案与证明”。

最接近的对照是 MATH/GSM8K 这类自然语言数学 benchmark，以及只覆盖单一证明助手或较浅题目的 formal proof benchmark。PutnamBench 的变化不在于“Putnam 题很难”这一句，而在于评测对象变成 proof assistant 内的 theorem，反馈契约变成 kernel/compiler acceptance。方向标签应写成 verifier-backed formal-math evaluation；复用时必须保留 public statement、语言、仓库版本和 proof-contamination 风险。
