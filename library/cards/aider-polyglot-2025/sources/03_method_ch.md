评测流程是：收集 C++、Go、Java、JavaScript、Python 和 Rust 的 Exercism 练习，先用多个模型筛题，再保留被三个或更少筛选模型解决的 225 道题，最后让被测模型通过 Aider 生成编辑并运行测试。

评分组件是题目测试和正确编辑格式检查。输出只能说明模型在这个题集、仓库版本和 Aider 设置下的表现。复现时需要固定 polyglot-benchmark 仓库提交、Aider 版本、模型设置、语言工具链和测试环境。
