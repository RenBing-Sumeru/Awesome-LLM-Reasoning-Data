SWE-bench 使仓库级 issue 修复可以通过测试自动评测，但几乎全部是 Python；同一 agent 在 Java、TypeScript、Go、Rust、C/C++ 中还要处理不同构建工具、类型系统和测试框架，Python 成绩不能代表多语言能力。自动挖掘 PR 时，环境失败、测试补丁不完整和 issue–patch 不对应还会产生错误标签。

Multi-SWE-bench 建立跨七种语言的人工核验 benchmark：从真实 issue/PR 提取候选，构造容器并比较 base、test patch 和 gold fix 下的测试状态，再由 68 名专家标注筛选。最终发布 1,632 个评测实例，并另外公开 4,723 个 Multi-SWE-RL 训练实例和完整生产流程。
