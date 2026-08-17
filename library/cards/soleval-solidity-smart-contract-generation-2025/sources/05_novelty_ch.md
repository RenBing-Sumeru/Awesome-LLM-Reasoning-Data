已有 Solidity benchmark 多为独立函数、短合约或只以编译/tests 计算 Pass@k，无法反映真实仓库调用，也不同时考虑安全和费用。SolEval 将生成单元置于 28 个实际项目上下文，并把 Foundry、Slither 与 gas profiling 组成多目标 verifier。

新意不是发明新的静态分析器或 gas metric，而是把三类反馈绑定到同一 repository-level 数据对象，允许研究 correctness–security–efficiency trade-off。它还通过 SFT 证明 benchmark records 能转为训练数据。
