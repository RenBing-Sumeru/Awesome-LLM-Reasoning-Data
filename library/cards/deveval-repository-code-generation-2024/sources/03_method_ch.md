1. 输入：真实代码仓库、目标函数/方法位置、需求标注、参考代码、依赖记录、测试函数，以及 JSONL 格式的模型补全。
2. 流程：选择仓库目标；人工标注需求和依赖；设置 no context、local-file completion 或 local-file infilling 等上下文条件；让模型生成代码；按记录的位置替换原代码体；运行官方测试。
3. 输出：逐样本补全日志、测试结果、Pass@k、依赖召回诊断、prompt 和部分模型预测。
4. 反馈方：DevEval 脚本在对应仓库环境中执行测试；环境错误、依赖缺失或同一仓库被并行修改都会破坏结果。
5. 复现边界：必须 pin GitHub/data artifact、源代码包、dependency data、conda 环境、模型解码参数、上下文条件和 Pass@k 实现。论文摘要与仓库 README 对样本/仓库数存在版本差异，复用时必须记录具体 release。
