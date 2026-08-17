TestGenEval 发布 1,210 个真实代码—测试文件对，来自 11 个维护良好的 Python 仓库，原始人工测试共 68,647 个。benchmark 包含从零生成完整 test file，以及给定部分测试后补全开头、结尾或附加测试等任务；每个实例绑定仓库版本和 Docker 环境。

其 verifier 不是单一文本匹配：先检查测试能否解析和运行，再计算对目标源文件的 coverage improvement，并通过 mutation testing 衡量发现人为缺陷的能力。该设计把“写出合法测试”和“写出有判别力测试”分开，主要用于评测，也可作为测试生成器与代码 reward 模型的数据基础。
