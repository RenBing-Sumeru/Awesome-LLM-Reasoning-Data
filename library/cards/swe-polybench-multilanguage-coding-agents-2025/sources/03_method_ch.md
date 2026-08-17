1. **收集真实变更：** 从 21 个维护活跃仓库抓取带 issue 的 PR，保留能分离 source patch 与 test patch 的 bug、feature 和 refactoring 任务。

2. **构建语言环境：** 针对 Maven/Gradle、npm 等生态编写 Dockerfile 和测试命令，在 base commit 上安装依赖并确认原测试可执行。

3. **提取 F2P/P2P：** 比较 base、test patch 和 gold patch 下测试状态，要求至少一个测试由失败变通过，并记录应持续通过的回归测试；无法稳定重放的实例删除。

4. **生成结构指标：** 解析 gold patch，标注修改文件、函数、类和 CST 节点，形成定位 precision/recall；再按语言、仓库和任务类型抽取 PB500。复现需固定 harness、容器与解析器版本。
