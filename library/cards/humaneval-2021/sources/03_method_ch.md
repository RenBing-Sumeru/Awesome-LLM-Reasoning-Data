1. 输入：Python 函数签名、docstring prompt，以及代码模型采样出的补全。
2. 生成：模型输出函数体或模块片段。
3. 执行：harness 在受控进程中导入或执行生成代码，并运行该题对应的单元测试。
4. 输出：每个 sample 得到 pass/fail；模型级结果用 pass@k 汇总。
5. 审计字段：task ID、prompt、采样数、temperature、timeout、依赖环境、evaluator commit，以及测试是公开、隐藏还是修改版。

这个 benchmark 本身是 evaluation-only；只有下游另行使用 prompt、solution 或 tests 时才变成训练数据。复现必须固定官方仓库版本和执行沙箱策略。
