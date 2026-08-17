SWE-bench 的核心流程由人工支持固定仓库并以 bug fixes 为主；SWE-Bench++ 将 PR sourcing、环境恢复和 oracle 抽取自动化，扩展到 11 种语言及 bug/feature 等任务类型。相对纯合成 SWE 数据，它仍以真实 issue 和 human PR 为来源。

另一变化是把评测难例连接到训练：对强 agent 失败的实例生成 hint-guided trajectory，而不是只发布金补丁。新意集中于可扩展、多语言的 benchmark-to-training factory，不是新的补丁测试定义。
