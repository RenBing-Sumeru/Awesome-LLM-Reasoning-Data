一句话贡献：Tests4Py 把 Python bug 与可执行 oracle、system-test 接口、unit-test 接口和 CLI 工具打包起来，让测试与调试方法能在可控、可复现条件下评估。

核心机制是在 BugsInPy 风格的故障程序 subject 上加入统一框架。用户可以查询 benchmark metadata、checkout 某个 subject、构建正确环境、运行原始测试、生成或运行 unit tests、生成或运行 system tests、获取 grammar、执行 statistical fault localization，并把输入交给 oracle 运行。

反馈契约很明确：候选测试或输入会在 checkout 出来的 subject 上执行，framework 报告它是否通过、失败，或在 oracle 下暴露出功能行为。因此，虽然 Tests4Py 早于当前 LLM coding-agent benchmark 热潮，它仍然具有程序化评估价值。

最接近的对照包括 BugsInPy、Defects4J、FuzzBench、BugSwarm、TestEval、TestGenEval 和 SWT-Bench。分类理由是 environment-agent trajectory data：智能体可以与 checkout/build/test/run 命令交互并收到执行反馈；它也靠近 programmatically verifiable outcome data，因为终止信号由 tests 与 oracles 计算。
