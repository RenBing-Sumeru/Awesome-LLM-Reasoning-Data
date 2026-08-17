DS-1000 的一句话贡献是：为 data-science code generation 构造一个自然、可执行、按库划分的 benchmark，并用多条件 checker 降低误接收。核心机制是从真实问题收集任务，改写/扰动以降低对 StackOverflow 原答案的记忆命中，然后只有同时通过功能测试和可选表层约束的输出才被接受。

相对 HumanEval 式算法题，它改变的评测面是 API-heavy 的数据处理、绘图、机器学习和数值库代码。反馈契约是程序化的：`test_execution(solution)` 用生成测试例和参考输出检查行为，`test_string(solution)` 可限制 API 或关键词。方向标签是 executable data-science code benchmark。
