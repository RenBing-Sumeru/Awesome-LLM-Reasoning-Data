输入包括 project id、bug id、选择 buggy 或 repaired checkout、工作目录、测试或生成输入、可选 grammar 信息和命令设置。官方 README 记录了 `t4p` CLI，核心命令包括 `info`、`checkout`、`build`、`test`、`unittest`、`systemtest`、`grammar`、`sfl` 和 `run`。

流程是：选择 subject；checkout 目标项目版本；用正确 Python 版本和依赖构建项目，README 说明这里依赖 pyenv-backed setup；运行原始测试或生成测试；把候选系统输入交给 oracle 执行；收集报告。benchmark 还支持按可配置数量生成 passing/failing unit 或 system tests。

输出包括 CLI/API command reports、通过或失败的测试、生成的测试文件或 system-test inputs、oracle outcomes，以及用于调试或 fault localization 的辅助数据。这里的 verifier/reward surface 不是学习模型，而是 Tests4Py 提供的项目特定测试/oracle 执行。

训练/评测用途主要是 evaluation、qualitative analysis、debugging studies 和 automatic program repair experiments。若用于 LLM agent，需要记录确切 PyPI/GitHub 版本、project/bug id、Python runtime、依赖状态、cache policy、generated-test options 和 command transcript。
