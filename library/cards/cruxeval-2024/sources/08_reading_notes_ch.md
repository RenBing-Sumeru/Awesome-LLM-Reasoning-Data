不要把 CRUXEval 分数当作 HumanEval 式写代码分数。模型通常是在回答固定函数的行为，verifier 检查 I/O 一致性。比较榜单前应先看任务构造和答案解析器。input prediction 与 output prediction 必须分开读：反向推理可能有多解歧义，而正向执行通常更确定。
