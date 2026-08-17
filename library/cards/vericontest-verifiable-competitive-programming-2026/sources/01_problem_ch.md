现有代码生成 benchmark 多用有限测试判断程序行为，模型可能通过样例或弱测试而隐藏边界错误；形式验证 benchmark 又常给出小型手写函数，缺少真实竞赛题的算法复杂度、输入输出协议和性能要求。代码正确、规范完整和机器证明通常被分开评测，无法观察端到端 vericoding 的瓶颈。

VeriContest 将 946 道 LeetCode/Codeforces 题转换为 Rust/Verus 任务，每题同时提供自然语言描述、形式化规格、judge-accepted 实现、Verus 证明以及大量正负测试。数据构建结合专家写种子、coding agent 扩展、在线判题、Verus 内核检查和规格反例搜索，用于分别评测 spec、code、proof 与完整 verified code generation。
