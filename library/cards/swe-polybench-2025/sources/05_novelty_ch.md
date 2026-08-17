SWE-PolyBench 沿两个经常被混淆的维度扩展仓库修复。第一是编程语言多样性：Java、JavaScript、TypeScript 与 Python 需要不同的包管理器、parser、测试报告器和基础环境。第二是任务多样性：源 PR 包含 bug fix、feature addition 和 refactoring，而不只处理缺陷修复。

其数据贡献在于把 issue、commit、patch、测试状态转换与 container 可执行地耦合起来。F2P 标识解决方案恢复的行为，P2P 防止回归；文件和 CST 节点 retrieval 指标进一步把定位质量与端到端 resolution 分开，同时不改变终局谓词。

该发布以任务为中心，而非以 trajectory 为中心。这个边界很重要：即便两个智能体通过不同工具与动作得到最终 patch，该 patch 仍可复核；但公共 benchmark 无法监督或审计这些中间选择。因此，它是强 evaluation surface，也是未来采集轨迹的潜在环境，而不是现成的 agent-trajectory dataset。
