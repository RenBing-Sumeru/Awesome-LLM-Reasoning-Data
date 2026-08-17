仓库级编码任务是环境问题，而不只是代码生成 prompt。有效评测需要 issue 上下文、精确仓库版本、构建依赖、候选 patch、测试和终止规则。仅含 Python 的基准不能覆盖 Java、JavaScript 与 TypeScript 在包管理器、parser 和运行时镜像上的工程差异。

SWE-PolyBench 发布来自 21 个仓库的 2,110 条 test 任务：Java 165、JavaScript 1,017、TypeScript 729、Python 199，覆盖 bug fix、feature addition 和 refactoring。自然语言来源主要是英文 GitHub issue/PR；“multi-language”指编程语言，而不是翻译后的 prompts。

每条任务把 problem statement 与 base commit、gold code patch、test patch、F2P/P2P 测试标识、任务特定 test command 和实例 Dockerfile 连接起来，因此公开了环境与最终 patch 的反馈边界。它不发布标准化 state/action/observation trajectory，所以公共表支持 evaluation，但不能直接用于轨迹 SFT 或 RL。
