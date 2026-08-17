Tests4Py 处理的是软件测试研究中的 benchmark 设计问题：很多 bug benchmark 提供真实缺陷和稀疏单元测试，但缺少强系统级 oracle，以及接入生成输入的接口。论文发表于 FSE 2024，并以 arXiv:2307.05147 公开；arXiv v2 于 2024-05-14 更新。

具体问题是：如何在 Python 程序上评测测试生成、调试和自动修复方法，同时支持 unit-test 与 system-test generation。Tests4Py 源自 BugsInPy，包含 7 个真实 Python 应用中的 73 个 bug，以及 6 个 example program bug。每个 subject 都配有 functional correctness oracle，并支持生成或运行 system tests 与 unit tests。

数据对象是可执行 benchmark subject：checkout metadata、buggy/repaired versions、项目特定运行环境、预置测试、生成测试、grammar 或输入接口、oracle 执行和报告。评测表面是 environmental 与 programmatic 的，因为成功取决于对 subject 运行输入或测试并观察 oracle/test outcomes。

复用边界：把它作为靠近 code-agent evaluation 和 verifier-bearing outcome data 的测试基础设施看待。它不是 LLM 专用数据集，但 CLI 与执行契约让它适合评估会创建测试、调试失败或驱动自动程序修复的智能体。

主要来源：arXiv:2307.05147 的摘要/HTML；官方 GitHub README: https://github.com/smythi93/Tests4Py。
