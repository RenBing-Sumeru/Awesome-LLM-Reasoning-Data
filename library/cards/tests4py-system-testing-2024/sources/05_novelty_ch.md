先前基线包括提供 Python bugs 的 BugsInPy，以及 Defects4J、BugSwarm、FuzzBench 和各类修复/测试生成语料。常见弱点是 system-level functional oracles 与 generated-input interfaces 并不总是统一可用。

变化点是：Tests4Py 为 Python bug subjects 增加 oracles、system interfaces、unit/system test generation support，并提供统一框架来处理 checkout、build、test、run、grammar access 和 reports。这让生成测试与生成系统输入能跨 subject 比较。

方向信号在于：对 reasoning-data 整理来说，Tests4Py 展示了清晰的可执行契约，可以把模型动作转成 verified outcome。LLM agent 可以提出 unit test、system input 或 debugging action，然后从 benchmark 得到确定性报告。

不新的部分：它建立在 BugsInPy 和既有 testing/debugging 方法之上；设计目标不是 LLM benchmark，不是 preference dataset，也不是 repository-scale autonomous SWE task suite。复用时要检查项目覆盖、oracle adequacy、flaky behavior，以及所选 subject 是否代表目标领域。
