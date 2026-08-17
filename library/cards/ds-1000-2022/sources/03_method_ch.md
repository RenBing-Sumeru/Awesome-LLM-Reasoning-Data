1. 输入：自然语言/代码上下文 prompt、目标库 metadata、`code_context` 中的参考解、模型生成代码和官方 Python 环境。
2. 流程：从 Hugging Face 或 `data/ds1000.jsonl.gz` 读取 1,000 题；让模型按指令给指定变量赋值；调用 `test_execution(solution)`，用生成测试例替换 prompt 中的示例输入并与参考输出比较；若存在表层约束，再调用 `test_string(solution)`。
3. 输出：逐题 pass/fail、各库 mean、整体 accuracy 和可选预测日志。
4. 反馈方：`code_context` 里的官方测试函数；只有同时通过 execution check 和 string check 的输出才被接受。
5. 复现边界：要固定 2024 simplified format 或论文 original format、`environment.yml` 中的 Python/库版本、stateful TensorFlow/Matplotlib 任务的独立进程执行、prompt 格式和模型解码预算。
