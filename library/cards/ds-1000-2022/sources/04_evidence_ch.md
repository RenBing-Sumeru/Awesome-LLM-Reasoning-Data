arXiv 摘要报告 1,000 个问题、七个 Python 库、被 evaluator 接受的 Codex-002 方案中只有 1.8% 实际错误，并给出当时最佳公开系统 Codex-002 的 43.3% accuracy。GitHub simplified-format README 对提供的 Codex002 answers 给出可执行 sanity result：overall mean 0.388，各库 count 合计 1,000。

逐样本证据是该题测试函数给出的 execution verdict，以及存在时的 string/API check。这个证据只相对于生成测试例、参考实现、包版本和 sandbox 行为可靠。它不能证明覆盖所有语义正确解，尤其是 prompt 有歧义或测试未覆盖边界情况时。
