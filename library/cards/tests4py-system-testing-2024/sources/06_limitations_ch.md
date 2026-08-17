benchmark 专用于 Python，并继承了 BugsInPy 和新增 example programs 的选择偏差。结果未必能泛化到 JavaScript、Java、C/C++，或具有不同构建系统和 oracle 惯例的 repository-scale tasks。

oracle 质量仍是核心风险。Tests4Py 改善了 functional oracles 的可用性，但任何 oracle 都可能不完整、过严，或与用户期望行为不一致。生成测试也可能过拟合 oracle，而没有真正提升通用可靠性。

操作复现很重要。README 提到 pyenv 和项目特定 Python 版本；依赖漂移、cache state、本地 build tools 和操作系统差异都可能改变结果。agent 实验应记录每条命令和 report object。

本卡 unknown：没有实际运行 Tests4Py subject；本次重生成核验的是论文与仓库文档，不是完整 benchmark execution。
