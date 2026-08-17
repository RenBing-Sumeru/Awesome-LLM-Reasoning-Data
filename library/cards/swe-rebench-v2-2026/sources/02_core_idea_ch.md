其核心贡献是一条语言无关的任务工厂：把公开仓库历史转成面向训练的可执行修复环境，自动合成仓库特定的 setup 与测试 parser，并让每个保留任务都带有终态测试契约。因此，论文扩展的单位不只是 issue prompt，而是任务记录、仓库状态，以及足以执行提交 patch 的环境元数据。

反馈契约有两个层次。构造阶段先应用 `test_patch`，在 solution 之前运行仓库全测试集；随后应用历史 solution patch 并再次运行全测试集。由失败转为通过的测试成为 F2P，预期持续通过的测试成为 P2P。评测阶段，官方 Docker evaluator 应用 candidate patch 与 `test_patch`，运行 `install_config.test_cmd`，把最终日志解析成 PASSED/FAILED/SKIPPED 测试状态；只有归一化后的通过测试集合与 `PASS_TO_PASS + FAIL_TO_PASS` 完全相等时，才把 `passed_match` 设为真。报告还分别列出未恢复的 F2P 与发生回归的 P2P 测试。

这个 programmatic/environmental verifier 能观察 patch 是否应用、进程退出状态、parser 可见的测试标识，以及预期 F2P/P2P 终态；它不能证明 candidate patch 与历史修复语义等价、代码可维护或安全、问题说明完整、未被测试覆盖的行为正确，也不能发现生成 parser 静默漏掉的测试。独立的 gpt-oss-120b、GLM-4.7 与 DeepSeek-V3.2 ensemble 负责筛选 issue 清晰度；它是保守的构造 judge，不是终态正确性 oracle，也不是逐条人工核验。

相较 SWE-bench 风格的人工整理评测集，SWE-rebench V2 把重点转向跨 20 种语言的自动化训练规模采集、可复用的逐仓库 setup、合成日志 parser 和两级发布。相较普通 benchmark，其核心价值是公开的数据构造与环境契约。GitHub issue/PR 历史、Docker、F2P/P2P 测试、mini-SWE-agent 和 LLM judges 都是已有组件；这里的变化是把它们整合并扩展为可检查的任务发布，而不是声称逐一发明这些组件。
