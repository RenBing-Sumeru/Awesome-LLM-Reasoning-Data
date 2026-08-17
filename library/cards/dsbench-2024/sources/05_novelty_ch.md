已有基线是简化的 data-science 评测，常见对象是代码片段、单表或窄 API。DSBench 把对象改成长上下文、文件密集型 workflow：agent 要理解任务背景，操作数据文件，对表格或图片推理，并给出分析答案或建模结果。

方向信号是评估 autonomous data-science workflow execution，而不只是代码语法或库补全。质量信号是真实来源材料、分开的 analysis/modeling 轨道、公开脚本，以及针对强 agent 的 gap metrics。不新的是使用 Kaggle/ModelOff 式任务、notebook 和指标汇总。复用前要检查数据所有权、非商业限制、processed-file provenance、judge 依赖、API 成本，以及 hidden/source 数据是否仍可获取。
