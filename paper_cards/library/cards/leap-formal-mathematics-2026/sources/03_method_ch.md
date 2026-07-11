输入是形式化 Lean 定理、可用上下文、检索材料和后端 LLM。流程在直接证明、蓝图生成、子目标分解、formal sketch、Lean 代码生成、编译执行、修订与回溯之间循环。输出包括候选证明、证明图状态、编译器消息和被接受的 Lean 产物。

verifier 是 Lean 编译/内核检查。论文在 IMO-LeanProofBench 上评测，并报告 Putnam 2025 结果；官方项目页报告该 benchmark 的总体 70.0% solve rate。复现必须固定 Lean 环境、定理文件、Mathlib/检索状态、后端模型和搜索预算。应核验官方论文、项目页与解答代码库。
